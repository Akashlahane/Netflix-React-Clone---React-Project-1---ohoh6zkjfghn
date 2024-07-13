import { useState } from "react";
import { useUser } from "../Providers/UserAuthentication.js";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing icons
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const { signInContext } = useUser();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    appType: "ott",
  });

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const notify = (str) => toast.error(str);

  function handleChange(event) {
    const element = event.target;
    const { name, value } = element;
    setUserInfo((oldInfo) => {
      return {...oldInfo, [name]: value,};
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!userInfo.email || !userInfo.password) {
      notify("Enter Email and Password");
      return;
    }
    signIn(userInfo);
  }

  async function signIn(userInfo) {
    try {
      var myHeaders = new Headers();
      myHeaders.append("projectId", "f104bi07c490");
      myHeaders.append("Content-Type", "application/json");
      const url = "https://academics.newtonschool.co/api/v1/user/login";
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
        signInContext(token, userName);
        navigate("/");
      } 
      else {
        notify("Sign up to create new account");
        setTimeout(()=>navigate("/signup"),5000);
      }
    }
    catch (error){
      console.log(error);
    }
  }
  
  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header signup/>
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title"><h3>Login to Netflix</h3></div>
            <div className="container flex column">
              <input type="text" name="email" id="username" onChange={(event) => handleChange(event)} placeholder="Email"/>
              
              <div className="password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  onChange={(event) => handleChange(event)}
                  placeholder="Password"
                />
                <span onClick={() => setShowPassword(!showPassword)}>
                  {!showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <button onClick={handleSubmit}>Log in</button>
           </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </Container>
    
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 15rem;
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

         .password-container {
          display: flex;
          align-items: center;
          width: 100%; // Ensure container takes full width
          position: relative;
          input {
            flex: 1;
            padding-right: 2rem; // Make room for the icon
          }
          span {
            position: absolute;
            right: 0.5rem; // Position the icon inside the input
            cursor: pointer;
            color: #888; // Icon color
          }
        }
      }
    }
  }
`;

export default Login;