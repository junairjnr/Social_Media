import "./share.css";
import {
  MdOutlinePermMedia,
  MdLabel,
  MdRoom,
  MdOutlineEmojiEmotions,
} from "react-icons/md";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            placeholder="What's in your mind Safak?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <MdOutlinePermMedia className="shareIcon" fill="tomato" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <MdLabel className="shareIcon" fill="blue" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <MdRoom className="shareIcon" fill="green" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <MdOutlineEmojiEmotions className="shareIcon" fill="goldenrod" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
