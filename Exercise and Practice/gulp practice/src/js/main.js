class article {
    constructor(headline, body) {
        this.headline = headline;
        this.body = body;
    }
}

const myFrom = document.querySelector('#my-form');

// Append new article
function appendArt(newArt) {
    const articles = document.querySelector('#articles');
    articles.innerHTML += `
    <li>
        <div">
            <h4>${newArt.headline}</h4>
        </div>
        <section>
            <p>${newArt.body}</p>
        </section>
    </li>
    `;
}
// get article input
myFrom.addEventListener('submit', e => {
    e.preventDefault();
    console.log('work');
    // DOM elements
    const articleHeadline = document.querySelector('#headline-input');
    const articleBody = document.querySelector('#article-body-input');

    if (articleHeadline.value === '' || articleBody.value === '') {
        alert('enter all fields!');
    } else {
        newArticle = new article(articleHeadline.value, articleBody.value);

        appendArt(newArticle);

        // Reset input
        articleHeadline.value = '';
        articleBody.value = '';
    }
});
