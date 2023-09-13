import "./topbar.css";
import { BsFillPersonFill, BsFillChatLeftDotsFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineNotifications } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo hover:text-gray-300">Social Media</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <AiOutlineSearch className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink font-semibold hover:text-gray-300">Homepage</span>
          <span className="topbarLink font-semibold hover:text-gray-300">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <BsFillPersonFill />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <BsFillChatLeftDotsFill />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <MdOutlineNotifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        
        <Link  to={'/login'}>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </Link>
      </div>
    </div>
  );
}
