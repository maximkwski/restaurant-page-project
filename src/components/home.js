import '../styles/home.css';


export  default function home() {
    const contentDiv = document.getElementById('content');


    //***MAIN***
    const mainSection = document.createElement('section');
    mainSection.classList.add('main');

    //hero div
    const hero = document.createElement('div'); 
    hero.classList.add('hero');
    const hero_h1 = document.createElement('h1');
    hero_h1.textContent = "Welcome to Lingr";
    const hero_p = document.createElement('p');
    hero_p.textContent = "Enjoy the best dining experience";
    const hero_a = document.createElement('a');
    hero_a.href = '#';
    hero_a.textContent = "Make a Reservation";
    hero_a.classList.add("btn");

    const address = document.createElement('div');
    address.classList.add('address');
    const address_p = document.createElement('p');
    address_p.innerHTML = "400 6<sup>th</sup> ST. S | ST. PETERSBURG |  727-471-6120";
    address.appendChild(address_p);

    hero.appendChild(hero_h1);
    hero.appendChild(hero_p);
    hero.appendChild(hero_a);
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