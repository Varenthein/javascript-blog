'use strict';

/* document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  }); */

const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);
    /* remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');    
    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
        console.log(activeLinks);
    }
    /* add class 'active' to the clicked link */
    clickedElement.classList.add('active');
    console.log('clickedElement:', clickedElement);
    /* remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .active');
    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
        console.log(activeArticles);
    }
    /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href')
    console.log('Link was clicked!', articleSelector);
    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    console.log('Article selected', targetArticle);
    /* add class 'active' to the correct article */
    targetArticle.classList.add('active');
    console.log('Add class active:', targetArticle);
  }
  
const links = document.querySelectorAll('.titles a');
  
    for(let link of links){
        link.addEventListener('click', titleClickHandler);
    }