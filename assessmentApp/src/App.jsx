import React from "react";
import "./App.css";
import Comment from "../src/components/Comment";
import { dummyComments } from "./DummyComment";
import AddCommentForm from "./components/AddCommentForm";
import user4 from "../../images/user4.png";

function App() {
  const [commentsData, setCommentsData] = React.useState(dummyComments);

  const handleAddComment = (newComment) => {
    // Create a copy of the existing comments data and add the new comment
    const updatedCommentsData = [...commentsData, newComment];

    // Update the state with the new comments data
    setCommentsData(updatedCommentsData);
  };

  // Function to delete a comment by ID
  const deleteComment = (commentId) => {
    const updatedComments = commentsData.filter(
      (comment) => comment.id !== commentId
    );
    setCommentsData(updatedComments);
  };

  // Function to add a reply to a comment
  const addReply = (commentId, replyText) => {
    const updatedComments = commentsData.map((comment) => {
      if (comment.id === commentId) {
        const newReply = {
          id: Date.now(),
          text: replyText,
          likes: 0,
          image: user4,
        };
        return {
          ...comment,
          replies: [...comment.replies, newReply],
        };
      }
      return comment;
    });

    setCommentsData(updatedComments);
  };

  // Function to delete a reply by comment and reply ID
  const deleteReply = (commentId, replyId) => {
    const updatedComments = commentsData.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: comment.replies.filter((reply) => reply.id !== replyId),
        };
      }
      return comment;
    });

    setCommentsData(updatedComments);
  };

  return (
    // h-screen
    <div className="bg-bodyBackground   flex justify-center  ">
      <div
        className="container sm:w-3/5 md:w-3/5 lg:w-3/5 h-auto mt-6 "
        style={{ border: "2px solid red" }}
      >
        {/* <div className="container h-2/4 w-2/4 " style={{border:'2px solid red'}} > */}
        {commentsData.map((comment) => (
          <Comment
            key={comment.id}
            name={comment.name}
            text={comment.text}
            likes={comment.likes}
            image={comment.image}
            replies={comment.replies}
            id={comment.id}
            isNew={comment.isNew}
            onAddComment={handleAddComment}
            onDeleteComment={deleteComment}
            onAddReply={addReply}
            onDeleteReply={deleteReply}
          />
        ))}
        <AddCommentForm onAddComment={handleAddComment} />
      </div>
    </div>
  );
}

export default App;
