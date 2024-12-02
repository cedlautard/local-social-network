const posts = [
    {
      id: 1,
      user: "Alice",
      content: "Voici une photo de mon chat !",
      imageUrl: "chat.jpg",
      reactions: { like: 0, love: 0, dislike: 0 },
      comments: [
        { user: "Bob", content: "Adorable !" },
        { user: "Charlie", content: "Trop mignon !" }
      ]
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
  