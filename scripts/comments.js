const commentsArr = [{
    name: "Connor Walton",
    date: "02/17/2021",
    comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    }, 
    {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    }, 
    {
    name: "Miles Acosta",
    date: "12/20/2020",
    comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!"
    }];

//TIME STAMP
let dateStamp = new Date();
let mm = String(dateStamp.getMonth() + 1).padStart(2, "0");
let dd = String(dateStamp.getDate()).padStart(2,"0");
let yyyy = dateStamp.getFullYear();

dateStamp = mm + "/" + dd + "/" + yyyy;

const formEl = document.querySelector(".comments__input-info-form");

// Function to display comments from the given array
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
        mainName.innerText = commentsArr[i]["name"];
        mainName.classList.add("comments__new-name");
        mainName.classList.add("body-text");
        subDiv.appendChild(mainName);

        const mainTime = document.createElement("p");
        mainTime.innerText = commentsArr[i]["date"];
        mainTime.classList.add("comments__new-time");
        subDiv.appendChild(mainTime);

        const mainP = document.createElement("p");
        mainP.innerText = commentsArr[i]["comment"];
        mainP.classList.add("comments__new-comment");
        subDiv.appendChild(mainP);

        commentDiv.appendChild(mainDiv);
    }
};

displayComment(commentsArr);


//Add new comment onclick

formEl.addEventListener("submit", newPost => {

    newPost.preventDefault();
    const newComment = {};
    
    newComment.name = newPost.target.name.value;
    newComment.comment = newPost.target.comment.value;

    const commentDiv = document.querySelector(".comments__dynamic");
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("comments__new");
    mainDiv.classList.add("body-text")
    commentDiv.appendChild(mainDiv);

    const mainImg = document.createElement("img");
    mainImg.classList.add("comments__new-image");
    mainDiv.appendChild(mainImg);

    const subDiv = document.createElement("div");
    subDiv.classList.add("comments__container");
    mainDiv.appendChild(subDiv);

    const mainName = document.createElement("h2");
    mainName.innerText = newComment.name;
    mainName.classList.add("comments__new-name");
    mainName.classList.add("body-text");
    subDiv.appendChild(mainName);

    const mainTime = document.createElement("p");
    mainTime.innerText = dateStamp;
    mainTime.classList.add("comments__new-time");
    subDiv.appendChild(mainTime);

    const mainP = document.createElement("p");
    mainP.innerText = newComment.comment;
    mainP.classList.add("comments__new-comment");
    subDiv.appendChild(mainP);
    commentDiv.appendChild(mainDiv);
    
    
    //MAKES NEW COMMENTS GO TO THE TOP
    let toTheTop = document.querySelector(".comments__dynamic");
    toTheTop.insertBefore(mainDiv, toTheTop.childNodes[0]);

    //CLEARS INPUT ON SUBMIT
    let formInput = document.querySelector(".comments__input-info-form")
    formInput.reset();
    
});  


