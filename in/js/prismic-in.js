import * as prismic from 'https://cdn.skypack.dev/@prismicio/client';

const repositoryName = 'livetransparent';
const routes = [
  { type: 'homepage', uid: 'homepage', path: '/in/index.html' },
  { type: 'clients_page', uid: 'clients_page', path: '/in/clients/index.html' },
];
const client = prismic.createClient(repositoryName, { routes });

console.log({ client });

const fillTestimonials = (testimonials) => {
  for (let i = 0; i < testimonials.length; i++) {
    const nameHTML = prismic.asHTML(testimonials[i].name);
    const jobHTML = prismic.asHTML(testimonials[i].job);
    const quoteHTML = prismic.asHTML(testimonials[i].quote);
    const slidesContainer = document.getElementById('slides-container');
    slidesContainer.innerHTML += `<div class="slide swiper-slide">
            <!-- <img src="images/client_pic-2.jpeg" alt="" class="image" /> -->
            <div class="details">
                <span id="name-container-0" class="name">${nameHTML}</span>
                <span id="job-container-0" class="job">${jobHTML}</span>
            </div>
            <div id="quote-container-0" class="quote">${quoteHTML}</div>
            <!-- <i class="bx bxs-quote-alt-left quote-icon"></i> -->
            </div>`;
  }
};

const fillClients = (clients) => {
  for (let i = 0; i < clients.length; i++) {
    const logo1Src = prismic.asImageSrc(clients[i].logo_1);
    const logo2Src = prismic.asImageSrc(clients[i].logo_2);
    const logo3Src = prismic.asImageSrc(clients[i].logo_3);
    const clientsContainer = document.getElementById(`clients-container`);
    clientsContainer.innerHTML += `<div id="clients-container-0" class="slide swiper-slide">
    ${
      logo1Src !== null
        ? `<img src="${logo1Src}" alt="${clients[i].logo_1.alt}">`
        : ''
    }
    ${
      logo2Src !== null
        ? `<img src="${logo2Src}" alt="${clients[i].logo_2.alt}">`
        : ''
    }
    ${
      logo3Src !== null
        ? `<img src="${logo3Src}" alt="${clients[i].logo_3.alt}">`
        : ''
    }
    </div>`;
  }
};

const fillFullService = (services) => {
  for (let i = 0; i < services.length; i++) {
    const serviceText = services[i].service[0].text;

    const listContainer = document.getElementById('full-service-container');

    listContainer.innerHTML += `<li>${serviceText}</li>`;
  }
};

const fillSelfService = (services) => {
  console.log(services);
  for (let i = 0; i < services.length; i++) {
    const serviceText = services[i].service[0].text;

    const listContainer = document.getElementById('self-service-container');

    listContainer.innerHTML += `<li>${serviceText}</li>`;
  }
};

const fillHybridService = (services) => {
  console.log(services);
  for (let i = 0; i < services.length; i++) {
    const serviceText = services[i].service[0].text;

    const listContainer = document.getElementById('hybrid-service-container');

    listContainer.innerHTML += `<li>${serviceText}</li>`;
  }
};

const fillClientMedia = (clients_media) => {
  console.log('media clients', clients_media);
  for (let i = 0; i < clients_media.length; i++) {
    const nameHTML = prismic.asHTML(clients_media[i].client_name);
    const media1TitleHTML = prismic.asHTML(
      clients_media[i].client_media_title_1
    );
    const media1Link = clients_media[i].client_media_1?.url;
    const media2TitleHTML = prismic.asHTML(
      clients_media[i].client_media_title_2
    );
    const media2Link = clients_media[i].client_media_2?.url;
    const media3TitleHTML = prismic.asHTML(
      clients_media[i].client_media_title_3
    );
    const media3Link = clients_media[i].client_media_3?.url;
    const media4TitleHTML = prismic.asHTML(
      clients_media[i].client_media_title_4
    );
    const media4Link = clients_media[i].client_media_4?.url;
    const media5TitleHTML = prismic.asHTML(
      clients_media[i].client_media_title_5
    );
    const media5Link = clients_media[i].client_media_5?.url;
    const media6TitleHTML = prismic.asHTML(
      clients_media[i].client_media_title_6
    );
    const media6Link = clients_media[i].client_media_6?.url;
    const clientsMediaContainer = document.getElementById(
      'clients-media-container'
    );
    clientsMediaContainer.innerHTML += `<div class="client">
                <h3>${nameHTML}</h3>
                <div class="videos">
                    <div class="video" style="${
                      media1Link === undefined
                        ? 'display: none'
                        : 'display: block'
                    }">
                        ${media1TitleHTML}
                        <video controls="true" src=${media1Link} />
                    </div>
                    <div class="video" style="${
                      media2Link === undefined
                        ? 'display: none'
                        : 'display: block'
                    }">
                        ${media2TitleHTML}
                        <video controls="true" src=${media2Link} />
                    </div>
                    <div class="video" style="${
                      media3Link === undefined
                        ? 'display: none'
                        : 'display: block'
                    }">
                        ${media3TitleHTML}
                        <video controls="true" src=${media3Link} />
                    </div>
                    <div class="video" style="${
                      media4Link === undefined
                        ? 'display: none'
                        : 'display: block'
                    }">
                        ${media4TitleHTML}
                        <video controls="true" src=${media4Link} />
                    </div>
                    <div class="video" style="${
                      media5Link === undefined
                        ? 'display: none'
                        : 'display: block'
                    }">
                        ${media5TitleHTML}
                        <video controls="true" src=${media5Link} />
                    </div>
                    <div class="video" style="${
                      media6Link === undefined
                        ? 'display: none'
                        : 'display: block'
                    }">
                        ${media6TitleHTML}
                        <video controls="true" src=${media6Link} />
                    </div>
                </div>
            </div>
            
            <hr size="2" width="100%" color="#fff">`;
  }
};

var pdfSwiper = new Swiper('.pdfSwiper', {
  speed: 700,
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 10,
  loop: false,
  breakpoints: {
    769: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Extra PDF slider download stuff
// content[i].pdf_link.url
const pdfName = document.getElementById('pdf-name');
const pdfEmail = document.getElementById('pdf-email');
const pdfButton = document.getElementById('pdf-button');
const closeOverlay = document.getElementById('close-overlay');
const downloadOverlay = document.getElementById('download-overlay');

const fillPdfSlider = (content) => {
  const pdfSlider = document.getElementById('pdf-slider');

  for (let i = 0; i < content.length; i++) {
    pdfSlider.innerHTML += `
    <a title="Download PDF" class="swiper-slide pdf-slide" data-url="${content[i].pdf_link.url}">
        <img src="${content[i].image.url}"/>
    </a>`;
  }

  const pdfSlides = document.querySelectorAll('.pdf-slide');

  pdfSlides.forEach((slide) => {
    const pdfUrl = slide.dataset.url;
    slide.addEventListener('click', () => {
      downloadOverlay.classList.add('show');
      downloadOverlay.classList.remove('hide');

      pdfButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('testing', pdfUrl);
        const myForm = document.getElementById('pdf-form');
        const formData = new FormData(myForm);

        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString(),
        })
          .then(() => {
            console.log('Form successfully submitted');
            pdfName.value = '';
            pdfEmail.value = '';
            window.location.href = pdfUrl;
          })
          .catch((error) => alert(error));
      });
    });
  });
};

const categorySelector = document.getElementById('pdf-categories');

categorySelector?.addEventListener('change', (e) => {
  const currentValue = e.target.value;
  const allItems = document.querySelectorAll('.swiper-slide');

  allItems.forEach((item) => {
    item.classList.add('hide');
  });

  let currentItems = document.querySelectorAll(
    `[data-category=${currentValue}]`
  );

  currentItems.forEach((item) => {
    item.classList.remove('hide');
  });

  if (currentValue === 'all') {
    allItems.forEach((item) => {
      item.classList.remove('hide');
    });
  }

  pdfSwiper.update();
});

const populateAuditLink = (ctaLink, ctaText) => {
  const auditLinks = document.querySelectorAll('.audit-link');

  auditLinks.forEach((item) => {
    item.setAttribute('href', ctaLink.url);
    item.innerHTML = ctaText[0].text;
  });
};

const fillPdfCategories = (categories) => {
  for (let i = 0; i < categories.length; i++) {
    const categoryValue = categories[i].data.category_name[0].text;
    const categorySlug = categories[i].slugs[0];

    const selectDropdown = document.getElementById('pdf-categories');

    selectDropdown.innerHTML += `<option value="${categorySlug}">${categoryValue}</option>`;
  }
};

if (
  window.location.pathname === '/in/index.html' ||
  window.location.pathname === '/in/'
) {
  const validateEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*([\+][\.-]?\w+)?@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      return false;
    } else {
      return true;
    }
  };

  pdfEmail.addEventListener('keyup', function () {
    if (validateEmail(pdfEmail.value) && pdfName.value.length > 0) {
      pdfButton.disabled = false;
    } else {
      pdfButton.disabled = true;
    }
  });

  pdfName.addEventListener('keyup', function () {
    if (validateEmail(pdfEmail.value) && pdfName.value.length > 0) {
      pdfButton.disabled = false;
    } else {
      pdfButton.disabled = true;
    }
  });

  closeOverlay.addEventListener('click', () => {
    downloadOverlay.classList.add('hide');
    downloadOverlay.classList.remove('show');
  });
}

const init = async () => {
  const pathname = window.location.pathname;
  const homepageDoc = await client.getSingle('homepage', { lang: 'en-in' });
  const clientsPageDoc = await client.getSingle('clients_page', {
    lang: 'en-in',
  });
  const pdfCategories = await client.getAllByType('pdf_catego', {
    lang: 'en-in',
  });

  const {
    nav_clients,
    nav_services,
    nav_contact,
    nav_creative,
    count_headline,
    brands,
    ad_spend,
    platform_bans,
    primary_headline_1,
    primary_headline_2,
    primary_headline_3,
    pdf_slider,
    sub_text_1,
    sub_text_2,
    headline,
    tagline,
    subtagline,
    testimonials,
    clients,
    services1,
    self_service,
    hybrid_service,
    contact_headline,
    contact_email,
    contact_number,
    form_name,
    form_email,
    form_phone,
    form_message,
    cta_link,
    cta_text,
  } = homepageDoc.data;
  const { clients_media } = clientsPageDoc.data;

  const contactEmail = contact_email[0]?.text;
  const contactEmailContainer = document.getElementById(
    'contact-email-container'
  );
  contactEmailContainer.innerHTML = contactEmail;

  const contactNumber = contact_number[0]?.text;
  const contactNumberContainer = document.getElementById(
    'contact-number-container'
  );
  contactNumberContainer.innerHTML = contactNumber;

  const messageName = form_message[0]?.text;
  const messageNameContainer = document.getElementById('form-message');
  messageNameContainer.innerHTML = messageName;

  const phoneEmail = form_phone[0]?.text;
  const phoneEmailContainer = document.getElementById('phone-name');
  phoneEmailContainer.innerHTML = phoneEmail;

  const formEmail = form_email[0]?.text;
  const formEmailContainer = document.getElementById('email-name');
  formEmailContainer.innerHTML = formEmail;

  const formName = form_name[0]?.text;
  const formNameContainer = document.getElementById('form-name');
  formNameContainer.innerHTML = formName;

  const navClient = nav_clients[0].text;
  const navClientContainer = document.querySelector('.nav-clients');
  navClientContainer.innerHTML = navClient;

  const navServices = nav_services[0].text;
  const navServicesContainer = document.querySelector('.nav-services');
  navServicesContainer.innerHTML = navServices;

  const navContact = nav_contact[0].text;
  const navContactContainer = document.querySelector('.nav-contact');
  navContactContainer.innerHTML = navContact;

  const navCreative = nav_creative[0].text;
  const navCreativeContainer = document.querySelector('.nav-creative');
  navCreativeContainer.innerHTML = navCreative;

  if (pathname == '/in/index.html' || pathname == '/in/') {
    let stateCheck = setInterval(() => {
      if (document.readyState === 'complete') {
        clearInterval(stateCheck);
        const mastheadTitle = document.getElementById('masthead-content');
        const homeNav = document.querySelector('.home-nav');

        mastheadTitle.classList.add('active');
        homeNav.classList.add('active');
      }
    }, 100);

    const contactHeadline = contact_headline[0]?.text;
    const contactHeadlineContainer =
      document.getElementById('contact-headline');
    contactHeadlineContainer.innerHTML = contactHeadline;

    const countHeadline = count_headline[0]?.text;
    const countHeadlineContainer = document.getElementById('glance-headline');
    countHeadlineContainer.innerHTML = countHeadline;

    const brandText = brands[0]?.text;
    const brandTextContainer = document.getElementById('brand-text');
    brandTextContainer.innerHTML = brandText;

    const adSpend = ad_spend[0]?.text;
    const adSpendContainer = document.getElementById('ad-spend-text');
    adSpendContainer.innerHTML = adSpend;

    const platformBans = platform_bans[0]?.text;
    const platformBansContainer = document.getElementById('platform-bans-text');
    platformBansContainer.innerHTML = platformBans;

    const primaryHeadline1 = primary_headline_1[0].text;
    const headline1Container = document.querySelector('.headline-1');
    headline1Container.innerHTML = primaryHeadline1;

    const primaryHeadline2 = primary_headline_2[0].text;
    const headline2Container = document.querySelector('.headline-2');
    headline2Container.innerHTML = primaryHeadline2;

    const primaryHeadline3 = primary_headline_3[0].text;
    const headline3Container = document.querySelector('.headline-3');
    headline3Container.innerHTML = primaryHeadline3;

    const subtext1 = sub_text_1[0].text;
    const subtext1Container = document.getElementById('subtext-1');
    subtext1Container.innerHTML = subtext1;

    const subtext2 = sub_text_2[0].text;
    const subtext2Container = document.getElementById('subtext-2');
    subtext2Container.innerHTML = subtext2;

    const headlineHTML = prismic.asHTML(headline);
    const headlineContainer = document.getElementById('headline-container');
    headlineContainer.innerHTML = headlineHTML;

    const taglineHTML = prismic.asHTML(tagline);
    const taglineContainer = document.getElementById('tagline-container');
    taglineContainer.innerHTML = taglineHTML;

    const subtaglineHTML = prismic.asHTML(subtagline);
    const subtaglineContainer = document.getElementById('subtagline-container');
    subtaglineContainer.innerHTML = subtaglineHTML;

    fillPdfCategories(pdfCategories);
    populateAuditLink(cta_link, cta_text);

    fillTestimonials(testimonials);

    fillClients(clients);

    // fillServices(services);
    fillSelfService(self_service);
    fillFullService(services1);
    fillHybridService(hybrid_service);

    fillPdfSlider(pdf_slider);

    const contactEmailHTML = prismic.asHTML(contact_email);
    const contactEmailContainer = document.getElementById(
      'contact-email-container'
    );
    contactEmailContainer.innerHTML = contactEmailHTML;

    const contactNumberHTML = contact_number[0].text;
    const contactNumberContainer = document.getElementById(
      'contact-number-container'
    );
    contactNumberContainer.innerHTML = `<a href="tel: ${contactNumberHTML}">${contactNumberHTML}</a>`;
  } else if (pathname == '/in/clients.html' || pathname == '/in/clients/') {
    console.log(clients_media);
    fillClientMedia(clients_media);
  }
};

init();
