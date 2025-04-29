const hb = document.querySelector('#hamburgerBtn');
const pw = document.querySelector('#pageWrapper'); 

hb.addEventListener('click', () => {
    pw.classList.toggle('moveOver');
});

//Grab the hotel location data
import { hotels } from '../data/hotels.js';
const cards = document.querySelector('#hotelplacement');

hotels.forEach(hotel => {
    const mySection = document.createElement('section');

    const theImage = document.createElement('img');
    theImage.src = `images/${hotel.image}`;
    theImage.alt = `Hotel in ${hotel.country}`;

    const theName = document.createElement('h2');
    theName.textContent = hotel.name;

    const theAddress = document.createElement('p');
    theAddress.className = "address";
    theAddress.textContent = hotel.address;

    const thePhone = document.createElement('p');
    thePhone.className = "phone";
    thePhone.textContent = hotel.phone;

    mySection.appendChild(theImage);
    mySection.appendChild(theName);
    mySection.appendChild(theAddress);
    mySection.appendChild(thePhone);
    cards.appendChild(mySection);
});