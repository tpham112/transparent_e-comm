'use strict'

function addTableRow(person) {
    const thumbnail = person.picture.thumbnail;
    const firstName = person.name.first;
    const lastName = person.name.last;
    const email = person.email;
    const phone = person.phone;
    const city = person.location.city;
    generatedUser.innerHTML += 
        `<tr>
            <td><img src='${thumbnail}'></td>
            <td><a href="mailto:${email}">${firstName} ${lastName}</a></td>
            <td>${phone}</td>
            <td>${city}</td>
        </tr>`;
};

async function getGeneratedUser(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('id');
    const url = targetId === 'fromBrowser' ? 'https://randomuser.me/api/' : '/random-person';
    try {
        const response = await fetch(url);
        const data =  await response.json();
        if (response.status == 200) {
            addTableRow(data.results[0])
        }
    } catch (error) {
        console.error(error);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const browserButton = document.getElementById('fromBrowser');
    browserButton.addEventListener('click', getGeneratedUser);

    const serverButton = document.getElementById('fromServer');
    serverButton.addEventListener('click', getGeneratedUser);
});