import React from 'react';
import { Card, CardContent, Container, Typography, CardMedia } from '@mui/material';

const Dashboard = () => {
  return (
    <Container maxWidth="xl">
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            WELCOME TO GROW-IT-GREEN FARMING ASSISTANT
          </Typography>
          <CardMedia
            component="img"
            height="100%"
            image="https://www.hipi.info/wp-content/uploads/2014/04/2014-twitter-header-dimensions-16-1024x341.jpg"
            alt="green iguana"
          />
        </CardContent>
      </Card>
    </Container>
  );
};

export default Dashboard;
