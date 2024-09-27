// Simple interactive script for the website
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('#header');
    const interestImage = document.getElementById('interestImage');
    header.addEventListener('click', function() {
        alert('Hello, welcome to my personal website!');
    });
    header.addEventListener('mouseenter', function() {
        interestImage.style.visibility = 'visible'; 
        interestImage.style.opacity = '1';
    });
    header.addEventListener('mouseleave', function() {
        interestImage.style.visibility = 'hidden'; 
        interestImage.style.opacity = '0';
    });
});