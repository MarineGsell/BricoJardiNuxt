// import { Resend } from 'resend';
// import { errorMessages } from 'vue/compiler-sfc';

// export default eventHandler(async (event) => {
//     const { firstname, lastname, email, phone, text } = await readBody(event)

//     try {
//         // Envoie du formulaire avec Resend
//         const resend = new Resend(process.env.RESEND_API_KEY);
//         console.log('Resend créé, envoi...');

//         const result = await resend.emails.send({
//         from: 'onboarding@resend.dev',
//         to: 'dgsell@hotmail.fr',
//         replyTo: email,
//         subject: 'Demande de devis Brico Jardi',
//         html: `<p>
//         Vous avez une nouvelle demande de devis depuis votre site Brico Jardi : </br></br>
//         ${text} </br></br>
//         Informations de contact : </br>
//         ${firstname} ${lastname} </br>
//         ${email} </br>
//         ${phone}
//         </p>`
//         });

//         console.log('✅ Email envoyé ! ID:', result.data?.id);
        
//         // Stockage en BDD
//         const client = await useDrizzle().insert(tables.clients).values({
//             firstname,
//             lastname,
//             email,
//             phone,
//             text,
//             createdAt: new Date()
//         }).returning().get()
//         console.log('✅ Sauvegarde BDD OK')
//         return { success: true, client } 
//     } catch (error) {
//         console.error('❌ ERREUR COMPLETE:', error);
//         console.error('❌ MESSAGE:', errorMessages);
//         return { success: false, error: 'Une erreur est survenue lors de l\'envoi du message.' }
//     }
// })


import { Resend } from 'resend';
import { errorMessages } from 'vue/compiler-sfc';

// Création d'une map pour récupérer les IP
const ipMap = new Map()

export default eventHandler(async (event) => {
    const { firstname, lastname, email, phone, text } = await readBody(event)

    // Limitation d'envoie de formulaire à 1/min/IP
    const IP = getRequestIP(event)
    const now = Date.now()
    console.log('IP détectée:', IP)
    console.log('Map contient cette IP:', ipMap.has(IP))
    if (ipMap.has(IP)) {
        console.log('Dernière fois:', ipMap.get(IP))
        console.log('Maintenant:', now)
        console.log('Différence:', now - ipMap.get(IP))
    }
    
    if (ipMap.has(IP)) {
        const lastTime = ipMap.get(IP)
        if (now - lastTime < 60000) {
            return { success: false, error: 'Veuillez patienter avant de renvoyer.' }
        }
    }

    try {
        // Envoie du formulaire avec Resend
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
        
        // Stockage en BDD
        const client = await useDrizzle().insert(tables.clients).values({
            firstname,
            lastname,
            email,
            phone,
            text,
            createdAt: new Date()
        }).returning().get()
        console.log('✅ Sauvegarde BDD OK')

        // Ajout de l'IP à la map
        ipMap.set(IP, now)
        
        return { success: true, client } 
    } catch (error) {
        console.error('❌ ERREUR COMPLETE:', error);
        console.error('❌ MESSAGE:', errorMessages);
        return { success: false, error: 'Une erreur est survenue lors de l\'envoi du message.' }
    }
})

