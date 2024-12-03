document.addEventListener("DOMContentLoaded", function() {

    const friendsList = document.getElementById("friends-list");

    // Fonction pour charger dynamiquement la liste d'amis
    function loadFriends() {
        friendsList.innerHTML = ""; // Réinitialiser la liste

        conversations.forEach(conversation => {
            const friendItem = document.createElement("div");
            friendItem.className = "friend-item";
            friendItem.setAttribute("draggable", "true");
            friendItem.setAttribute("data-name", conversation.user);

            // Ajouter le contenu HTML de chaque ami
            friendItem.innerHTML = `
                <strong>${conversation.user}</strong>
                <a href="#" class="message-link" data-user="${conversation.user}">Envoyer un message</a>
            `;

            // Ajouter l'élément ami à la liste d'amis
            friendsList.appendChild(friendItem);
        });

        // Ajouter les événements nécessaires après génération
        attachMessageLinkEvents();
        attachDragAndDropEvents();
    }

    // Fonction pour attacher les événements de lien de messagerie
    function attachMessageLinkEvents() {

        const messageLinks = document.getElementsByClassName("message-link");
        const feedSection = document.getElementById("feed-section");
        const messagesSection = document.getElementById("messages-section");
        const friendsSection = document.getElementById("friends-section");
    
        Array.from(messageLinks).forEach(function(link) {
            link.addEventListener("click", function(event) {
                event.preventDefault();
                const userName = link.dataset.user;

                // Afficher la section de messagerie
                messagesSection.classList.remove("hidden");
                feedSection.classList.add("hidden");
                friendsSection.classList.add("hidden");

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
    }

    // Fonction pour attacher les événements de drag and drop
    function attachDragAndDropEvents() {
        let draggedItem = null;
        const friendItems = friendsList.getElementsByClassName("friend-item");

        for (let friend of friendItems) {
            friend.addEventListener("dragstart", function() {
                draggedItem = friend;
                setTimeout(() => {
                    friend.style.display = "none";
                }, 0);
            });

            friend.addEventListener("dragend", function() {
                setTimeout(() => {
                    draggedItem.style.display = "flex";
                    draggedItem = null;
                }, 0);
            });

            friend.addEventListener("dragover", function(e) {
                e.preventDefault();
            });

            friend.addEventListener("drop", function() {
                if (draggedItem) {
                    friendsList.insertBefore(draggedItem, friend.nextSibling);
                }
            });
        }
    }

    // Charger la liste d'amis au démarrage
    loadFriends();
});
