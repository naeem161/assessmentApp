/* eslint-disable react/prop-types */
import { useState } from "react";
import Like from "../../../images/like.svg";
import UnLike from "../../../images/unlike.svg";
import ReplyForm from "./ReplyForm";

const Comment = ({
  id,
  name,
  text,
  likes,
  image,
  replies,
  onDeleteComment,
  isNew,
  onAddReply,
  onDeleteReply,
}) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleDeleteComment = () => {
    onDeleteComment(id);
  };

  const handleToggleReplyForm = () => {
    setShowReplyForm(!showReplyForm);
  };

  // Function to handle Like/UnLike for comments
  const handleLikeComment = () => {
    // Toggle the isLiked state
    setIsLiked(!isLiked);
    // Update the like count based on the current state
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
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
            <img src={likeCount != 0  ? Like : UnLike} onClick={handleLikeComment} />
            <span className="ml-2  text-grayText">{likeCount}</span>
            <span className="ml-4 font-extrabold text-grayText">·</span>
            {!isNewComment && (
              <button
                className="ml-5 text-blue"
                onClick={handleToggleReplyForm}
              >
                Reply
              </button>
            )}
            {isNewComment && (
              <button className="ml-5 text-red" onClick={handleDeleteComment}>
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Render replies */}
      <div className="ml-10">
        {replies?.map((reply) => (
          <div key={reply.id}>
            <CommentReply
              id={reply.id}
              name={reply.name}
              text={reply.text}
              likes={reply.likes}
              image={reply.image}
              isNew={reply.isNew}
              onDeleteReply={() => onDeleteReply(id, reply.id)} // Pass the onDeleteReply function
            />
          </div>
        ))}
      </div>
      {showReplyForm && (
        <ReplyForm onAddReply={(replyText) => onAddReply(id, replyText)} />
      )}
    </div>
  );
};

// Create a separate CommentReply component for replies
const CommentReply = ({
  id,
  name,
  text,
  likes,
  image,

  onDeleteReply,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="bg-white p-2 mb-3 ">
      <div className="flex items-center">
        <img className="mr-2 mb-12" src={image} alt="user1" />
        <div>
          <h3 className="text-black flex-grow mt-2 ">{name}</h3>
          <p className="text-grayText">{text}</p>
          <div className="flex mt-3 mb-2">
            <img
              src={isLiked == 0 ? UnLike : Like}
              onClick={handleLikeToggle}
            />
            <span className="ml-2  text-grayText">{likeCount}</span>
            <span className="ml-4 font-extrabold text-grayText">·</span>
            <button className="ml-5 text-red" onClick={onDeleteReply}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
