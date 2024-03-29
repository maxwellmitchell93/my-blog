
const userName = document.getElementById('user-name');
const content = document.getElementById('content');
const blogTitle= document.getElementById('blog-title');
const submitbtn = document.getElementById('submitbtn');

submitbtn.addEventListener('click', function(e){
    e.preventDefault();



const formData = {
    userName: userName.value.trim(),
    content: content.value.trim(),
    blogTitle: blogTitle.value.trim(),
}
    localStorage.setItem('formData', JSON.stringify(formData));

console.log(JSON.parse(window.localStorage.getItem('formData')));

});






