let article = 
`<div class=content>
<div class="content-info">
<div class="content-header">
<img src="./images/avatar.png" />
<p> &nbsp; Authors name <span> &nbsp; in &nbsp;</span> Topics Name <span> &nbsp; · &nbsp; 7 july</span></p>
</div>

<div class="content-body">
  <p id="title"></p>
  <p id="summary"></p>
</div>

<div class="content-footer">
    <div class="content-footer-left">
        <button id="button"> </button>
        <p id="readingTime">&nbsp; 12 min read</p>
        <p> &nbsp; · &nbsp; Selected for you</p>
    </div>
    <div class="squares">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
    </div>
</div>
</div>
<img class="imgserver" src=""/>
</div>`;


const articles = document.getElementById("articles");

const nyt_url = 'https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=70jS2BdMPBM9JhmKShfkQ90GOkjFoKnW';

async function topStoriesNYT () {
    const response = await fetch(nyt_url);
    const articlesfromAPI = await response.json()
    if(response.ok){
        console.log(articlesfromAPI);
        articlesfromAPI.results.splice(0, 10).forEach((item)=>{
            let newArticle = article.replace('id="title">', `id="title">${item.title}`);
            newArticle = newArticle.replace('id="summary">', `id="summary">${item.abstract}`);
            newArticle = newArticle.replace('id="button">', `id="button">${item.subsection}`);
            newArticle = newArticle.replace('src=""', `src="${item.multimedia[0].url}"`);
            
            articles.innerHTML += newArticle; 
        })
    } else {
    console.log('error')
}
}
topStoriesNYT();
