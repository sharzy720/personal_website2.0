import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import ResponsiveAppBar from "./components/menuBar";
import Blog from './pages/blog';
import Home from './pages/home';

import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <App pageName={'Strategy Dungeon'}/>
  </React.StrictMode>

  // <BrowserRouter>
  //   <App pageName={'Strategy Dungeon'}/>
  // </BrowserRouter>

  // <Container maxWidth="lg" disableGutters='true' style={{ border:  '2px solid black', backgroundColor: "mediumpurple"}}>
  // <ResponsiveAppBar title={'test'} />
  // <Typography component="div" 
  //   style={{ 
  //     height: '100vh',
  //     paddingLeft: '10px',
  //     paddingRight: '10px',
  // }}>
  //   <h1 align={'center'}>Welcome to my website</h1>
  //   <p>This is a block of text</p>

  // </Typography>
  // </Container>

  // <BrowserRouter>
  // <Switch>
  //   <Route exact path="/" component={App} />
  //   <Route path="/blog" component={Blog} />
  // </Switch>
  // </BrowserRouter>
  ,
  document.getElementById('index_root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
