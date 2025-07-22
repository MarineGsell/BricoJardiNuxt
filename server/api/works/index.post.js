export default eventHandler(async (event) => {
  // Authentification
  const { user } = await requireUserSession(event)
  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
      message: 'You must be logged in to add a work.',
    })
  }

  // Lecture des données FormData
  const form = await readMultipartFormData(event)
  if (!form) {
    throw createError({
      statusCode: 400,
      statusMessage: 'No form data received'
    })
  }

  // Extraction des champs
  const title = form.find(field => field.name === 'title')?.data?.toString()
  const category = form.find(field => field.name === 'category')?.data?.toString()
  const place = form.find(field => field.name === 'place')?.data?.toString()
  const description = form.find(field => field.name === 'description')?.data?.toString()
  const imageFile = form.find(field => field.name === 'image')
  const existingImage = form.find(field => field.name === 'existingImage')?.data?.toString()

  // Validation des champs obligatoires
  if (!title || !category || !place || !description) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields'
    })
  }

  let imgSrc = existingImage || null

  // Gestion de l'upload d'image vers Blob
  if (imageFile && imageFile.data) {
    try {
      // Génération d'un nom unique
      const timestamp = Date.now()
      const randomString = Math.random().toString(36).substring(2, 8)
      const fileExtension = imageFile.filename?.split('.').pop() || 'jpg'
      const fileName = `works/${timestamp}-${randomString}.${fileExtension}`

      console.log('🔧 Tentative upload:', fileName)

      // Upload vers NuxtHub Blob
      const blob = await hubBlob().put(fileName, imageFile.data, {
        contentType: imageFile.type || 'image/jpeg'
      })

      imgSrc = blob.pathname
      console.log('✅ Blob uploadé, pathname:', blob.pathname)
      console.log('✅ imgSrc défini sur:', imgSrc)
      } catch (blobError) {
      console.error('❌ Erreur upload Blob:', blobError.message)
      // Fallback : continuer sans image plutôt que de planter
      imgSrc = null
    }
  }
  console.log('💾 Valeur finale imgSrc avant sauvegarde:', imgSrc)


  // Sauvegarde en base de données
  try {
    console.log('🔍 Tentative insertion avec:', { title, category, place, imgSrc, description })
    
    const works = await useDrizzle().insert(tables.works).values({
      title,
      category,
      place,
      imgSrc,
      description
    }).returning().get()

    console.log('✅ Work créé:', works)
    return works
  } catch (dbError) {
    // Forcer l'affichage de l'erreur
    console.log('❌ ERREUR CAPTURÉE !')
    console.log('❌ Type:', typeof dbError)
    console.log('❌ Objet complet:', JSON.stringify(dbError, null, 2))
    console.log('❌ Message direct:', dbError?.message)
    console.log('❌ Code direct:', dbError?.code)
    
    // Tenter de voir toutes les propriétés
    if (dbError) {
      for (const key in dbError) {
        console.log(`❌ ${key}:`, dbError[key])
      }
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Database Error - Forced',
      message: `DB Error: ${dbError?.message || 'Unknown'}`
    })
  }
})