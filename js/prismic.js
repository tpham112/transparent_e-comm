import * as prismic from 'https://cdn.skypack.dev/@prismicio/client'

const repositoryName = 'livetransparent'
const routes = [
    { type: 'homepage', uid: 'homepage', path: '/index.html'},
    { type: 'clients_page', uid: 'clients_page', path: '/clients.html'},
]
const client = prismic.createClient(repositoryName, { routes })

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

const fillClientMedia = (clients_media) => {
    for (let i = 0; i < clients_media.length; i++) {
        const nameHTML = prismic.asHTML(clients_media[i].client_name)
        const media1TitleHTML = prismic.asHTML(clients_media[i].client_media_title_1)
        const media1Link = prismic.asLink(clients_media[i].client_media_1)
        const media2TitleHTML = prismic.asHTML(clients_media[i].client_media_title_2)
        const media2Link = prismic.asLink(clients_media[i].client_media_2)
        const media3TitleHTML = prismic.asHTML(clients_media[i].client_media_title_3)
        const media3Link = prismic.asLink(clients_media[i].client_media_3)
        const media4TitleHTML = prismic.asHTML(clients_media[i].client_media_title_4)
        const media4Link = prismic.asLink(clients_media[i].client_media_4)
        const media5TitleHTML = prismic.asHTML(clients_media[i].client_media_title_5)
        const media5Link = prismic.asLink(clients_media[i].client_media_5)
        const media6TitleHTML = prismic.asHTML(clients_media[i].client_media_title_6)
        const media6Link = prismic.asLink(clients_media[i].client_media_6)
        const clientsMediaContainer = document.getElementById('clients-media-container')
        clientsMediaContainer.innerHTML += 
            `<div class="client">
                <h3>${nameHTML}</h3>
                <div class="videos">
                    <div class="video">
                        ${media1TitleHTML}
                    </div>
                    <div class="video">
                        ${media2TitleHTML}
                    </div>
                    <div class="video">
                        ${media3TitleHTML}
                    </div>
                    <div class="video">
                        ${media4TitleHTML}
                    </div>
                    <div class="video">
                        ${media5TitleHTML}
                    </div>
                    <div class="video">
                        ${media6TitleHTML}
                    </div>
                </div>
            </div>
            
            <hr size="2" width="100%" color="#1544C1">`
    }
}

const init = async () => {
    const pathname = window.location.pathname
    const homepageDoc = await client.getSingle('homepage')
    const clientsPageDoc = await client.getSingle('clients_page')
    const { banner, headline, tagline, subtagline, testimonials, clients, services, contact_email, contact_number } = homepageDoc.data
    const { clients_media } = clientsPageDoc.data

    console.log(pathname)

    if (pathname == '/index.html') {
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
    } else if (pathname == '/clients.html') {
        console.log(clients_media)
        fillClientMedia(clients_media)
    }
}

init()