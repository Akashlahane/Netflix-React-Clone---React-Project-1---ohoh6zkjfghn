import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user5.png";
import { useNavigate } from "react-router-dom";
import { UserProfileContext } from "../Providers/UserProfile";

export default function AddProfile() {
  const { user, setMyuser, setActivePic } = useContext(UserProfileContext);
  const navigate = useNavigate();
  const [showCard, setShowCard] = useState(false);
  const [newUserName, setNewUserName] = useState("");

  const userIcons = () => {
    return user.map((curElem, index) => {
      let userNumber;
      switch (index % 4) {
        case 0:
          userNumber = user1;
          break;
        case 1:
          userNumber = user2;
          break;
        case 2:
          userNumber = user3;
          break;
        case 3:
          userNumber = user4;
          break;
        default:
          break;
      }
      return (
        <button
          className="btn"
          id={index}
          key={index}
          onClick={(event) => {
            setActivePic(event.currentTarget.id);
            navigate("/");
          }}
        >
          <img src={userNumber} alt="user_icon" />
          <span>{curElem}</span>
        </button>
      );
    });
  };

  const handleAddProfile = () => {
    if (newUserName && !user.includes(newUserName)) {
      setMyuser([...user, newUserName]);
      setShowCard(false);
      setNewUserName("");
    } else {
      alert("Username already exists or is invalid");
    }
  };

  return (
    <Wrapper blur={showCard}>
      <div className="whoIsWatching">
        <div className="logo-section">
          {/* <a href="#"><img src={logo} alt="logo"/></a> */}
        </div>
        <div className="main-div">
          <h1>Who's watching?</h1>
          <h1>Select Profile</h1>
          <div className="memberDiv">
            {userIcons()}
            <button className="addIcon" onClick={() => setShowCard(true)}>
              <FontAwesomeIcon icon={faCirclePlus} className="plus" />
              <div className="ap">Add Profile</div>
            </button>
          </div>
          
        </div>
      </div>
      {showCard && (
        <div className="card">
          <h2>Add New Profile</h2>
          <input
            type="text"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            placeholder="Enter your name"
          />
          <button onClick={handleAddProfile}>Add</button>
          <button onClick={() => setShowCard(false)}>Cancel</button>
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
  }

  .whoIsWatching {
    width: 100vw;
    min-height: 100vh;
    background-color: #141414;
    filter: ${(props) => (props.blur ? "blur(5px)" : "none")};
  }

  .logo-section {
    width: 95vw;
    margin: auto;
    height: 70px;
    background-color: rgb(20, 20, 20);
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .logo-section a img {
    width: 100px;
    height: 40px;
    cursor: pointer;
  }

  .main-div {
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
  }

  .main-div h1 {
    font-size: 6vw;
    letter-spacing: 3px;
    font-weight: 600;
  }

  .memberDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .memberDiv .btn,
  .addIcon {
    height: 10vw;
    min-height: 84px;
    max-height: 200px;
    width: 10vw;
    min-width: 84px;
    max-width: 200px;
    border-radius: 4px;
    border: none;
    outline: none;
    margin-top: 40px;
    margin-right: 35px;
    position: relative;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .memberDiv .btn:hover {
    box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.9);
  }

  .memberDiv .btn span,
  .addIcon span {
    width: inherit;
    position: absolute;
    bottom: -35px;
    left: 0;
    text-transform: capitalize;
    color: rgb(153, 153, 153);
    font-size: 20px;
  }

  .plus {
    font-size: 7vw;
    color: grey;
    opacity: 0.8;
  }

  .addIcon {
    background-color: transparent;
  }

  .addIcon:hover {
    background-color: #fff;
  }

  .addicon:hover > .fa-plus-circle {
    opacity: 1;
  }

  .manageProfile {
    border: 1px solid grey;
    color: grey;
    text-transform: uppercase;
    padding: 8px 26px;
    letter-spacing: 5px;
    font-size: 3vw;
    margin-top: 120px;
    background-color: transparent;
    cursor: pointer;
  }

  .manageProfile:hover {
    border: 1px solid #fff;
    color: #fff;
  }

  .btn img {
    height: 10vw;
    min-height: 84px;
    max-height: 200px;
    width: 10vw;
    min-width: 84px;
    max-width: 200px;
  }

  .btn span {
    font-size: 1.5vw;
    text-align: center;
  }

  .ap {
    display: block;
    font-size: 20px;
    color: grey;
    margin-top: 8px;
  }

  .card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .card h2 {
    margin-bottom: 20px;
  }

  .card input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .card button {
    margin: 5px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .card button:first-of-type {
    background-color: #007bff;
    color: white;
  }

  .card button:last-of-type {
    background-color: #dc3545;
    color: white;
  }
`;
