const form = document.querySelector(".comments__input-info-form");

// API and API key
const api = `https://project-1-api.herokuapp.com/`;
const api_key =  "?api_key=65490e1c-7555-4d3f-ac91-0f4f9db19dda";

// Function to display comments from an array.
function displayComment(arr) {
    const commentDiv = document.querySelector(".comments__dynamic");
    commentDiv.innerHTML = "";

    for(let i = 0; i < arr.length; i++) {
        const mainDiv = document.createElement("div");
        mainDiv.classList.add("comments__new");
        mainDiv.classList.add("body-text")
        
        const mainImg = document.createElement("img");
        mainImg.classList.add("comments__new-image");
        mainDiv.appendChild(mainImg);

        const subDiv = document.createElement("div");
        subDiv.classList.add("comments__container");
        mainDiv.appendChild(subDiv);

        const mainName = document.createElement("h2");
        mainName.innerText = arr[i]["name"];
        mainName.classList.add("comments__new-name");
        mainName.classList.add("body-text");
        subDiv.appendChild(mainName);

        const mainTime = document.createElement("p");
        let commentDate = new Date (arr[i].timestamp).toLocaleDateString("en-US");
        mainTime.innerText = commentDate;
        mainTime.classList.add("comments__new-time");
        subDiv.appendChild(mainTime);

        const mainP = document.createElement("p");
        mainP.innerText = arr[i]["comment"];
        mainP.classList.add("comments__new-comment");
        subDiv.appendChild(mainP);

        commentDiv.appendChild(mainDiv);
    }
};

//Add new comment onclick
form.addEventListener("submit", newPost => {
    newPost.preventDefault();
                
    let newComment = axios.post(api + 'comments' + api_key,
    {
        name: newPost.target.name.value,
        comment: newPost.target.comment.value
    }
    );
    newComment.then((result) => {
        let arr = axios.get(api + 'comments' + api_key)
            arr.then(result=> {
                let postedCommentData = result.data;
                displayComment(postedCommentData.reverse());
            });
            arr.catch((error) => {
                console.log(error);
            });
    })
    // Clear form on submit
    let formInput = document.querySelector(".comments__input-info-form");
    formInput.reset();
});


//GET comments from an API
const arr = axios.get(api + 'comments' + api_key)
arr.then(result => {
    let commentData = result.data;
    // calling the display comment function
    displayComment(
        commentData.reverse()
    );
})
arr.catch((error) => {
    console.log(error);
});