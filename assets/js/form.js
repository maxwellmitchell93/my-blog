const userNameInput = document.querySelector('#user-name');
const blogTitleInput = document.querySelector('#blog-title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
const form = document.querySelector('#form');

//Add event Listener for submit button
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    // //Blog post data saved in localstorage
    const blogPost = {
        userName: userNameInput.value.trim(),
        blogTitleInput: blogTitleInput.value.trim(),
        contentInput: contentInput.value.trim(),
    };

    localStorage.setItem('blogPost', JSON.stringify(blogPost));

});
//Darkmode
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }





