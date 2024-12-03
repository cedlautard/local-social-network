const posts = [
    {
      id: 0,
      user: "Alice",
      content: "Voici une photo de mon chat !",
      imageUrl: "assets/img/chat.jpg",
      reactions: { like: 10, love: 5, dislike: 0 },
      comments: [
        { user: "Bob", content: "Adorable !" },
        { user: "Charlie", content: "Trop mignon !" }
      ]
    },
    {
      id: 1,
      user: "Bob",
      content: "C'est un beau jour pour une promenade !",
      imageUrl: "assets/img/randonnee.jpg",
      reactions: { like: 2, love: 1, dislike: 1 },
      comments: []
    },
    {
      id: 2,
      user: "Albert",
      content: "Regarder moi ce spectacle !",
      imageUrl: "assets/img/auroreboreale.jpg",
      reactions: { like: 6, love: 5, dislike: 0 },
      comments: []
    }
];

const conversations = [
  {
      user: "David",
      userProfilePic: "assets/img/david.jpg",
      messages: [
          { sender: "me", content: "Salut, comment ça va ?", timestamp: "10:30" },
          { sender: "David", content: "Ça va bien, merci et toi ?", timestamp: "10:32" }
      ]
  },
  {
      user: "Marie",
      userProfilePic: "assets/img/marie.jpg",
      messages: [
          { sender: "me", content: "Coucou, tu es dispo ce soir ?", timestamp: "18:00" },
          { sender: "Marie", content: "Oui, on peut se voir à 20h ?", timestamp: "18:05" }
      ]
  },
  {
    user: "Jean",
    userProfilePic: "assets/img/jean.jpg",
    messages: [
        { sender: "me", content: "Hello, ça te dit un bowling ce soir ?", timestamp: "18:00" },
        { sender: "Jean", content: "je sais pas je suis un peu fatiguée", timestamp: "18:05" }
    ]
}
];
  