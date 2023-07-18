import '../styles/contact.css';

export default function contact() {
    const contentDiv = document.getElementById('content');
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-container');

    contentDiv.appendChild(contactDiv);
    return contentDiv
}