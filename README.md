
# Mini Réseau Social

Bienvenue sur le projet **Mini Réseau Social**, une application web locale réalisée en HTML, CSS, et JavaScript pur (sans frameworks). Ce projet est conçu comme une démonstration d'une interface de réseau social avec un style **neumorphisme** et des fonctionnalités essentielles telles que le feed, la messagerie, et la liste d'amis.

## Table des Matières

1. [Fonctionnalités](#fonctionnalités)
2. [Technologies Utilisées](#technologies-utilisées)
3. [Structure des Fichiers](#structure-des-fichiers)
4. [Instructions d'Installation](#instructions-dinstallation)
5. [Utilisation de l'Application](#utilisation-de-lapplication)
6. [Améliorations Futures](#améliorations-futures)
7. [Auteur](#auteur)

## Fonctionnalités

### 1. Feed
- **Affichage des posts** : Le feed affiche une liste de posts (texte ou photo + texte).
- **Réactions** : Chaque post peut recevoir des réactions (Like, Love, Dislike), avec une animation de particules.
- **Commentaires** : Les utilisateurs peuvent commenter les posts et voir les commentaires existants.
- **Affichage en plein écran** : Les photos des posts peuvent être affichées en plein écran pour une meilleure visualisation.

### 2. Messagerie
- **Liste des conversations** : Affiche une liste de conversations disponibles, avec le dernier message de chaque discussion.
- **Historique des messages** : Lorsqu'une conversation est sélectionnée, l'historique complet des messages est affiché, incluant le nom de l'expéditeur, le contenu, et l'horodatage.
- **Envoi de messages** : Possibilité d'envoyer de nouveaux messages et de les ajouter à la conversation.

### 3. Liste d'Amis
- **Affichage dynamique des amis** : Une liste d'amis codée en dur est affichée.
- **Filtrage des amis** : Une barre de recherche permet de filtrer les amis par nom ou prénom.
- **Lien vers la messagerie** : Chaque ami a un lien "Envoyer un message" qui redirige l'utilisateur vers la messagerie.
- **Drag and Drop** : Les amis peuvent être réorganisés par simple glisser-déposer.

### 4. Design en Neumorphisme
- Le design adopte un style en **neumorphisme**, avec des ombres douces et des effets de relief, pour donner à l'interface un aspect moderne et interactif.

## Technologies Utilisées

- **HTML5** : Pour la structure des pages web.
- **CSS3** : Pour le style en **neumorphisme** et la mise en page responsive.
- **JavaScript** : Pour la gestion des interactions utilisateur, l'implémentation des fonctionnalités du feed, de la messagerie, et du drag and drop.

## Structure des Fichiers

Le projet est organisé comme suit :

```
/mini-reseau-social/
│
├── index.html                # Page principale de l'application
├── css/
│   ├── general.css           # Styles généraux de l'application
│   └── responsive.css        # Styles spécifiques au responsive
│   └── feed.css              # Styles spécifiques au feed
│   └── friends.css           # Styles spécifiques au friends
│   └── messagerie.css        # Styles spécifiques a la messagerie
├── js/
│   ├── app.js                # Script principal de gestion des interactions générales
│   ├── messagerie.js         # Script spécifique à la page de messagerie
│   └── friends.js            # Script pour gérer la liste d'amis
├── json/
│   └── messages.js           # JSON simulant des conversations
└── img/
    ├── david.jpg             # Photos de feed
```

## Instructions d'Installation

1. **Cloner le Dépôt** :
   ```bash
   git clone https://github.com/username/mini-reseau-social.git 
   ```
2. **Naviguer dans le Répertoire du Projet** :
   ```bash
   cd mini-reseau-social
   ```
3. **Ouvrir `index.html` dans votre Navigateur** :
   - Double-cliquez sur `index.html` ou ouvrez-le dans votre navigateur préféré.

> **Remarque :** Cette application est une application locale sans connexion à une base de données ni serveur. Elle fonctionne directement depuis le navigateur.

## Utilisation de l'Application

- **Navigation** : Utilisez le menu de navigation en haut de la page pour accéder aux différentes sections : **Feed**, **Messagerie**, et **Liste d'Amis**.
- **Feed** :
  - Les utilisateurs peuvent consulter les posts, réagir avec des likes, et ajouter des commentaires.
- **Messagerie** :
  - Accédez aux conversations existantes ou créez-en de nouvelles avec des amis depuis la **Liste d'Amis**.
  - Envoyez des messages en utilisant la zone de texte prévue à cet effet.
- **Liste d'Amis** :
  - Utilisez la barre de recherche pour trouver des amis.
  - Réorganisez la liste d'amis avec **drag and drop** pour personnaliser l'ordre.
  - Cliquez sur "Envoyer un message" pour ouvrir une nouvelle conversation avec cet ami.

## Améliorations Futures

Quelques idées d'améliorations possibles :
1. **Connexion Utilisateur** : Ajouter une page de connexion pour permettre aux utilisateurs de se connecter.
2. **Stockage Local** : Utiliser **localStorage** pour stocker les conversations, les posts, et les amis de manière persistante.
3. **Ajout de Nouveaux Amis** : Permettre d'ajouter de nouveaux amis directement via l'interface.
4. **Notifications** : Ajouter des notifications pour informer les utilisateurs des nouvelles réactions ou messages reçus.

