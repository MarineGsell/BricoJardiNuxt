
export default eventHandler(async (event) => {
    const { firstname, lastname, email, phone, text } = await readBody(event)

    try {
        const { sendMail } = useNodeMailer()
        await sendMail({
            subject: 'Demande de devis Brico Jardi',
            text: `Vous avez recu un nouveau message de :
            Nom :  ${firstname} ${lastname}
            Email : ${email}
            Téléphone : ${phone}
            Message : ${text}`,
            to: process.env.CLIENT_EMAIL 
        })
        const client = await useDrizzle().insert(tables.clients).values({
            firstname,
            lastname,
            email,
            phone,
            text,
            createdAt: new Date()
        }).returning().get()
        return { success: true, client } 
    } catch (error) {
        return { success: false, error: 'Une erreur est survenue lors de l\'envoi du message.' }
    }
})


