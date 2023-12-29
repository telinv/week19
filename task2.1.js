function addPost(){
const postTitle = document.querySelector('.titleOfThePost').value;
const postText = document.querySelector('.textOfThePost').value;
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: postTitle,
      body: postText,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
.then (post => {
        const newPost =document.createElement ('div');
        newPost.classList.add('element');
        const h3 = document.createElement('h3');
        h3.textContent = post.title;
        const p = document.createElement('p');
        p.textContent = post.body;
        newPost.appendChild(h3);
        newPost.appendChild(p); 

        const container = document.querySelector('.container');
        container.appendChild(newPost);
})
.catch((error) => {
    console.error('Ошибка:', error);
});
cleaning()
}
document.querySelector('.bForPost').addEventListener('click', addPost);

function cleaning(){
    document.querySelector('.titleOfThePost').value = '';
    document.querySelector('.textOfThePost').value = '';
}

