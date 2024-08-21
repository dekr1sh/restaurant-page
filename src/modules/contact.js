export default function loadContact() {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = ''; 

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    const headline = document.createElement('h2');
    headline.textContent = 'Contact Us';
    contactDiv.appendChild(headline);

    const p = document.createElement('p');
    p.textContent = 'Reach us at: contact@restaurant.com';
    contactDiv.appendChild(p);

    contentDiv.appendChild(contactDiv);
}