import './style.css';
import Logo from './logo.png';

function content() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "sho tam";
    // Add the image to our existing div.
    const lingrLogo = new Image();
    lingrLogo.src = Logo;

    contentDiv.appendChild(lingrLogo);

    return contentDiv;
}