export default defineEventHandler(async (event) => {
    const works = await useDrizzle().select().from(tables.works).all()
    return works
})