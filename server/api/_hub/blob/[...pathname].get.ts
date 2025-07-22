export default eventHandler(async (event) => {
    const pathname = getRouterParam(event, 'pathname')

    if (!pathname) {
        throw createError({
            statusCode: 404,
            statusMessage: 'File not found'
        })
    }

    try {
        return await hubBlob().serve(event, pathname)
    } catch (error) {
        throw createError({
            statusCode: 404,
            statusMessage: 'File not found'
        })
    }
})