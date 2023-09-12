import user1 from "../../../images/user1.png";
import Like from "../../../images/like.svg";

const Comment = () => {
  return (
    <div className="bg-white p-2 mb-3 ">
      <div className="flex items-center">
        <img className="mr-2 mb-12" src={user1} alt="user1" />

        <div>
          <h3 className="text-black flex-grow mt-2 ">Maria</h3>
          <p className="text-grayText">
            I was very glad to have you after such a long time. Can you plan a
            meetup? Maybe this weekend?
          </p>

          <div className="flex mt-3 mb-2">
            <img src={Like} />
            <span className="ml-2  text-grayText">1</span>
            <b className="ml-4 font-extrabold text-grayText">·</b>
            <button className="ml-5 text-blue">Reply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
