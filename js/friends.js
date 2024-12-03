document.addEventListener("DOMContentLoaded", function() {

     const friendsList = document.getElementById("friends-list");
     // Barre de recherche pour filtrer les amis
     const searchInput = document.getElementById("search-input");
     const friendItems = friendsList.getElementsByClassName("friend-item");
 
     searchInput.addEventListener("input", function() {
         const filter = searchInput.value.toLowerCase();
         for (let friend of friendItems) {
             const name = friend.dataset.name.toLowerCase();
             if (name.includes(filter)) {
                 friend.style.display = "flex";
             } else {
                 friend.style.display = "none";
             }
         }
     });

    // Fonction pour charger dynamiquement la liste d'amis
    function loadFriends() {
        friendsList.innerHTML = ""; // Réinitialiser la liste

        conversations.forEach(conversation => {
            const friendItem = document.createElement("div");
            friendItem.className = "friend-item";
            friendItem.setAttribute("draggable", "true");
            friendItem.setAttribute("data-name", conversation.user);

            // Ajouter la photo de profil
            const profilePic = document.createElement("img");
            profilePic.className = "profile-pic";
            profilePic.src = conversation.userProfilePic;
            profilePic.alt = `${conversation.sender} profile picture`;
            profilePic.style.width = "100px";
            profilePic.style.height = "100px";
            profilePic.style.borderRadius = "50%";
            profilePic.style.marginRight = "10px";

            // Ajouter le contenu du message
            const profil = document.createElement("div");
            profil.style.display="flex";
            const content = document.createElement("div");
            content.style.height="100px";
            content.style.lineHeight="100px";
            const linkElement = document.createElement("div"); 
            linkElement.innerHTML = `<a href="#" class="message-link" data-user="${conversation.user}">Envoyer un message</a>`;
            
            content.innerHTML = `
                <strong>${conversation.user}</strong>
            `;

            // Ajouter le contenu HTML de chaque ami
            // Ajouter la photo et le message dans l'élément du message
            profil.appendChild(profilePic);
            profil.appendChild(content);
            friendItem.appendChild(profil);
            friendItem.appendChild(linkElement);


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
