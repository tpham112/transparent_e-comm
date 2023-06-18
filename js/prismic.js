import * as prismic from 'https://cdn.skypack.dev/@prismicio/client'

const repositoryName = 'livetransparent'
const routes = [
    { type: 'homepage', path: '/'},
    { type: 'clients_page', path: '/clients.html'},
]
const client = prismic.createClient(repositoryName, { routes })

// const fillTestimonials = (testimonials) => {
//     for (let i = 0; i < testimonials.length; i++) {
//         const nameHTML = prismic.asHTML(testimonials[i].name)
//         const jobHTML = prismic.asHTML(testimonials[i].job)
//         const quoteHTML = prismic.asHTML(testimonials[i].quote)
//         const nameContainer = document.getElementById(`name-container-${i}`)
//         const jobContainer = document.getElementById(`job-container-${i}`)
//         const quoteContainer = document.getElementById(`quote-container-${i}`)
//         nameContainer.innerHTML = nameHTML
//         jobContainer.innerHTML = jobHTML
//         quoteContainer.innerHTML = quoteHTML
//     }
// }

const fillTestimonials = (testimonials) => {
    for (let i = 0; i < testimonials.length; i++) {
        const nameHTML = prismic.asHTML(testimonials[i].name)
        const jobHTML = prismic.asHTML(testimonials[i].job)
        const quoteHTML = prismic.asHTML(testimonials[i].quote)
        const slidesContainer = document.getElementById('slides-container')
        slidesContainer.innerHTML +=
            `<div class="slide swiper-slide">
            <!-- <img src="images/client_pic-2.jpeg" alt="" class="image" /> -->
            <div class="details">
                <span id="name-container-0" class="name">${nameHTML}</span>
                <span id="job-container-0" class="job">${jobHTML}</span>
            </div>
            <div id="quote-container-0" class="quote">${quoteHTML}</div>
            <!-- <i class="bx bxs-quote-alt-left quote-icon"></i> -->
            </div>`
    }
}

const fillClients = (clients) => {
    for (let i = 0; i < clients.length; i++) {
        const logo1Src = prismic.asImageSrc(clients[i].logo_1)
        const logo2Src = prismic.asImageSrc(clients[i].logo_2)
        const logo3Src = prismic.asImageSrc(clients[i].logo_3)
        const clientsContainer = document.getElementById(`clients-container`)
        clientsContainer.innerHTML += 
            `<div id="clients-container-0" class="slide swiper-slide">
                <img src="${logo1Src}" alt="${clients[i].logo_1.alt}">
                <img src="${logo2Src}" alt="${clients[i].logo_2.alt}">
                <img src="${logo3Src}" alt="${clients[i].logo_3.alt}">
            </div>`
    }
}

const fillServices = (services) => {
    for (let i = 0; i < services.length; i++) {
        const headlineHTML = prismic.asHTML(services[i].services_headline)
        const listHTML = prismic.asHTML(services[i].services_details)
        const headlineContainer = document.getElementById(`services-headline-container-${i}`)
        const listContainer = document.getElementById(`services-list-container-${i}`)
        headlineContainer.innerHTML = headlineHTML
        listContainer.innerHTML = listHTML
    }
}

// const fillClientMedia = (clients_media) => {
//     for (let i = 0; i < clients_media.length; i++) {
//         const nameHTML = prismic.asHTML(clients_media[i].client_name)
//         const mediaOneTitleHTML = prismic.asHTML(clients_media[i].client_media_title_1)
//         const mediaOneLink = prismic.asLink(clients_media[i].client_media)
//     }
// }

const init = async () => {
    const homepageDoc = await client.getSingle('homepage')
    const clientsPageDoc = await client.getSingle('clients_page')
    const { banner, headline, tagline, subtagline, testimonials, clients, services, contact_email, contact_number } = homepageDoc.data
    const { clients_media } = clientsPageDoc.data

    const bannerHTML = prismic.asHTML(banner)
    const bannerContainer = document.getElementById('banner-container')
    bannerContainer.innerHTML = bannerHTML

    const headlineHTML = prismic.asHTML(headline)
    const headlineContainer = document.getElementById('headline-container')
    headlineContainer.innerHTML = headlineHTML

    const taglineHTML = prismic.asHTML(tagline)
    const taglineContainer = document.getElementById('tagline-container')
    taglineContainer.innerHTML = taglineHTML

    const subtaglineHTML = prismic.asHTML(subtagline)
    const subtaglineContainer = document.getElementById('subtagline-container')
    subtaglineContainer.innerHTML = subtaglineHTML

    fillTestimonials(testimonials)

    fillClients(clients)

    fillServices(services)

    const contactEmailHTML = prismic.asHTML(contact_email)
    const contactEmailContainer = document.getElementById('contact-email-container')
    contactEmailContainer.innerHTML = contactEmailHTML

    const contactNumberHTML = contact_number[0].text
    const contactNumberContainer = document.getElementById('contact-number-container')
    contactNumberContainer.innerHTML = `<a href="tel: ${contactNumberHTML}">${contactNumberHTML}</a>`

    // fillClientMedia(clients_media)
}

init()