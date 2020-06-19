const allArticles = document.querySelectorAll('.accordion article');

const icons = document.querySelectorAll('.title .fas');


allArticles.forEach(function(article, index){
    article.firstElementChild.addEventListener('click', function(){
        article.lastElementChild.classList.toggle('showArticle');

        const plus = article.firstElementChild.querySelectorAll('span')[0];

        const minus = article.firstElementChild.querySelectorAll('span')[1];

        plus.classList.toggle('hidePlus');
        minus.classList.toggle('showMinus');
        
    });
});