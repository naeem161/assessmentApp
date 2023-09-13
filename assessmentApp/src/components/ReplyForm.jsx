import { useState } from "react";
import Send from "../../../images/Send.svg";

// eslint-disable-next-line react/prop-types
const ReplyForm = ({ onAddReply }) => {
  const [replyText, setReplyText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddReply(replyText);
    setReplyText("");
  };

  return (
    <div className="bg-white p-4 mb-3  flex">
      <div className="relative flex-grow">
        <input
          type="text"
          className="text-grayText w-full p-3 bg-inputBackground outline-none"
          placeholder="Write your comment"
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="absolute inset-y-0 right-0 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-r-lg flex items-center justify-center"
        >
          {/* send svg img  */}
          <img src={Send} />
        </button>
      </div>
    </div>
  );
};

export default ReplyForm;
