
import './App.css'
import Comment from '../src/components/Comment'
import user1 from "../../images/user1.png";
import user2 from "../../images/user2.png";
import user3 from "../../images/user3.png";


function App() {

  
const commentsData = [
  {
    id: 1,
    name: 'Maria',
    text: 'I was very glad to have you after such a long time. Can you plan a meetup? Maybe this weekend?',
    likes: 1,
    image: user1,
  },
  {
    id: 2,
    name: 'Alex Benjamin',
    text: "Home sweet home! I'm glad you are back. It's been two year and miss the football matches we have together. A lot has been changed since you left. Let's meet at the ground tomorrow evening?",
    likes: 0,
    image: user2,
  },
  {
    id: 3,
    name: 'Tania',
    text: "Hey bud, welcome back to home. It's so long to see you back again. Would love to hear the travelling stories of yours. Your or my place?",
    likes: 1,
    image: user3,
  },
  // Add more comment objects as needed
];

 

  return (
    <div className='bg-bodyBackground h-screen  flex justify-center  ' >
     <div className="container sm:w-3/5 md:w-3/5 lg:w-3/5 h-auto mt-6 " style={{border:'2px solid red'}} >
     {/* <div className="container h-2/4 w-2/4 " style={{border:'2px solid red'}} > */}
     {commentsData.map((comment) => (
          <Comment
            key={comment.id}
            name={comment.name}
            text={comment.text}
            likes={comment.likes}
            image={comment.image}
          />
        ))}

</div>

    </div>
  )
}

export default App
