/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log('movies.js loaded.')

var requestURL = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json"
var request = new XMLHttpRequest();
var articles = document.querySelector('.articles');
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var movies = request.response;
    setElements(movies);
}

function setElements(jsonObject) {
    var movies = jsonObject;
    for (var i = 0; i < movies.length; i++) {
        var article = document.createElement('article');
        var img = document.createElement('img');
        img.src = movies[i].cover;
        var button = document.createElement('button');
        button.classList.add('film' + i);
        var h3 = document.createElement('h3');
        var p = document.createElement('p');
        img.textContent = movies[i].cover;
        h3.textContent = movies[i].title;
        p.textContent = movies[i].simple_plot;

        article.appendChild(img)
        article.appendChild(button)
        article.appendChild(h3)
        article.appendChild(p)

        articles.appendChild(article)
    }

    //////////////////////////////////////////////////////////////////////////////////////////////

    var aantalLikes = 0;
    var mijnFavorieten = document.querySelector(".aantalLikes");
    mijnFavorieten.innerHTML = "(" + aantalLikes + ")";

    console.log('like.js loaded.');

    // Like Buttons
    var film1 = document.querySelector(".film0");
    var film2 = document.querySelector(".film1");
    var film3 = document.querySelector(".film2");
    var film4 = document.querySelector(".film3");
    var film5 = document.querySelector(".film4");
    var film6 = document.querySelector(".film5");

    film1.addEventListener("click", function () {
        film1.classList.toggle('liked');
        if (film1.classList.contains('liked')) {
            console.log("U heeft de film toegevoegd aan uw favorieten");
            aantalLikes++;
        } else {
            aantalLikes--;
        }
        mijnFavorieten.innerHTML = "(" + aantalLikes + ")";
    });

    film2.addEventListener("click", function () {
        film2.classList.toggle('liked');
        if (film2.classList.contains('liked')) {
            console.log("U heeft de film toegevoegd aan uw favorieten");
            aantalLikes++;
        } else {
            aantalLikes--;
        }
        mijnFavorieten.innerHTML = "(" + aantalLikes + ")";
    });

    film3.addEventListener("click", function () {
        film3.classList.toggle('liked');
        if (film3.classList.contains('liked')) {
            console.log("U heeft de film toegevoegd aan uw favorieten");
            aantalLikes++;
        } else {
            aantalLikes--;
        }
        mijnFavorieten.innerHTML = "(" + aantalLikes + ")";
    });

    film4.addEventListener("click", function () {
        film4.classList.toggle('liked');
        if (film4.classList.contains('liked')) {
            console.log("U heeft de film toegevoegd aan uw favorieten");
            aantalLikes++;
        } else {
            aantalLikes--;
        }
        mijnFavorieten.innerHTML = "(" + aantalLikes + ")";
    });

    film5.addEventListener("click", function () {
        film5.classList.toggle('liked');
        if (film5.classList.contains('liked')) {
            console.log("U heeft de film toegevoegd aan uw favorieten");
            aantalLikes++;
        } else {
            aantalLikes--;
        }
        mijnFavorieten.innerHTML = "(" + aantalLikes + ")";
    });

    film6.addEventListener("click", function () {
        film6.classList.toggle('liked');
        if (film6.classList.contains('liked')) {
            console.log("U heeft de film toegevoegd aan uw favorieten");
            aantalLikes++;
        } else {
            aantalLikes--;
        }
        mijnFavorieten.innerHTML = "(" + aantalLikes + ")";
    });

    var body = document.querySelector('body');

    window.onkeyup = function darkmode(e) {
        if (e.keyCode == 68) {
            body.classList.toggle("darkmode");
            articles.classList.toggle("darkmode2");
        }
    };

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
