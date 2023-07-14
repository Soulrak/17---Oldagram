import { posts } from "./data.js"

const mainEl = document.querySelector(".main")
let html = ""

function renderPosts(){
    for (let i = 0; i < posts.length; i++) {
        let postInfo = posts[i]
        html += `
            <article class="post">
                        
                <div class="post-header">
                    <img class="avatar" src="${postInfo.avatar}" alt="">
                    <div class="post-info">
                        <div>
                            <span class="name">${postInfo.name}</span>
                        </div>
                        <span class="location">${postInfo.location}</span>
                    </div>
                </div>
    
                <div>
                    <img class="post-img" src="${postInfo.post}" alt="">
                </div>
    
                <div class="control-bar">
                    <img src="images/icon-heart.png" alt="">
                    <img src="images/icon-comment.png" alt="">
                    <img src="images/icon-dm.png" alt="">
                </div>
                    
                <div class="likes-container">
                    <span class="likes">${postInfo.likes} likes</span>
                </div>
                    
                <div class="comment-container">
                    <p><span class="username">${postInfo.username}</span>${postInfo.comment}</p>
                </div>
                
            </article>
        `
    }
        mainEl.innerHTML = html
}

renderPosts()






