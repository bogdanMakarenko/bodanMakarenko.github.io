/**
 * Created by bogda on 07.11.2017.
 */

let contex = document.body.querySelector('.load-more');
let mainBreakfast = document.body.querySelector('.main-breakfast');

// LOAD MORE BUTTON
contex.addEventListener('click', ()=>{
     let article = document.createElement('article');
     let article2 = document.createElement('article');

     article.innerHTML =
         '<div class="main-breakfast-tost"></div>'+
         '<div class="main-breakfast-recipe">'+
         '<h2>Beef tartare and cured beef</h2>'+
        '<p>With parmesan custard, cured egg yolk, beetroot, currants, onion, anchovy & pepper vinaigrette</p>'+
        '<div class="main-home-recipe-button">'+
        '<a href="#">Read more</a><div></div><span class="arrow"></span></div></div>';

     article2.innerHTML =
        '<div class="main-breakfast-tost"></div>'+
        '<div class="main-breakfast-recipe">'+
        '<h2>Beef tartare and cured beef</h2>'+
        '<p>With parmesan custard, cured egg yolk, beetroot, currants, onion, anchovy & pepper vinaigrette</p>'+
        '<div class="main-home-recipe-button">'+
        '<a href="#">Read more</a><div></div><span class="arrow"></span></div></div>';

    mainBreakfast.appendChild(article);
    mainBreakfast.appendChild(article2);
});

