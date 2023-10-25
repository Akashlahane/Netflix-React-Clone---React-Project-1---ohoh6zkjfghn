import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MovieProvider } from './Providers/MovieProvider';
import { UserProvider } from './Providers/UserProvider';
import { MyMovieProvider } from './Providers/Myownlist';
import { MyMovieSearchProvider } from './Providers/Search_movie';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyMovieProvider>
    <UserProvider>
    <MovieProvider>
      <MyMovieSearchProvider>
      <App />
      </MyMovieSearchProvider>
    </MovieProvider>
    </UserProvider>
    </MyMovieProvider>
  </React.StrictMode>
);

