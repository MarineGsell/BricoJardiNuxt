import { Resend } from 'resend';
import { errorMessages } from 'vue/compiler-sfc';

export default eventHandler(async (event) => {
    const { firstname, lastname, email, phone, text } = await readBody(event)
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        console.log('Resend créé, envoi...');

        const result = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'dgsell@hotmail.fr',
        replyTo: email,
        subject: 'Demande de devis Brico Jardi',
        html: `<p>
        Vous avez une nouvelle demande de devis depuis votre site Brico Jardi : </br></br>
        ${text} </br></br>
        Informations de contact : </br>
        ${firstname} ${lastname} </br>
        ${email} </br>
        ${phone}
        </p>`
        });
        console.log('✅ Email envoyé ! ID:', result.data?.id);
        
        const client = await useDrizzle().insert(tables.clients).values({
            firstname,
            lastname,
            email,
            phone,
            text,
            createdAt: new Date()
        }).returning().get()
        console.log('✅ Sauvegarde BDD OK')
        return { success: true, client } 
    } catch (error) {
        console.error('❌ ERREUR COMPLETE:', error);
        console.error('❌ MESSAGE:', errorMessages);
        return { success: false, error: 'Une erreur est survenue lors de l\'envoi du message.' }
    }
})

// export default eventHandler(async (event) => {
//     console.log('🚀 API APPELÉE !')
//     return { test: 'API fonctionne' }
// })
