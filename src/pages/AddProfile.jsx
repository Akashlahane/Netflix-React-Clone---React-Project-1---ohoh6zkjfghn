import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus} from "@fortawesome/free-solid-svg-icons";
//import logo from "../assets/logo.png"
import styled from "styled-components";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import { useNavigate } from "react-router-dom";
import { UserProfileContext } from "../Providers/UserProfile";
import { useContext } from "react";
import user4 from "../assets/user5.png"

export default function AddProfile (){
  const {user, setMyuser, setActivePic}=useContext( UserProfileContext);
  const navigate = useNavigate();
  var allUsers=[];

  const userIcons = () => {
    user.forEach((curElem,index) => {
      var userNumber;
      if(index>3){index=index-4;}
      if(index===0){userNumber=user1;}
      else if(index===1){userNumber=user2;}
      else if(index===2){userNumber=user3;}
      else{userNumber=user4;}
      allUsers.push( 
      <button class="btn" id={index} key={index} onClick={(event)=>{ setActivePic(event.currentTarget.id); navigate("/")}}>
        <img src={userNumber} alt="user_icon"/>
        <span>{curElem}</span>
      </button>
      );
    })
  };
    
  const addprof= () => {
    let userName = prompt('please enter your name');
    if(userName != null && !user.includes(userName)){
      setMyuser([...user,userName])
    }
    else{
      alert('username already exist');
    }
  }

  userIcons();

  return (
    <Wrapper>
      <div class="whoIsWatching">
        <div class="logo-section">
            {/* <a href="#"><img src={logo} alt="logo"/></a> */}
        </div>
        <div class="main-div">
            <h1>Who's watching?</h1>
            <div class="memberDiv">
                {allUsers}
                <button class="addIcon"><FontAwesomeIcon icon={faCirclePlus} class="plus" onClick={addprof}/> <div className="ap">Add Profile</div></button>
            </div>
            <button class="manageProfile">manage Profile</button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.div`
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
}

.logo-section {
  width: 95vw;
  margin: auto;
  height: 70px;
  background-color: rgb(20, 20, 20);
  /* background-color: red; */
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
  /* background-color: rosybrown; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
}

.main-div h1 {
  font-size: 6vw;
  letter-spacing: 3px;
  font-size: 600;
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
  /* background-color: red; */
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

.btn img{
    height: 10vw;
    min-height: 84px;
    max-height: 200px;
    width: 10vw;
    min-width: 84px;
    max-width: 200px;
}

.btn span{
    font-size: 1.5vw;
    text-align:center; 
}

.ap{
  display:block;
  font-size: 20px; 
  color:grey;
  margin-top:8px;
}
`