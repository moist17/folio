
// menu scrolling

window.addEventListener('load', function(){
	document.querySelector('.clickIntro').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.space_intro').scrollIntoView({ behavior: 'smooth' });
    });
    document.querySelector('.clickWork').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.space_work').scrollIntoView({ behavior: 'smooth' });
    });
    document.querySelector('.clickCode').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.space_code').scrollIntoView({ behavior: 'smooth' });
    });
})

// coding show content

var quote = document.getElementById('show_quote');
var weather = document.getElementById('show_weather');
var wiki = document.getElementById('show_wiki');
var content = document.getElementById('display_work');

quote.addEventListener('click', function(){
    if (content.style.display !== 'none') {
    content.style.display = 'none';
    } else {
    content.style.display = 'block';
    content.innerHTML = '<p>' + 'HTML | CSS | jQuery | API' + '</p>' + '<p>' + '<a href="http://codepen.io/dilute/full/WReZgg/" style="text-decoration: underline">See: Project (API version)</a>' + ' / ' + '<a href="http://codepen.io/dilute/full/mRPpjw/" style="text-decoration: underline">Project (Fiction version)</a>' + '</p>' + '<p>' + 'This is the first FreeCodeCamp front end intermediate project I tried to conquer. I actually made two versions. The first one was using forismatic API. I caught API data through jQuery, it was quite fun and not so difficult for a beginner. I made another version using Vanilla Javascript to show the beautiful quotes from one of my favorite fiction "Love, Begins in Winter."' + '</p>';
    }
})

weather.addEventListener('click', function(){
    if (content.style.display !== 'none') {
    content.style.display = 'none';
    } else {
    content.style.display = 'block';
    content.innerHTML = '<P>' + 'HTML | CSS | Javascript | Open Weather API | Free Geo IP API' + '</p>' + '<p>' + '<a href="http://codepen.io/dilute/full/OWJyGq/" style="text-decoration: underline">See: Project</a>' + '</p>' + '<p>' + 'This project tended to show local weather data information no matter where the user is. It is far more difficult than the Random Quote Machine project. I failed tons of times tried to combined the Geo Location API and Open Weather API. When I finally succeeded, the screen showed the right location and the weather. But the nested functions looked horrible. My friend told me that I had produced so-called \"callback hell.\" He helped me to make them seperated to make the code more readable and could be reusable. I also added Weather Web Fonts to make the web app more lively. It was almost a tortured experience, but I leared A LOT and felt accomplished for a while. :)' + '</p>';
    }
})

wiki.addEventListener('click', function(){
    if (content.style.display !== 'none') {
    content.style.display = 'none';
    } else {
    content.style.display = 'block';
    content.innerHTML = '<p>' + 'HTML | CSS | Javascript | Wikipedia API | jQuery Autocomplete Widget' + '<p>' + '<a href="http://codepen.io/dilute/full/pRjEpz/" style="text-decoration: underline">See: Project</a>' + '</p>' + '<p>' + 'Wikipedia Viewer was another not-so-easy challenge. I encountered \"Cross Orgin resource sharing\" difficulties and just couldn\'t\' solve even if googling hundred times. But again, in the end I conquered it and caught data from Wikipedia. To make the web app more functional, I also tried to use Vanilla Javascript to add the autocomplete function into search bar, though I failed, I tried to use jQuery widget and made it.' + '</p>';
    }
})