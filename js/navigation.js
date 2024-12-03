document.addEventListener("DOMContentLoaded", function() {
    // Sélection des liens du menu
    const feedLink = document.getElementById("feed-link");
    const messagesLink = document.getElementById("messages-link");
    const friendLink = document.getElementById("friends-link");

    // Sélection des sections
    const feedSection = document.getElementById("feed-section");
    const messagesSection = document.getElementById("messages-section");
    const friendsSection = document.getElementById("friends-section");

    // Fonction pour afficher la section Feed et cacher la section Messagerie
    feedLink.addEventListener("click", function(event) {
        event.preventDefault();
        feedSection.classList.remove("hidden");
        messagesSection.classList.add("hidden");
        friendsSection.classList.add("hidden");
    });

    // Fonction pour afficher la section Messagerie et cacher la section Feed
    messagesLink.addEventListener("click", function(event) {
        event.preventDefault();
        messagesSection.classList.remove("hidden");
        feedSection.classList.add("hidden");
        friendsSection.classList.add("hidden");
    });

    friendLink.addEventListener("click", function(event) {
        event.preventDefault();
        friendsSection.classList.remove("hidden");
        messagesSection.classList.add("hidden");
        feedSection.classList.add("hidden");
    });

    const messageLinks = document.getElementsByClassName("message-link");
    Array.from(messageLinks).forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const userName = link.dataset.user;

            // Afficher la section de messagerie
            feedSection.style.display = "none";
            friendsSection.style.display = "none";
            messagesSection.style.display = "block";

            // Rechercher la conversation avec l'utilisateur et la charger
            const conversation = conversations.find(conv => conv.user === userName);
            if (conversation) {
                displayConversation(conversation);
            } else {
                // Créer une nouvelle conversation si elle n'existe pas
                const newConversation = {
                    user: userName,
                    userProfilePic: "images/default.jpg",
                    messages: []
                };
                conversations.push(newConversation);
                displayConversation(newConversation);
            }
        });
    });
});
