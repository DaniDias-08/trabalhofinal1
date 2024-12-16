
const themeToggleButton = document.getElementById("themeToggle");

themeToggleButton.addEventListener("click", () => {
    
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    
    if (document.body.classList.contains("dark")) {
        themeToggleButton.textContent = "🌞"; 
    } else {
        themeToggleButton.textContent = "🌙"; 
    }
});


window.addEventListener("DOMContentLoaded", () => {
    // Verifica se existe uma preferência salva
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        themeToggleButton.textContent = "🌞"; 
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        themeToggleButton.textContent = "🌙"; 
    }
});

document.querySelectorAll('.album').forEach(album => {
    album.addEventListener('click', () => {
        const description = album.getAttribute('data-description');
        document.getElementById('album-title').textContent = album.querySelector('p').textContent;
        document.getElementById('album-description').textContent = description;
    });
});

