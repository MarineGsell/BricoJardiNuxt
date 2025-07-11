export default eventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const { title, category, place, imgSrc, description } = await readBody(event)
  const { user } = await requireUserSession(event)
  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
      message: 'You must be logged in to update a project.',
    })
  }
  const works = await useDrizzle().update(tables.works).set({
    title,
    category,
    place,
    imgSrc,
    description
  }).where(eq(tables.works.id, Number(id))).returning().get()

  return works
})
