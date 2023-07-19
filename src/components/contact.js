import '../styles/contact.css';
import lingrImg from '../assets/lingr-outside.jpeg';
import instaLogo from '../assets/instagram.svg';
import linkedinLogo from '../assets/linkedin.svg';
import facebookLogo from '../assets/facebook.svg';

export default function contact() {
    const contentDiv = document.getElementById('content');
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-container');

    /* ADDRESS DIV */
    const addressDiv = document.createElement('div');
    addressDiv.classList.add('address-container'); 
    const address_h3 = document.createElement('h3');
    address_h3.textContent = "Our Location";
    const address_p = document.createElement('p');
    address_p.innerHTML = `400 6<sup>th</sup> St. South, <br>
                            Saint Petersburg, FL 33701<br>
                            Phone: <tel>727-471-6120</tel>`;
    const lingrFront = new Image();
    lingrFront.src = lingrImg;
    addressDiv.appendChild(address_h3);
    addressDiv.appendChild(lingrFront);
    addressDiv.appendChild(address_p);
    

    /*HOURS DIV */
    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add('hours');
    const hoursDiv_h3 = document.createElement('h3');
    hoursDiv_h3.textContent = "Hours";
    const hoursList = document.createElement('ul');
    const listItems = ['Sunday - Monday: Closed', 'Tuesday - Thursday: 5-10', 'Friday - Saturday: 5-11'];
    for (let i = 0; i < listItems.length; i++) {
        const li = document.createElement('li');
        li.innerText = listItems[i];
        hoursList.appendChild(li);
    }
    hoursDiv.appendChild(hoursDiv_h3);
    hoursDiv.appendChild(hoursList);
    

    /*SOCIAL MEDIA LINKS*/
    const socialDiv = document.createElement('div');
    socialDiv.classList.add('social-container');
    const ig_a = document.createElement('a');
    const fb_a = document.createElement('a');
    const ln_a = document.createElement('a');
    const instaIcon = new Image();
    instaIcon.src = instaLogo;
    ig_a.href = '#';
    const fbIcon = new Image();
    fbIcon.src = facebookLogo;
    fb_a.href = '#'
    const lnIcon = new Image();
    lnIcon.src = linkedinLogo;
    ln_a.href = '#';
    const social_h3 = document.createElement('h3');
    social_h3.textContent = "Follow Us On Social Media:";
    const socialIconsDiv = document.createElement('div'); //add social-media icons div
    socialIconsDiv.classList.add('sm-icons');
    ig_a.appendChild(instaIcon);
    fb_a.appendChild(fbIcon);
    ln_a.appendChild(lnIcon);
    socialIconsDiv.appendChild(ig_a);
    socialIconsDiv.appendChild(fb_a);
    socialIconsDiv.appendChild(ln_a);
    socialDiv.appendChild(social_h3);
    socialDiv.appendChild(socialIconsDiv);

    contactDiv.appendChild(addressDiv); //add address div
    contactDiv.appendChild(hoursDiv); //add hours div
    contactDiv.appendChild(socialDiv); //add social div
    contentDiv.appendChild(contactDiv);

    
    return contentDiv
}