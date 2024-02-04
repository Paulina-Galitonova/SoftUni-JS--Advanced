function getArticleGenerator(articles) {
    let articlesArr=Array.from(articles);

  
  
    function generete(){
        if(articlesArr.length >0){
            let currentArticle=articlesArr.shift();
            let articleEl=document.createElement("article");
            articleEl.textContent=currentArticle
            let div=document.getElementById("content");
            div.appendChild(articleEl);
        }
      
    }

    return generete;

  

}
