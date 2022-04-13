import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import MediaCard from '../components/blogElement';
import Portfolio from './portfolio';
import UsedMBGuide from '../blog/used_macbook_guide';

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Link to={'/blog/used_macbook_guide'}>
            <MediaCard imageUrl='https://cdn.osxdaily.com/wp-content/uploads/2010/10/mac-stack.jpg'
                       title='Used MacBook purchase guide'/>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Link to={'PATH TO FILE'}>
            <MediaCard imageUrl='LINK TO IMAGE'
                       title='Lizards'
                       details='Lizards are a widespread group of squamate reptiles, with over 6,000
                       species, ranging across all continents except Antarctica'/>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Blog;