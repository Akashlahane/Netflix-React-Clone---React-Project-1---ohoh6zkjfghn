import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MovieProvider } from './Providers/MovieProvider';
import { UserProvider } from './Providers/UserAuthentication.js';
import {UserLikedMovieProvider } from './Providers/UserLikedList';
import { UserProfileProvider } from './Providers/UserProfile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <UserProvider>
      <UserProfileProvider>
        <MovieProvider>
          <UserLikedMovieProvider>
            
            <App/>

          </UserLikedMovieProvider>    
        </MovieProvider>
      </UserProfileProvider>
    </UserProvider>
  
  </React.StrictMode>
);

