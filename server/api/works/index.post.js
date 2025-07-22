export default eventHandler(async (event) => {
  // Route sécurisée
  const { user } = await requireUserSession(event)
  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
      message: 'You must be logged in to add a competence.',
    })
  }
  
  // Lecture du formData
  const form = await readMultipartFormData(event)
  if(!form) {
    throw createError({
      statusCode: 400,
      message: 'No form data received'
    })
  }

  // Extraire les champs du formData
  const title = form.find(field => field.name === 'title')?.data?.toString()
  const category = form.find(field => field.name === 'category')?.data?.toString()
  const place = form.find(field => field.name === 'place')?.data?.toString()
  const description = form.find(field => field.name === 'description')?.data?.toString()
  const imageFile = form.find(field => field.name === 'image')
  const existingImage = form.find(field => field.name === 'existingImage')?.data?.toString()

  console.log('📝 Données reçues:', { title, category, place, description, hasImage: !!imageFile, existingImage })

  if (!title || !category || !place || !description) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields'
    })
  }

  let imgSrc = existingImage || null

  if (imageFile && imageFile.data) {
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(2, 8)
    const fileExtension = imageFile.filename?.split('.').pop() || 'jpg'
    const fileName = `works/${timestamp}-${randomString}.${fileExtension}`

    const blob = await hubBlob().put(fileName, imageFile.data, {
      contentType: imageFile.type || 'image/jpeg'
    })

    imgSrc = blob.pathname
    console.log('✅ Image uploadée vers Blob:', fileName)
  }

  // Sauvegarde en BDD
  const works = await useDrizzle().insert(tables.works).values({
    title,
    category,
    place,
    imgSrc,
    description
  }).returning().get()

  return works
})
