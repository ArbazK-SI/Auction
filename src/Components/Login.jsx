import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [User_Name, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = () => {
    axios
      .post("https://auctions.sportz.io/api/Auction/Login", {
        User_Name: User_Name,
        Password: Password,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        setError("Invalid username or password. Please try again.");
      });
  };

  return (
    <main className="__site-main __login">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="si-loginPage">
              <div className="si-loginCOver">
                <div className="si-LeftPart">
                  <div className="si-toolImg">
                    <img
                      src="/assets/images/svg/auction.svg"
                      alt="Auction Tool"
                    />
                  </div>
                </div>
                <div className="si-RightPart">
                  <div className="si-Loginform">
                    <div className="si-Title">
                      <div className="si-top">Welcome to</div>
                      <div className="si-bottom"> Auction Dashboard</div>
                    </div>
                    <form>
                      <div className="si-userName">
                        <label className="si-label">Username</label>
                        <input
                          type="text"
                          placeholder="Enter User Name"
                          value={User_Name}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      
                      </div>
                      <div className="si-password">
                        <label className="si-label">Password</label>
                        <input
                          placeholder="Enter Password"
                          value={Password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                       
                      </div>
                      <div className="si-signIn" onClick={handleLogin}>
                        Sign in
                      </div>
                    </form>
                    {error && <div className="error-message">{error}</div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default LoginPage;
