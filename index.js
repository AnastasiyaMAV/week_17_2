const addBtn = document.getElementById("btn_add_comment");
//const commentContainer = document.getElementById("comment");
const commentField = document.getElementById("add_comment");

// function createComment(add_comment) {
//     return`<div class="alert alert-dark alert-dismissible fade show" role="alert">${add_comment}<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>`;
// }

function createComment(add_comment) {
    let div = document.createElement('div');
    div.innerHTML = '<div class="alert alert-dark alert-dismissible fade show" role="alert"  id="comment">' + add_comment + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
    //console.log(div);
    document.body.before(div);
}

addBtn.addEventListener("click", () => {
    let checkSpam1 = commentField.value.toLowerCase();
    let checkSpam2 = checkSpam1.replace(new RegExp("viagra", 'g'), "***");
    let checkSpam3 = checkSpam2.replace(new RegExp("xxx", 'g'), "***");
    if(!commentField.value) return;
    const newComment = createComment(checkSpam3);
    //console.log(commentContainer);
    //commentContainer.innerHTML = commentContainer.innerHTML + newComment;
    commentField.value = "";
});

btn_clear_comment.addEventListener("click", () => {
    const commentContainer = document.querySelectorAll(".alert");
    // console.log(commentContainer);
    // console.log(commentContainer.length);

    for(let i = commentContainer.length; i--;){
        commentContainer[i].remove(commentContainer);
        //console.log(i);
    }
    commentField.value = ""    
})