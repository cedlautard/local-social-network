// Sélection des sections et des éléments
const messagesSection = document.getElementById("messages-section");
const conversationsList = document.getElementById("conversations-list");
const conversationDetail = document.getElementById("conversation-detail");
const messagesHistory = document.getElementById("messages-history");
const messageInput = document.getElementById("message-input");
const sendMessageButton = document.getElementById("send-message");

// Afficher les messages d'une conversation
function displayConversation(conversation) {
    messagesHistory.innerHTML = ""; // Réinitialiser l'historique des messages
    conversation.messages.forEach(message => {
        const messageElement = document.createElement("div");
        messageElement.className = "message-item";
        messageElement.style.padding = "10px";
        messageElement.style.marginBottom = "10px";

        messageElement.innerHTML = `
            <strong>${message.sender === "me" ? "Vous" : conversation.user}:</strong>
            <span>${message.content}</span>
            <span style="float: right; font-size: 0.8rem; color: #777;">${message.timestamp}</span>
        `;
        messagesHistory.appendChild(messageElement);
    });

    // Garder la conversation en mémoire pour envoyer un nouveau message
    conversationDetail.dataset.currentConversationIndex = conversations.indexOf(conversation);
    // Scroll automatique vers le bas de l'historique
    messagesHistory.scrollTop = messagesHistory.scrollHeight;
}

document.addEventListener("DOMContentLoaded", function() {

    // Charger les conversations
    function loadConversations() {

        conversationsList.innerHTML = ""; // Réinitialiser la liste des conversations
        conversations.forEach((conversation, index) => {
            const conversationElement = document.createElement("div");
            conversationElement.className = "conversation-item";
            conversationElement.style.padding = "10px";
            conversationElement.style.marginBottom = "10px";
            conversationElement.style.cursor = "pointer";

            // Ajouter nom de l'utilisateur et le dernier message
            const lastMessage = conversation.messages[conversation.messages.length - 1];
            conversationElement.innerHTML = `
                <strong>${conversation.user}</strong><br>
                <span>${lastMessage.content}</span>
            `;

            // Ajouter l'événement de clic pour afficher le détail de la conversation
            conversationElement.addEventListener("click", () => {
                displayConversation(conversation);
            });

            conversationsList.appendChild(conversationElement);
        });
    }

    // Envoi d'un nouveau message
    sendMessageButton.addEventListener("click", function() {
        const messageContent = messageInput.value.trim();
        if (messageContent === "") return; // Ne pas envoyer un message vide
        // Récupérer la conversation actuelle
        const currentConversationIndex = conversationDetail.dataset.currentConversationIndex;
        console.log(currentConversationIndex);
        if (currentConversationIndex === undefined) return;

        const currentConversation = conversations[currentConversationIndex];

        // Ajouter le message au JSON simulé
        const newMessage = {
            sender: "me",
            content: messageContent,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        currentConversation.messages.push(newMessage);

        // Mettre à jour l'interface
        messageInput.value = ""; // Réinitialiser l'input
        displayConversation(currentConversation); // Réafficher la conversation
    });

    messageInput.addEventListener("input", function() {
        if (messageInput.value.length > 40) {
            messageInput.value = messageInput.value.substring(0, 40);
        }
    });

    // Charger les conversations au démarrage
    loadConversations();
});
