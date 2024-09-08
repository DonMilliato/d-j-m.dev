document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const toggleContent = document.getElementById('toggleContent');
    const body = document.body;

    // Change theme based on some condition (example: time of day)
    const hour = new Date().getHours();
    if (hour >= 7 && hour <= 19) {
        body.classList.add('light-theme');
    } else {
        body.classList.add('dark-theme');
    }

    // Toggle content visibility
    toggleButton.addEventListener('click', () => {
        toggleContent.classList.toggle('open');
    });
});
