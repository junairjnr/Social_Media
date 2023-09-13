import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <div className="flex justify-center items-center">
              <div className=" w-[100%] h-[50px] flex justify-center items-center bg-[#1775ee] rounded-[10px]">
                <Link to={'/profile'}>
                  <button className="w-full text-[20px] font-bold border-none text-white cursor-pointer">
                    Sign up
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className=" w-[60%] h-[50px] flex justify-center items-center bg-[#42b72a] rounded-[10px]">
                <Link to={'/login'}>
                  <button className="w-full text-[20px] font-bold border-none text-white cursor-pointer">
                    Create a New Account
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}