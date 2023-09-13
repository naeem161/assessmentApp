import user1 from "../../../images/user1.png";
import user2 from "../../../images/user2.png";
import user3 from "../../../images/user3.png";
import user4 from "../../../images/user4.png";
// import user3 from "../../images/user3.png";


export const dummyComments = [
    {
      id: 1,
      name: "Maria",
      text: "I was very glad to have you after such a long time. Can you plan a meetup? Maybe this weekend?",
      likes: 1,
      image: user1,
    },
    {
      id: 2,
      name: "Alex Benjamin",
      text: "Home sweet home! I'm glad you are back. It's been two year and miss the football matches we have together. A lot has been changed since you left. Let's meet at the ground tomorrow evening?",
      likes: 0,
      image: user2,
      replies: [
        {
          id: 4,
          name: "John",
          text: "Sure, I would love to meet up!",
          likes: 0,
          image: user4,
        },
        {
          id: 5,
          name: "John",
          text: "Count me in too!",
          likes: 0,
          image: user4,
        },
      ],
    },
    {
      id: 3,
      name: "Tania",
      text: "Hey bud, welcome back to home. It's so long to see you back again. Would love to hear the travelling stories of yours. Your or my place?",
      likes: 1,
      image: user3,
    },
    // Add more comment objects as needed
  ];