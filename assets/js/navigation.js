document.addEventListener("DOMContentLoaded", function() {
    // Sélection des liens du menu
    const feedLink = document.getElementById("feed-link");
    const messagesLink = document.getElementById("messages-link");
    const friendLink = document.getElementById("friends-link");

    // Sélection des sections
    const feedSection = document.getElementById("feed-section");
    const messagesSection = document.getElementById("messages-section");
    const friendSection = document.getElementById("friend-section");

    // Fonction pour afficher la section Feed et cacher la section Messagerie
    feedLink.addEventListener("click", function(event) {
        event.preventDefault();
        feedSection.classList.remove("hidden");
        messagesSection.classList.add("hidden");
        friendSection.classList.add("hidden");
    });

    // Fonction pour afficher la section Messagerie et cacher la section Feed
    messagesLink.addEventListener("click", function(event) {
        event.preventDefault();
        messagesSection.classList.remove("hidden");
        feedSection.classList.add("hidden");
        friendSection.classList.add("hidden");
    });

    friendLink.addEventListener("click", function(event) {
        event.preventDefault();
        messagesSection.classList.add("hidden");
        feedSection.classList.add("hidden");
        friendSection.classList.remove("hidden");
    });
});
