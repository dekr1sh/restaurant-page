export default function loadHome() {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';

    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Restaurant!';
    homeDiv.appendChild(headline);

    const text = document.createElement('p');
    text.textContent = 'Experience the best dining with us.';
    homeDiv.appendChild(text);

    contentDiv.appendChild(homeDiv);
}