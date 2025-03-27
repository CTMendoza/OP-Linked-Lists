// recreate homepage html content in javascript

/* 
append the children elements of div with id content
<div id="content">
        <h1>Topper's Filipino Bistro</h1>
        <p class="summary">Mabuhay! Welcome to Topper's Filipino Bistro where we serve the best Filipino cuisine and hospitality this side of the world!
        <br>
        <br>
        Whether if this is your first time trying Filipino food or you're just looking for a taste of the motherland...then this is the place for you!
        </p>
    </div>
*/
export {loadHomePage};
const content = document.getElementById('content');

function loadHomePage () {
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = "Topper's Filipino Bistro"
    restaurantName.classList.add('title');
    const summary = document.createElement('p');
    summary.appendChild(document.createTextNode("Mabuhay! Welcome to Topper's Filipino Bistro where we serve the best Filipino cuisine and hospitality this side of the world!"));
    summary.appendChild(document.createElement('br'));
    summary.appendChild(document.createElement('br'));
    summary.appendChild(document.createTextNode("Whether if this is your first time trying Filipino food or you're just looking for a taste of the motherland...then this is the place for you!"));
    summary.classList.add('summary');
    content.appendChild(restaurantName);
    content.appendChild(summary);
}

