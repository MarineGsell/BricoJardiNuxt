export default eventHandler(async (event) => {
  const { id } = getRouterParams(event)
  const { user } = await requireUserSession(event)

  // Route sécurisée
  if (!user) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized'
    })
  }

  // Récupération de la réalisation avant suppression pour avoir l'imgSrc
  const workToDelete = await useDrizzle()
    .select()
    .from(tables.works)
    .where(eq(tables.works.id, Number(id)))
    .get()

  if (!workToDelete) {
    throw createError({
      statusCode: 404,
      message: 'Work not found'
    })
  }

  // Suppression de la réalisation
  const deletedWork = await useDrizzle()
    .delete(tables.works)
    .where(and(eq(tables.works.id, Number(id))))
    .returning()
    .get()

  // Suppression de l'image du Blob si elle existe
  if (workToDelete.imgSrc && !workToDelete.imgSrc.startsWith('data:')) {
    try {
      await hubBlob().del(workToDelete.imgSrc)
      console.log('✅ Image supprimée du Blob:', workToDelete.imgSrc)
    } catch (error) {
      console.error('❌ Erreur suppression Blob:', error)
      // On ne fait pas échouer la suppression si l'image ne peut pas être supprimée
    }
  }

  if (!deletedWork) {
    throw createError({
      statusCode: 404,
      message: 'Work not found'
    })
  }
  return deletedWork
})
