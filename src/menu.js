import halohalo from './images/HaloHalo.webp';
import karekare from './images/karekare.jpg';
import munggo from './images/Munggo.jpg';
import palabok from './images/palabok.jpg';
import sinigang from './images/sinigang.webp';
import sisig from './images/Sisig.jpeg';
import turon from './images/turon.jpg';

export {menu};

const entreeMenu = [
    {
        name:'Kare Kare',
        description:'Kare-kare is a Philippine stew (kare derives from "curry") that features a thick savory peanut sauce. It is generally made from a base of stewed oxtail, beef tripe, pork hocks, calves" feet, pig"s feet or trotters, various cuts of pork, beef stew meat, and occasionally offal.',
        image: karekare,
        price: '$10.00'
    },
    {
        name:'Munggo',
        description:'A Filipino savory mung bean soup. It is made with mung beans, garlic, tomatoes, onions, various vegetables, and patis (fish sauce). It is cooked with pork, tinapa (smoked fish), daing (dried fish), or other seafood and meat. It is also commonly garnished with chicharon.',
        image: munggo,
        price: '$5.00'
    },
    {
        name: 'Palabok',
        description:'Pancit Palabok is a Filipino rice noodle dish with a rich pork and shrimp sauce, similar to a ragu. Also known as Pancit Luglug or Pancit Malabon. Garnished with smoked fish, eggs, and crumbled chicharron.',
        image: palabok,
        price: '$15.00'
    },
    {
        name: 'Sinigang',
        description: 'Sinigang is a Filipino soup or stew characterized by its sour and savory taste. It is most often associated with tamarind (Filipino: sampalok), although it can use other sour fruits and leaves as the souring agent such as unripe mangoes or rice vinegar.',
        image: sinigang,
        price: '$10.00'
    },
    {
        name: 'Sisig',
        description:'A Filipino dish made from pork jowl and ears (maskara), pork belly, and chicken liver, which is usually seasoned with calamansi, onions, and chili peppers. It originates from the Pampanga region in Luzon. Kapampangan sisig served on a hot plate.',
        image: sisig,
        price: '$5.00'
    },
]

const dessertMenu = [
    {
        name: 'Halo Halo',
        description: 'A popular dessert in the Philippines that"s a combination of shaved ice layered with a variety of different ingredients: tropical fruits, ice cream, gelatin-based candies made from coconut water, and so much more.',
        image: halohalo,
        price: '$4.00'
    },
    {
        name: 'Turon',
        description: 'A popular Filipino snack or dessert made of bananas rolled in a spring roll wrapper, fried, and coated with caramelized brown sugar',
        image: turon,
        price: '$3.00'
    }
]

/*
<h1>Entrees</h1>
        <div class="dish">
            <div class="dish-name-image">
                <h2>Sinigang</h2>
                <img src="images/sinigang.webp" alt="">
            </div>
            <div class="description-price">
                <p>Sinigang is a Filipino soup or stew characterized by its sour and savory taste. It is most often associated with tamarind.It is one of the more popular dishes in Filipino cuisine. This soup, like most Filipino dishes, is usually accompanied by rice. </p>
                <h3>Price: $10.00</h3>
            </div> 
        </div>
        <h1>Desserts</h1>
*/
const content = document.getElementById('content');
const entreesTitle = document.createElement('h1');
entreesTitle.textContent='Entrees';
const dessertTitle = document.createElement('h1');
dessertTitle.textContent = 'Dessert';
function menu () {
    content.appendChild(entreesTitle);
    entreeItems(content);
    content.appendChild(dessertTitle);
    dessertItems(content);
}

function entreeItems(content) {
    for(let i = 0; i < entreeMenu.length; i++) {
        const dish = document.createElement('div');
        dish.classList.add('dish');
        const dishNameImage = document.createElement('div');
        dishNameImage.classList.add('dish-name-image');
        const dishName = document.createElement('h2');
        dishName.textContent = `${entreeMenu[i].name}`
        const image = document.createElement('img');
        image.setAttribute('src', `${entreeMenu[i].image}`)
        dishNameImage.appendChild(dishName);
        dishNameImage.appendChild(image);
        dish.appendChild(dishNameImage);
        const descPrice = document.createElement('div');
        descPrice.classList.add('description-price');
        const description = document.createElement('p');
        description.textContent = `${entreeMenu[i].description}`
        const price = document.createElement('h3');
        price.textContent = `Price: ${entreeMenu[i].price}`
        descPrice.appendChild(description);
        descPrice.appendChild(price);
        dish.appendChild(descPrice);
        content.appendChild(dish);
    }
}

function dessertItems(content) {
    for(let i = 0; i < dessertMenu.length; i++) {
        const dish = document.createElement('div');
        dish.classList.add('dish');
        const dishNameImage = document.createElement('div');
        dishNameImage.classList.add('dish-name-image');
        const dishName = document.createElement('h2');
        dishName.textContent = `${dessertMenu[i].name}`
        const image = document.createElement('img');
        image.setAttribute('src', `${dessertMenu[i].image}`)
        dishNameImage.appendChild(dishName);
        dishNameImage.appendChild(image);
        dish.appendChild(dishNameImage);
        const descPrice = document.createElement('div');
        descPrice.classList.add('description-price');
        const description = document.createElement('p');
        description.textContent = `${dessertMenu[i].description}`
        const price = document.createElement('h3');
        price.textContent = `Price: ${dessertMenu[i].price}`
        descPrice.appendChild(description);
        descPrice.appendChild(price);
        dish.appendChild(descPrice);
        content.appendChild(dish);
    }
}