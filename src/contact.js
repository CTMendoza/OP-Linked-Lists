    /* <h1>Contact</h1>
        <h2>Location</h2>
        <p>11111 Street Ave, Boulevard, CA 999999</p>
        <h2>Phone/Email</h2>
        <p>For any questions or inquires, you can reach us at email@gmail.com or (123) 456-7890</p>
        <h2>Hours</h2>
        <p> 
        Mon-Fri: 10AM - 9PM <br>
        Sat: 10AM - 11PM <br>
            Sun: CLOSED
        </p> */

export {loadContactsPage}

const content = document.getElementById('content');
const contactContainer = document.createElement('div');
contactContainer.classList.add('contact-cont');
const contactTitle = document.createElement('h1');
contactTitle.textContent = 'Contact';
const locationTitle = document.createElement('h2');
locationTitle.textContent = 'Location';
const location = document.createElement('p');
location.textContent = '11111 Street Ave, Boulevard, CA 999999';
const phoneTitle = document.createElement('h2');
phoneTitle.textContent = 'Phone/Email';
const phone = document.createElement('p');
phone.textContent = 'For any questions or inquires, you can reach us at email@gmail.com or (123) 456-7890'
const hoursTitle = document.createElement('h2');
hoursTitle.textContent = 'Hours';
const hours = document.createElement('p');
hours.appendChild(document.createTextNode('Mon-Fri: 10AM - 9PM'))
hours.appendChild(document.createTextNode('br'));
hours.appendChild(document.createTextNode('Sat: 10AM - 11PM'));
hours.appendChild(document.createTextNode('br'));
hours.appendChild(document.createTextNode('Sun: CLOSED'));



function loadContactsPage () {
    contactContainer.appendChild(contactTitle);
    contactContainer.appendChild(locationTitle);
    contactContainer.appendChild(location);
    contactContainer.appendChild(phoneTitle);
    contactContainer.appendChild(phone);
    contactContainer.appendChild(hoursTitle);
    contactContainer.appendChild(hours);
    content.appendChild(contactContainer);
}