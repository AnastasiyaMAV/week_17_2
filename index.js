const addBtn = document.getElementById("btn_add_comment");
const commentContainer = document.getElementById("comment");
const commentField = document.getElementById("add_comment");

function createComment(add_comment) {
    return`<div class="alert alert-dark alert-dismissible fade show" role="alert">${add_comment}<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>`;
}

addBtn.addEventListener("click", () => {
    let checkSpam1 = commentField.value.toLowerCase();
    let checkSpam2 = checkSpam1.replace(new RegExp("viagra", 'g'), "***");
    let checkSpam3 = checkSpam2.replace(new RegExp("xxx", 'g'), "***");
    if(!commentField.value) return;
    const newComment = createComment(checkSpam3);
    commentContainer.innerHTML = commentContainer.innerHTML + newComment;
    commentField.value = "";
});

btn_clear_comment.addEventListener("click", () => {
    commentContainer.innerHTML = "";
})