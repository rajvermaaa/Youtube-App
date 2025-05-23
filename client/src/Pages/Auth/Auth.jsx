import React from "react";
import { GoogleLogout } from "react-google-login";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentUser } from "../../actions/currentUser";
import "./Auth.css";
function Auth({ User, setAuthBtn, setEditCreateChanelBtn }) {

  const dispatch = useDispatch();
  const onLogOutSuccess = () => {
    dispatch(setCurrentUser(null));
    alert("Log Out SuccessFully");
  };
  console.log(User)
  
  return (
    <div className="Auth_container" onClick={() => setAuthBtn(false)}>
      <div className="Auth_container2">
        <p className="User_Details">
          <div className="Chanel_logo_App">
            <p className="fstChar_logo_App">
              {User?.result.name ? (
                <>{User?.result.name.charAt(0).toUpperCase()} </>
              ) : (
                <>{User?.result.email.charAt(0).toUpperCase()} </>
              )}
            </p>
          </div>
          <div className="email_Auth">{User?.result.email}</div>
        </p>
        <div className="btns_Auth">
          {User?.result.name ? (
            <>
              {
                <Link to={`/chanel/${User?.result._id}`} className="btn_Auth">
                  Your Chanel
                </Link>
              }
            </>
          ) : (
            <>
              <input
                type="submit"
                className="btn_Auth"
                value="Create Your Chanel"
                onClick={() => setEditCreateChanelBtn(true)}
              />
            </>
          )}
          <p className="btn_Auth">Points: {User?.result?.viewedVideos?.length * 5 || 0}</p>
          <div>
            <GoogleLogout
              clientId={
                "802099542012-e1tpuu9ch80srso8nnq5fb7d0cm34lbv.apps.googleusercontent.com"
              }
              onLogoutSuccess={onLogOutSuccess}
              render={(renderProps) => (
                <div onClick={renderProps.onClick} className="btn_Auth">
                  <BiLogOut />
                  Log Out
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;



