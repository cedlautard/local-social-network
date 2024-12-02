const posts = [
    {
      id: 1,
      user: "Alice",
      content: "Voici une photo de mon chat !",
      imageUrl: "assets/img/chat.jpg",
      reactions: { like: 0, love: 0, dislike: 0 },
      comments: [
        { user: "Bob", content: "Adorable !" },
        { user: "Charlie", content: "Trop mignon !" }
      ]
    },

    {
      id: 2,
      user: "Bob",
      content: "C'est un beau jour pour une promenade !",
      imageUrl: "assets/img/randonnee.jpg",
      reactions: { like: 2, love: 1, dislike: 0 },
      comments: []
    }
];

const conversations = [
    {
        user: "David",
        messages: [
        { sender: "me", content: "Salut, comment ça va ?", timestamp: "10:30" },
        { sender: "David", content: "Ça va bien, merci et toi ?", timestamp: "10:32" }
        ]
    }
];
  