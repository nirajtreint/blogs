const blogPosts = [
    {
        title: "Understanding JavaScript Closures",
        author: "Jane Doe",
        date: "2024-09-20",
        content: "JavaScript closures are a fundamental concept in JavaScript programming. They allow functions to retain access to their lexical scope even when the function is executed outside that scope."
    },
    {
        title: "A Guide to CSS Flexbox",
        author: "John Smith",
        date: "2024-09-19",
        content: "CSS Flexbox is a one-dimensional layout method that allows you to design complex layouts in a more efficient and predictable way. It provides an easier way to align items and distribute space within a container."
    },
    {
        title: "Getting Started with HTML5",
        author: "Emily Johnson",
        date: "2024-09-18",
        content: "HTML5 is the latest version of the Hypertext Markup Language, the code that describes web pages. It offers new features and improvements that help developers create modern websites."
    }
];

function displayBlogs() {
    const blogContainer = document.getElementById('blog-posts');
    blogPosts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('blog-post');
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p class="author">By ${post.author} <span class="date">${post.date}</span></p>
            <p class="content">${post.content}</p>
        `;
        blogContainer.appendChild(postDiv);
    });
}

window.onload = displayBlogs;

