
///// ++++++++*********NEW SECTION++++++++*********

// Function to display comments from an array.
function displayComment(arr) {

    const commentDiv = document.querySelector(".comments__dynamic");

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
        mainTime.innerText = new Date (arr[i].timestamp).toLocaleDateString("en-US");
        mainTime.classList.add("comments__new-time");
        subDiv.appendChild(mainTime);

        const mainP = document.createElement("p");
        mainP.innerText = arr[i]["comment"];
        mainP.classList.add("comments__new-comment");
        subDiv.appendChild(mainP);

        commentDiv.appendChild(mainDiv);
    }
};

//GET comments from an API
const api = `https://project-1-api.herokuapp.com/`;
const api_key =  "?api_key=65490e1c-7555-4d3f-ac91-0f4f9db19dda";

const arr = axios.get(api + 'comments' + api_key)
arr.then((result) => {
    let commentData = result.data;
    console.log(commentData);
    // calling the display comment function
    displayComment(
        commentData.sort(function(a, b) {
          return b.timestamp - a.timestamp;
        })
      );
})
arr.catch((error) => {
    console.log(error);
});

const form = document.querySelector(".comments__input-info-form");

//Add new comment onclick

form.addEventListener("submit", newPost => {
    newPost.preventDefault();

    const newComment = axios.post(api + 'comments' + api_key,
    {
        name: newPost.target.name.value,
        comment: newPost.target.comment.valuex
    }
    );
    newComment.then(() => {
        let postedComment = axios.get(api + 'comments' + api_key)
        postedComment.then(result=> {
           let postedCommentData = result.data;
            displayComment(
                postedCommentData.sort(function(a, b) {
                return b.timestamp - a.timestamp;
              })
            );
        });
    })
// Clear form on submit
form.reset();
});