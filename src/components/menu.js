import '../styles/menu.css';

export default function menu() {
    const contentDiv = document.getElementById('content');
    const menuDiv = document.createElement('div'); //menu div
    menuDiv.classList.add('menu-container');

    /* DINNER MENU */
    const dinnerSection = document.createElement('section');
    dinnerSection.classList.add('dinner-menu');
    const dinner_h3 = document.createElement('h3');
    dinner_h3.textContent = "Dinner";
    const dinnerMenu = ["JAMISON PAN SEEDED RYE AND MILK BREAD WITH WHIPPED SEA BUCKTHORN BUTTER AND CORTEZ BOTTARGA", 
    "BEEF TARTAR WITH HOT MUSTARD AIOLI, PICKLED BEECH MUSHROOMS, SMOKED TURNIPS, TSUKEMONO CUCUMBERS, MISO DASHI, & SHRIMP CHIPS", 
    "SMOKED LIONS MANE AND ROYAL TRUMPET MUSHROOMS WITH BRUNOST, HAWTHORN CREAM, CHILI OIL, AND SEA BUCKTHORN ON SAMI BREAD", 
    "CRUDO WITH CITRUS BUTTERMILK, LOTUS ROOT, SZECHUAN PEPPER ORANGES, AND DILL OIL", 
    "SPICY CHILI GARLIC SHRIMP DUMPLINGS", "BLUE OYSTER MUSHROOM & VEGETABLE DUMPLINGS", 
    "BRICK STREET LETTUCE SALAD WITH AQUAVIT, BEET & HORSERADISH CURED SALMON, FENNEL, AND MANDARIN VINAIGRETTE", 
    "CHAR SIU STYLE SHIITAKE AND GAI LAN STEAMED BAO", 
    "SALT AND PEPPER FISH CAKES WITH SWEET AND SOUR MUSTARD SAUCE", 
    "GRILLED PETITE FILET WITH SHIITAKE & BLUE OYSTER MUSHROOMS & AMAZAKE CHOW YUK", 
    "AGED ROHAN DUCK BREAST WITH BAMBOO RICE, CURRIED ACORN SQUASH, SALT PLUM SAUCE, AND FRIED LEEKS", 
    "PAN SEARED GROUPER WITH SMOKED TROUT ROE BEURRE BLANC, CHARRED LEEKS, & PEA SHOOTS", 
    "MAPO HO FUN - RICE NOODLES, SPICY BROAD BEAN PASTE, SZECHUAN PEPPERCORN", "PAN SEARED SALMON WITH HOT & SOUR SAUCE, BRAISED CABBAGE, SZECHUAN PISTACHIOS, & CHIVES",
    "WOK FRIED FLORIDA FRESH CATCH WITH FERMENTED BLACK BEANS, GINGER SOY, FAN JIU, AND HERB VINAIGRETTE"
    ]

    const dinnerList = document.createElement('ul');
    for (let i = 0; i < dinnerMenu.length; i++){
        const dinnerItem = document.createElement('li');
        dinnerItem.innerHTML = `<p>${dinnerMenu[i]}<p>`;
        dinnerList.appendChild(dinnerItem);
    }

    dinnerSection.appendChild(dinner_h3);
    dinnerSection.appendChild(dinnerList);

    menuDiv.appendChild(dinnerSection);

    /* COCKTAIL SECTION */
    const drinksSection = document.createElement('section');
    drinksSection.classList.add('cocktail-menu');
    const drinks_h3 = document.createElement('h3');
    drinks_h3.textContent = "House Cocktails";
    drinksSection.appendChild(drinks_h3);

    class Drink {
        constructor(name, ingredients, description) {
            this.name = name;
            this.ingredients = ingredients;
            this.description = description;
        }
    }

    const drinkMenu = [
        new Drink ("Fire", "Charred Chili Infused Tequila, Dry Curaçao, Lime, Aji-Panca Hot Honey", "a globally-inspired spicy margarita with a salty 5-spice rim"),
        new Drink ("Water", "London Dry Gin, Aquavit, Lime, Cucumber-Dill, Elderflower", "infinitely refreshing with notes of citrus & fennel"),
        new Drink ("Wood", "Brown-Butter Washed Whiskey, Rye, Amaro, Chinese 5-Spice, Black Walnut", "warm, old fashioned-esque sipper with a &quot;decadent mouthfeel&quot;"),
        new Drink ("Earth", "Rum Blend, Orgeat, Black Walnut Bitters, Lemon", "our novel yet uncomplicated tiki inspired cocktail that's silky & delicious"),
        new Drink ("Metal", "Vodka, Bergamot, Aperitif, Herbal Bitters", "subtly floral & crisp martini style sipper")
    ]

    const drinkList = document.createElement('ul'); //createing list of drinks
    for (let i = 0; i < drinkMenu.length; i++){
        const drinkItem = document.createElement('li');
        const drinkItem_div = document.createElement('div');
        drinkItem_div.classList.add('drink-item');
        for (const prop in drinkMenu[i]) {
            const drinkItemKey = document.createElement('p');
            drinkItemKey.innerText = `${drinkMenu[i][prop]}`;
            drinkItem_div.appendChild(drinkItemKey);
        }
        drinkItem.appendChild(drinkItem_div);
        drinkList.appendChild(drinkItem);
        
    }
    drinksSection.appendChild(drinkList);
    menuDiv.appendChild(drinksSection); //add drinks section in main menu div

    contentDiv.appendChild(menuDiv);
    return contentDiv;
}