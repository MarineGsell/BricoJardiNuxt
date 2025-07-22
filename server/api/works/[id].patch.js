export default eventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const { user } = await requireUserSession(event)
  
  // Route sécurisée
  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
      message: 'You must be logged in to update a project.',
    })
  }

  // Récupérer la réalisation actuelle pour avoir l'ancienne image
  const currentWork = await useDrizzle()
    .select()
    .from(tables.works)
    .where(eq(tables.works.id, Number(id)))
    .get()

  if (!currentWork) {
    throw createError({
      statusCode: 404,
      message: 'Work not found'
    })
  }

  // Lire les données FormData
  const form = await readMultipartFormData(event)
  if (!form) {
    throw createError({
      statusCode: 400,
      statusMessage: 'No form data received'
    })
  }

  // Extraire les champs
  const title = form.find(field => field.name === 'title')?.data?.toString()
  const category = form.find(field => field.name === 'category')?.data?.toString()
  const place = form.find(field => field.name === 'place')?.data?.toString()
  const description = form.find(field => field.name === 'description')?.data?.toString()
  const imageFile = form.find(field => field.name === 'image')
  const existingImage = form.find(field => field.name === 'existingImage')?.data?.toString()

  if (!title || !category || !place || !description) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields'
    })
  }

  let imgSrc = currentWork.imgSrc // Par défaut, garder l'ancienne image

  // Gestion de l'image
  if (imageFile && imageFile.data) {
    // CAS 1: Nouvelle image uploadée
    try {
      // Upload de la nouvelle image
      const timestamp = Date.now()
      const randomString = Math.random().toString(36).substring(2, 8)
      const fileExtension = imageFile.filename?.split('.').pop() || 'jpg'
      const fileName = `works/${timestamp}-${randomString}.${fileExtension}`

      const blob = await hubBlob().put(fileName, imageFile.data, {
        contentType: imageFile.type || 'image/jpeg'
      })

      // Supprimer l'ancienne image si elle existe et que ce n'est pas du Base64
      if (currentWork.imgSrc && !currentWork.imgSrc.startsWith('data:')) {
        try {
          await hubBlob().del(currentWork.imgSrc)
          console.log('✅ Ancienne image supprimée:', currentWork.imgSrc)
        } catch (error) {
          console.error('❌ Erreur suppression ancienne image:', error)
        }
      }

      imgSrc = blob.pathname
      console.log('✅ Nouvelle image uploadée:', fileName)
    } catch (blobError) {
      console.error('❌ Erreur upload nouvelle image:', blobError.message)
      // En cas d'erreur, garder l'ancienne image
      imgSrc = currentWork.imgSrc
    }
  } else if (existingImage === 'keep') {
    // CAS 2: Garder l'ancienne image (pas de changement)
    imgSrc = currentWork.imgSrc
  } else if (existingImage === 'remove') {
    // CAS 3: Supprimer l'image
    if (currentWork.imgSrc && !currentWork.imgSrc.startsWith('data:')) {
      try {
        await hubBlob().del(currentWork.imgSrc)
        console.log('✅ Image supprimée')
      } catch (error) {
        console.error('❌ Erreur suppression image:', error)
      }
    }
    imgSrc = null
  }

  // Mise à jour en base
  const works = await useDrizzle()
    .update(tables.works)
    .set({
      title,
      category,
      place,
      imgSrc,
      description
    })
    .where(eq(tables.works.id, Number(id)))
    .returning()
    .get()

  return works
})