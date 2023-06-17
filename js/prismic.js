import * as prismic from 'https://cdn.skypack.dev/@prismicio/client'

const repositoryName = 'livetransparent'
const routes = [
    { type: 'homepage', path: '/'},
]
const client = prismic.createClient(repositoryName, { routes })

const fillTestimonials = (testimonials) => {
    for (let i = 0; i < testimonials.length; i++) {
        const nameHTML = prismic.asHTML(testimonials[i].name)
        const jobHTML = prismic.asHTML(testimonials[i].job)
        const quoteHTML = prismic.asHTML(testimonials[i].quote)
        const nameContainer = document.getElementById(`name-container-${i}`)
        const jobContainer = document.getElementById(`job-container-${i}`)
        const quoteContainer = document.getElementById(`quote-container-${i}`)
        nameContainer.innerHTML = nameHTML
        jobContainer.innerHTML = jobHTML
        quoteContainer.innerHTML = quoteHTML
    }
}

const fillClients = (clients) => {
    for (let i = 0; i < clients.length; i++) {
        const logo1Src = prismic.asImageSrc(clients[i].logo_1)
        const logo2Src = prismic.asImageSrc(clients[i].logo_2)
        const logo3Src = prismic.asImageSrc(clients[i].logo_3)
        const clientsContainer = document.getElementById(`clients-container-${i}`)
        clientsContainer.innerHTML += 
            `<img src="${logo1Src}" alt="${clients[i].logo_1.alt}">
            <img src="${logo2Src}" alt="${clients[i].logo_2.alt}">
            <img src="${logo3Src}" alt="${clients[i].logo_3.alt}">`
    }
}

const init = async () => {
    const prismicDoc = await client.getByUID('homepage', 'homepage') // custom type (name) and uid (api id)?
    const { banner, headline, tagline, subtagline, testimonials, clients } = prismicDoc.data // title and description could be different

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

    // const nameHTML = prismic.asHTML(testimonials[0].name)
    // const slidesContainer = document.getElementById('slides-container')
    // slidesContainer.innerHTML +=
    //     `<div class="slide swiper-slide">
    //         <!-- <img src="images/client_pic-2.jpeg" alt="" class="image" /> -->
    //         <div class="details">
    //             <span class="name">${nameHTML}</span>
    //             <span class="job">CEO, Soul CBD</span>
    //         </div>
    //         <p>
    //             Our relationship with Transparent eComm went from consulting to utilizing their full-service marketing team in just a quarter. They are a great digital agency, but what sets them apart is their focus on business performance, not marketing performance. They have been a vital part of our 76% growth!
    //         </p>
    //         <p>
    //             We struggled to run ads on Facebook and Instagram for over a year before meeting Cameron and his team. Now we are spending 50k+ a month with them and are trying Snapchat and TikTok.
    //         </p>

    //         <i class="bx bxs-quote-alt-left quote-icon"></i>
    //     </div>`

}

init()