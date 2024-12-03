document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner l'élément du feed dans le DOM
    const feedElement = document.getElementById("feed");
  
    // Parcourir chaque post dans le JSON
    posts.forEach(post => {
      // Créer une carte de post
      const postElement = document.createElement("div");
      postElement.className = "post";
  
      // Ajouter le titre du post (nom de l'utilisateur)
      const postTitle = document.createElement("h3");
      postTitle.textContent = `Post de ${post.user}`;
      postElement.appendChild(postTitle);
  
      // Ajouter le contenu du post (texte)
      const postContent = document.createElement("p");
      postContent.textContent = post.content;
      postElement.appendChild(postContent);
  
      // Ajouter l'image si elle existe
      if (post.imageUrl) {
        const postImage = document.createElement("img");
        postImage.src = post.imageUrl;
        postImage.alt = "Image du post";
        postImage.style.width = "100%";
        postImage.style.maxWidth = "300rem";
        postImage.addEventListener("click", () => {
          // Afficher l'image en plein écran
          const modal = document.createElement("div");
          modal.className = "modal";
          modal.style.position = "fixed";
          modal.style.top = "0";
          modal.style.left = "0";
          modal.style.width = "100%";
          modal.style.height = "100%";
          modal.style.backgroundColor = "rgba(0,0,0,0.8)";
          modal.style.display = "flex";
          modal.style.alignItems = "center";
          modal.style.justifyContent = "center";
  
          const fullImage = document.createElement("img");
          fullImage.src = post.imageUrl;
          fullImage.style.maxWidth = "90%";
          fullImage.style.maxHeight = "90%";
  
          modal.appendChild(fullImage);
  
          // Fermer la modal en cliquant
          modal.addEventListener("click", () => {
            document.body.removeChild(modal);
          });
  
          document.body.appendChild(modal);
        });
        postElement.appendChild(postImage);
      }
  
      // Ajouter les boutons de réaction
      const reactionsElement = document.createElement("div");
      reactionsElement.className = "reactions";
  
      ["Like", "Love", "Dislike"].forEach(reaction => {
        const reactionButton = document.createElement("button");
        reactionButton.textContent = `${reaction} (${post.reactions[reaction.toLowerCase()]})`;
  
        // Ajouter l'événement de clic pour chaque réaction
        reactionButton.addEventListener("click", () => {
          post.reactions[reaction.toLowerCase()]++;
          reactionButton.textContent = `${reaction} (${post.reactions[reaction.toLowerCase()]})`;
  
          // Animation de particules (nous l'ajouterons dans l'étape suivante)
          addReactionAnimation(reactionButton, reaction);
        });
  
        reactionsElement.appendChild(reactionButton);
      });
  
      postElement.appendChild(reactionsElement);
  
      // Ajouter les commentaires
      const commentsElement = document.createElement("div");
      commentsElement.className = "comments";
      const commentsTitle = document.createElement("h4");
      commentsTitle.textContent = "Commentaires";
      commentsElement.appendChild(commentsTitle);
  
      post.comments.forEach(comment => {
        const commentElement = document.createElement("div");
        commentElement.className = "comment";
        commentElement.innerHTML = `<strong>${comment.user}:</strong> ${comment.content}`;
        commentsElement.appendChild(commentElement);
      });
  
        // Ajouter la possibilité de commenter
        const commentTextarea = document.createElement("textarea");
        commentTextarea.placeholder = "Ajouter un commentaire";
        commentsElement.appendChild(commentTextarea);

        const commentButton = document.createElement("button");
        commentButton.textContent = "Commenter";

        // Modification de la gestion des commentaires
        // Modification de la gestion des commentaires
        commentButton.addEventListener("click", () => {
            if (commentTextarea.value.trim() !== "" && commentTextarea.value.length <= 200) {
            const newComment = {
                user: "Vous", // Nom temporaire, pourrait être dynamique
                content: commentTextarea.value
            };
            post.comments.push(newComment);
        
            // Ajouter le nouveau commentaire dans le DOM
            const newCommentElement = document.createElement("div");
            newCommentElement.className = "comment";
            newCommentElement.innerHTML = `<strong>${newComment.user}:</strong> ${newComment.content}`;
            newCommentElement.style.opacity = "0"; // Commence avec une opacité de 0 pour l'animation
        
            commentsElement.insertBefore(newCommentElement, commentTextarea);
        
            // Animation d'apparition progressive
            setTimeout(() => {
                newCommentElement.style.transition = "opacity 0.5s ease";
                newCommentElement.style.opacity = "1";
            }, 100);
        
            // Effacer le textarea après l'ajout
            commentTextarea.value = "";
            } else if (commentTextarea.value.length > 200) {
            alert("Le commentaire ne doit pas dépasser 200 caractères.");
            }
        });
  

        commentsElement.appendChild(commentButton);
    
        postElement.appendChild(commentsElement);
    
        // Ajouter le post au feed
        feedElement.appendChild(postElement);

    });
  
    // Fonction pour ajouter une animation de réaction
    function addReactionAnimation(button, reaction) {
        // Créer une particule pour la réaction
        const particle = document.createElement("div");
        particle.className = "reaction-particle";
        
        // Définir l'icône selon la réaction
        switch (reaction) {
        case "Like":
            particle.textContent = "👍";
            break;
        case "Love":
            particle.textContent = "❤️";
            break;
        case "Dislike":
            particle.textContent = "👎";
            break;
        }

        // Positionner la particule au-dessus du bouton cliqué
        const buttonRect = button.getBoundingClientRect();
        particle.style.left = `${buttonRect.left + window.scrollX + buttonRect.width / 2}px`;
        particle.style.top = `${buttonRect.top + window.scrollY}px`;

        // Ajouter la particule au document
        document.body.appendChild(particle);

        // Supprimer la particule après l'animation
        particle.addEventListener("animationend", () => {
        document.body.removeChild(particle);
        });
    }
  
});
  