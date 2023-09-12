import { useState } from "react";
import Send from "../../../images/Send.svg";
import { dummyComments } from '../DummyComment';
import user1 from "../../../images/user1.png";

// eslint-disable-next-line react/prop-types
const AddCommentForm = ({ parentId, onAddComment }) => {
  const [commentText, setCommentText] = useState("");

  const handleCommentSubmit = () => {
    // Don't add empty comments
    if (commentText.trim() === "") {
      return; 
    }

    const newComment = {
      id : dummyComments.length + 1,
      image : user1,
      likes : 0,
      name : "Guest",
      text: commentText,
      parentId: parentId,
    };

    onAddComment(newComment);
    setCommentText("");
  };

  return (
    <div className="bg-white p-4 mb-3  flex">
      <div className="relative flex-grow">
        <input
          type="text"
          className="text-grayText w-full p-3 bg-inputBackground outline-none"
          placeholder="Write your comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button
          onClick={handleCommentSubmit}
          className="absolute inset-y-0 right-0 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-r-lg flex items-center justify-center"
        >
          {/* send svg img  */}
         <img src={Send}/>
        </button>
      </div>
    </div>
  );
};

export default AddCommentForm;
