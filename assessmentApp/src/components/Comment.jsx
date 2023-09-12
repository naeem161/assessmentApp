import Like from "../../../images/like.svg";
import UnLike from "../../../images/unlike.svg";

// eslint-disable-next-line react/prop-types
const Comment = ({ name, text, likes, image, replies }) => {
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
            <button className="ml-5 text-blue">Reply</button>
          </div>
        </div>
      </div>
      {/* Render replies */}
      <div className="ml-10">
        {/* eslint-disable-next-line react/prop-types */}
        {replies?.map((reply) => (
          <Comment
            key={reply.id}
            name={reply.name}
            text={reply.text}
            likes={reply.likes}
            image={reply.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Comment;
