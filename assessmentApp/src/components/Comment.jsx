import {useState} from "react";
import Like from "../../../images/like.svg";
import UnLike from "../../../images/unlike.svg";
import ReplyForm from "./ReplyForm";

// eslint-disable-next-line react/prop-types
const Comment = ({ id,name, text, likes, image, replies, onDeleteComment, isNew, onAddReply, onDeleteReply }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  const handleDeleteComment = () => {
    onDeleteComment(id);
  };

  const handleToggleReplyForm = () => {
    setShowReplyForm(!showReplyForm);
  };

  // Check if the comment is new
  const isNewComment = isNew;


  return (
    <div className="bg-white p-2 mb-3 ">
      <div className="flex items-center">
        <img className="mr-2 mb-12" src={image} alt="user1" />

        <div>
          <h3 className="text-black flex-grow mt-2 ">{name}</h3>
          <p className="text-grayText">{text}</p>

          <div className="flex mt-3 mb-2">
            <img src={likes > 0 ? Like : UnLike} />
            <span className="ml-2  text-grayText">{likes}</span>
            <span className="ml-4 font-extrabold text-grayText">·</span>
            <button className="ml-5 text-blue" onClick={handleToggleReplyForm}>Reply</button>
            {/* showing the delete button for newly created comment only!  */}
            {isNewComment && <button className="ml-5 text-red" onClick={handleDeleteComment}>Delete</button>}
            {/* { <button className="ml-5 text-red" onClick={onDeleteReply}>Delete</button>} */}
          </div>
        </div>
      </div>
      {/* Render replies */}
      <div className="ml-10">
        {/* eslint-disable-next-line react/prop-types */}
        {  replies?.map((reply) => (
          <div   key={reply.id} >
          <Comment
          
            name={reply.name}
            text={reply.text}
            likes={reply.likes}
            image={reply.image}
            isNew={reply.isNew}
            id = {reply.id}
          />
             <button className="ml-5 text-red" onClick={() => onDeleteReply(id, reply.id)}>
              abc
            </button>
           </div>
        ))}
      </div>
      
      {showReplyForm && (
        <ReplyForm onAddReply={(replyText) => onAddReply(id, replyText)} />
        
      )}
    </div>
  );
};

export default Comment;
