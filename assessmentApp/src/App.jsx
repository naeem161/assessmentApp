import React from "react";
import "./App.css";
import Comment from "../src/components/Comment";
import { dummyComments } from "./DummyComment";
import AddCommentForm from "./components/AddCommentForm";

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
            replies={comment.replies || []}
            id={comment.id}
            isNew={comment.isNew}
            onAddComment={handleAddComment}
            onDeleteComment={deleteComment}
          />
        ))}
        <AddCommentForm onAddComment={handleAddComment} />
      </div>
    </div>
  );
}

export default App;
