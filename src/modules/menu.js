export default function loadMenu() {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = ''; 

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    const headline = document.createElement('h2');
    headline.textContent = 'Our Menu';
    menuDiv.appendChild(headline);

    const items = ['Pizza', 'Pasta', 'Burger'];
    items.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item;
        menuDiv.appendChild(p);
    });

    contentDiv.appendChild(menuDiv);
}