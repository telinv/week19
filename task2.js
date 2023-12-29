function makePost(){
    const container = document.querySelector('.container');
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then (data => {
    data.forEach(post => {
        const newPost =document.createElement ('div');
        newPost.classList.add('element');
        const h2 = document.createElement('h2');
        h2.textContent = post.title;
        const p = document.createElement('p');
        p.textContent = post.body;
        newPost.appendChild(h2);
        newPost.appendChild(p);
        container.appendChild(newPost);
    });
})
.catch((error) => {
    console.error('Ошибка:', error);
});
}
document.addEventListener('DOMContentLoaded', function() {
    makePost();
  });

