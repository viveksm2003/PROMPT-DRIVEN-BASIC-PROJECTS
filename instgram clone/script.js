// Toggle Sidebar Collapse
const moreButton = document.getElementById('moreButton');
const sidebar = document.querySelector('.sidebar');

moreButton.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

// Display Story
function viewStory(username) {
    alert('Viewing story of ' + username);
}

// Handle Follow Button Click
function followUser(button) {
    button.textContent = 'Following';
    button.textContent = 'Unfollow';
    button.style.color = 'any';
    button.style.pointerEvents = 'none';
}

// Simulate Real-time Messages Update
const messageBadge = document.getElementById('messageBadge');
const messagesLink = document.getElementById('messagesLink');

setInterval(() => {
    const randomCount = Math.floor(Math.random() * 10) + 1;
    messageBadge.textContent = randomCount;
}, 5000);
