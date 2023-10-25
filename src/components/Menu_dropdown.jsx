import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

export default function Menu_dropdown() {

    const links = [
        { name: "Home", link: "/" },
        { name: "Movies", link: "/movies" },
        { name: "My List", link: "/mylist" },
      ];
  
  return <Container className="flex">
   <ul className="list2">
            {links.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
     </ul>
  </Container>
}

const Container = styled.div`
    poisition: relative;
    width: 200px;
    height: 150px;
    background: black;
    position: relative;
    opacity: 0.85;
    top:100px;
    left:-175px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index:500;
    
   .list2{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      li{
      display: block;
      padding: 12px;
      list-style-type: none;

      a {
        color: white;
        text-decoration: none;
      }

     }
    }
   
`;