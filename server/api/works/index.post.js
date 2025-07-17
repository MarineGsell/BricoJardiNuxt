export default eventHandler(async (event) => {
  const { title, category, place, imgSrc, description } = await readBody(event)
  const { user } = await requireUserSession(event)
  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
      message: 'You must be logged in to add a competence.',
    })
  }
  
  const works = await useDrizzle().insert(tables.works).values({
    title,
    category,
    place,
    imgSrc,
    description
  }).returning().get()

  return works
})
