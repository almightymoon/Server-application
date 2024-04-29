import React from "react";
import { Avatar, Card, CardContent, Typography, Grid } from "@mui/material";

const UserBox = ({ user }) => {
  // Assuming you have user data available in a 'user' prop

  return (
    <Card sx={{ backgroundColor: "#f5f5f5" }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Avatar sx={{ width: 60, height: 60 }}>
              {/*{user.name?.charAt(0).toUpperCase()} */}I am Chart
            </Avatar>
          </Grid>
          <Grid item xs={8}>
            <Typography variant='h6' component='div'>
              {/*{user.name} */}
              My Name User
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {/*{user.email} */}
              My Name email
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UserBox;
