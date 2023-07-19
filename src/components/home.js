import '../styles/home.css';
import heroJpeg from '../assets/jj14.jpeg';
import about1 from '../assets/jj28.jpeg';
import about2 from '../assets/jj34.jpeg';
// import reservations from './components/reservations.js';

export  default function home() {
    const contentDiv = document.getElementById('content');


    //***MAIN***
    const mainSection = document.createElement('section');
    mainSection.classList.add('main');

    //hero div
    const hero = document.createElement('div'); 
    hero.classList.add('hero');
    // const heroPicture = new Image();
    // heroPicture.src = heroJpeg;
    // hero.appendChild(heroPicture);
    const heroContent = document.createElement('div');
    heroContent.classList.add('hero-content');
    const hero_h1 = document.createElement('h1');
    hero_h1.textContent = "Welcome to Lingr";
    const hero_p = document.createElement('p');
    hero_p.textContent = "2022 Best of the Bay Winner for Best New Restaurant and Best Fusion Appetizer";
    const hero_a = document.createElement('a');
    hero_a.href = "#";
    hero_a.textContent = "Make a Reservation";
    hero_a.classList.add("btn");

    const address = document.createElement('div');
    address.classList.add('address');
    const address_p = document.createElement('p');
    address_p.innerHTML = "400 6<sup>th</sup> ST. S  |  ST. PETERSBURG  |  <tel>727-471-6120</tel>";
    address.appendChild(address_p);

    heroContent.appendChild(hero_h1);
    heroContent.appendChild(hero_p);
    heroContent.appendChild(hero_a);
    hero.appendChild(heroContent);
    hero.appendChild(address);
    
    mainSection.appendChild(hero);
    

    //about div
    const about = document.createElement('div');
    about.classList.add('about');
    const h2 = document.createElement('h2');

    h2.textContent = "Why 'Lingr'?";
    const about_p = document.createElement('p');
    about_p.textContent = `It means 'belonging to,' and 'coming or descending from' — well-expressed definitions for the first
    solo venture of Chef Jeffrey Jew.
    Located in the Downtown South University Park area of St. Petersburg, the Nordic and Asian-inspired
    restaurant is a mixture of Chef Jew's love of the local area, his heritage and years of culinary
    experience.
    The upscale-casual eatery and bar is the place where 'to linger' is part of the definition as well.`
    
    about.appendChild(h2);
    about.appendChild(about_p);

    const gallery = document.createElement('div');
    gallery.classList.add('about-gallery'); 
    const galleryPic1 = new Image();
    galleryPic1.src = about1;
    const galleryPic2 = new Image();
    galleryPic2.src = about2;
    gallery.appendChild(galleryPic1);
    gallery.appendChild(galleryPic2);
    about.appendChild(gallery);

    mainSection.appendChild(about);

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
    mainSection.appendChild(hoursDiv); //add hours div to main section

    contentDiv.appendChild(mainSection); //add main section to main div

    return contentDiv;
}