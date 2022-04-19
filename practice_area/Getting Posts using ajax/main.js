function getPosts(){
    const posts = new XMLHttpRequest();
    posts.open('GET','https://jsonplaceholder.typicode.com/posts',true);

    if(posts.readyState < 4){
        const postsContainer = document.querySelector('#posts-area');
        postsContainer.classList.add('text-light');
        const p = document.createElement('p');
        p.classList.add('msg');
        p.textContent = 'Please Wait!'

        postsContainer.append(p)
    };
    posts.onload = function () {
        const  p = document.querySelector('.msg');
        p.remove();
        const parsedPosts = JSON.parse(posts.responseText);
        const postsContainer = document.querySelector('#posts-area');
        
        parsedPosts.forEach(post => {
            postsContainer.innerHTML += `
                <div class="mb-5 mt-5">
                <div class="container">
                    <div class="bg-dark text-light p-4 m-2 post-container">
                        <div class="post-title">
                            <p>${post.title}</p>
                        </div>
                        <div class="post-text pb-3 text-center">
                            <p>${post.body}</p>
                        </div>
                        <div class="post-action">
                            <div class="d-flex">
                                <button class="btn-outline-primary btn-sm col-6 bg-dark">
                                    <i class="bi bi-star"></i>
                                </button>
                                <button class="btn-outline-primary btn-sm col-6 bg-dark">
                                    <i class="bi bi-chat"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="text-light">
            `;
        })
    }

    posts.send();
};

getPosts();