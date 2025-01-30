document.addEventListener('DOMContentLoaded', function() {
    const postContainer = document.getElementById('post-container');

    function fetchPosts() {
        fetch('/api/posts')
            .then(response => response.json())
            .then(data => {
                postContainer.innerHTML = '';
                data.forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.classList.add('post');
                    postElement.innerHTML = `
                        <h2>${post.title}</h2>
                        <p>${post.content}</p>
                        <small>By ${post.author} on ${new Date(post.createdAt).toLocaleDateString()}</small>
                    `;
                    postContainer.appendChild(postElement);
                });
            })
            .catch(error => console.error('Error fetching posts:', error));
    }

    fetchPosts();
});