import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function HomePage() {
  const navigate = useNavigate();
  const adminSignUp = (e) => {
    e.preventDefault();
    navigate("/adminSignUp");
  };
  const userSignUp = (e) => {
    e.preventDefault();
    navigate("/userSignUp");
  };
  const adminLogin = (e) => {
    e.preventDefault();
    navigate("/adminLogin");
  };
  const userLogin = (e) => {
    e.preventDefault();
    navigate("/userLogin");
  };
  return (
    <>
      <div className="container">
        <div>
          <div className="popups">
            <div>
              <Popup
                trigger={
                  <button type="button" className="mcqbutton">
                    Sign Up
                  </button>
                }>
                <div className="popupcontainer">
                  <button
                    className="signupbutton"
                    onClick={(e) => userSignUp(e)}>
                    User
                  </button>
                  <button
                    className="signupbutton"
                    onClick={(e) => adminSignUp(e)}>
                    Admin
                  </button>
                </div>
              </Popup>
            </div>
            <div>
              <Popup
                trigger={
                  <button type="button" className="mcqbutton">
                    Login
                  </button>
                }>
                <div className="popupcontainer">
                  <button
                    className="signupbutton"
                    onClick={(e) => userLogin(e)}>
                    User
                  </button>
                  <button
                    className="signupbutton"
                    onClick={(e) => adminLogin(e)}>
                    Admin
                  </button>
                </div>
              </Popup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePage;
