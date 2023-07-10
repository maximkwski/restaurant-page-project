import Logo from '../components/home/logo.png';

export  default function content() {
    const contentDiv = document.getElementById('content');
    //header

    // Add the image to our existing div.
    const lingrLogo = new Image();
    lingrLogo.src = Logo;
    contentDiv.appendChild(lingrLogo);

    const header = document.createElement('header');
    const navBar = document.createElement('nav');
    header.appendChild(navBar);
    const navUl = document.createElement('ul');
    navBar.appendChild(navUl); // navigation bar
    const listItems = ['Home', 'Menu', 'Reservations', 'Contact']; //array of list items
    for (let i = 0; i < listItems.length; i++) {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.innerHTML = listItems[i];
        li.appendChild(link);
        navUl.appendChild(li);
    }
    contentDiv.appendChild(header);


    //append all elements

    return contentDiv;
}