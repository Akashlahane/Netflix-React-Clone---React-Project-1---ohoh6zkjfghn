import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { UserProfileContext } from "../Providers/UserProfile";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user5.png"
import { useContext } from "react";

export default function SigoutPopup (){
    const {user, setActivePic}=useContext( UserProfileContext);
    const navigate=useNavigate();

    return (
        <Container2 className="signoutcard">
            <div className="cardPart1">
                { user.map((elem,userNumber) => {
                    var pic;
                    if(userNumber===0) pic=user1;
                    if(userNumber===1) pic=user2;
                    if(userNumber===2) pic=user3;
                    if(userNumber===4) pic=user4;
                    return <div className="profile1" id={userNumber} onClick={(event)=>{setActivePic(event.currentTarget.id);}}> 
                        <img src={pic} alt="user"/>{elem}
                    </div> } )
                }
                <div className="pencil"  onClick={()=>{navigate("/addprofile")}}><FontAwesomeIcon icon={faPencil}  className="pencil_icon"/>Manage Profile</div>
            </div>
            <div class="line"></div>
            <div class="cardPart2" onClick={() => {navigate("/login");  window.localStorage.removeItem("authToken");}}>
              Sign out of Netflix
            </div>
        </Container2>
    )
}

const Container2= styled.div `
position: absolute;
right:50px;
top: 65px;
z-index:10000;
background-color: black;
width: 200px;
height: auto;
color: white;

div{
    margint-top:14px;
    margin-bottom:10px;
}

.cardPart1{
    padding-top:15px;
    cursor: pointer;
    .profile1{
        img{
            padding-left:4px;
            padding-right:6px;
            width:40px;
            height:32px;
            
        }
        display:flex;
        align-items: center;
    }
        .pencil{
            .pencil_icon{
                font-size:16px;
                padding-left:8px;
                padding-right:10px;
            }
           
        }
    
}

.line{
    width:100%;
    height:1px;
    background: grey;
    margin-bottom:5px;
}

div.cardPart2{
    position:relative;
    top:-2px;
    text-align:center;
    cursor: pointer;
}
`

