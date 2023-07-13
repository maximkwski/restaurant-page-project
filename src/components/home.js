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

    hero.appendChild(hero_h1);
    hero.appendChild(hero_p);
    hero.appendChild(hero_a);
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

    contentDiv.appendChild(mainSection); //add main section to content div

    return contentDiv;
}