export default eventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const { user } = await requireUserSession(event)
  if (!user) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized'
    })
  }

  const deletedWork = await useDrizzle().delete(tables.works).where(and(
    eq(tables.works.id, Number(id))
  )).returning().get()

  if (!deletedWork) {
    throw createError({
      statusCode: 404,
      message: 'Work not found'
    })
  }
  return deletedWork
})
