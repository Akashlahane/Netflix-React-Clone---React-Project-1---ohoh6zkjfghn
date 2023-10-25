import React, { useState } from 'react'
import styled from "styled-components";
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { useNavigate } from "react-router-dom";
import { useUser } from "../Providers/UserProvider";


export default function Signup() {
 

  const { signUpContext } = useUser();

  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: "as",
    email: "",
    password: "",
    appType: "ott",
  });

  function handleChange(event) {
    const element = event.target;
    const { name, value } = element;

    setUserInfo((oldInfo) => {
      return {
        ...oldInfo,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!userInfo.email || !userInfo.password) {
      alert("add the password and the amail");
      return;
    }

    signIn(userInfo);
  }

  async function signIn(userInfo) {
    try {
      var myHeaders = new Headers();
      myHeaders.append("projectId", "f104bi07c490");
      myHeaders.append("Content-Type", "application/json");

      const url = "https://academics.newtonschool.co/api/v1/user/signup";
      var payload = {
        ...userInfo,
      };

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(payload),
        redirect: "follow",
      };

      const response = await fetch(url, requestOptions);

      if (response.ok) {
        const data = await response.json();

        const { token, data: loginData } = data;
        const { name: userName } = loginData;
        localStorage.setItem("authToken", token);
        localStorage.setItem("userInfo", userName);
        signUpContext(token, userName);
        navigate("/Netflix");
      } else {
        alert("Sign in to create new account");
        navigate("/signup");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const[showPassword, setShowPassword] = useState(false)
 
  return <Container showPassword={showPassword}>
    <BackgroundImage/>
    <div className="content">
    <Header login/>
  <div className="body flex column a-center j-center">
    <div className="text flex column">
    <h1>Unlimited movies, TV shows and more</h1>
    <h4>Watch anywhere. Cancel anytime.</h4>
    <h6>Ready to watch? Enter your email to create or restart membership</h6>
    </div>
    <div className="form">
      <input type="email" name="email" placeholder='Email Address'  onChange={(event) => handleChange(event)}/>
      {showPassword && (
      <input type="password" placeholder='Password' name="password"  onChange={(event) => handleChange(event)}/>
)}
      {
        !showPassword && <button onClick={() => setShowPassword(true)}>Get Started</button>
      }
      
    </div>
      <button onClick={handleSubmit}>Sign up</button>
  </div>
  </div>
  </Container>
  
}

const Container = styled.div`
    position: relative;
    .content {
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      height: 100vh;
      width:100vw;
      display: grid;
      grid-template-rows: 15vh 85vh;
      .body {
        gap: 1rem;
        .text {
          gap: 1rem;
          text-align: center;
          font-size: 2rem;
          h1 {
            padding: 0 25rem;
          }
        }
        .form {
          display: grid;
          grid-template-columns: ${({ showPassword }) => showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
          width: 60%;
          input {
            color: black;
            border: none;
            padding: 1.5rem;
            font-size: 1.2rem;
            border: 1px solid black;
            &:focus {
              outline: none;
            }
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          border-radius: 0.2rem;
          font-weight: bolder;
          font-size: 1.05rem;
        }
    }
`;