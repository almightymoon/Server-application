import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const cardsData = [
  {
    title: "Getting Started",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur adipiscing elit. Pellentesque venenatis magna sem, sit amet interdum magna aliquam euismod.",
    image: "https://source.unsplash.com/random/200x200?abstract", // Replace with your image
    learnMoreLink: "/getting-started",
  },
  {
    title: "Account Setting",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur adipiscing elit. Pellentesque venenatis magna sem, sit amet interdum magna aliquam euismod.",
    image: "https://source.unsplash.com/random/200x200?tech", // Replace with your image
    learnMoreLink: "/account-settings",
  },
  {
    title: "Troubleshooting",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur adipiscing elit. Pellentesque venenatis magna sem, sit amet interdum magna aliquam euismod.",
    image: "https://source.unsplash.com/random/200x200?tech", // Replace with your image
    learnMoreLink: "/account-settings",
  },
  {
    title: "Privacy Tips",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur adipiscing elit. Pellentesque venenatis magna sem, sit amet interdum magna aliquam euismod.",
    image: "https://source.unsplash.com/random/200x200?tech", // Replace with your image
    learnMoreLink: "/account-settings",
  },
  {
    title: "Profile customization",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur adipiscing elit. Pellentesque venenatis magna sem, sit amet interdum magna aliquam euismod.",
    image: "https://source.unsplash.com/random/200x200?tech", // Replace with your image
    learnMoreLink: "/account-settings",
  },
  {
    title: "Connecting with others",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur adipiscing elit. Pellentesque venenatis magna sem, sit amet interdum magna aliquam euismod.",
    image: "https://source.unsplash.com/random/200x200?tech", // Replace with your image
    learnMoreLink: "/account-settings",
  },
  // ... Add more card objects as needed
];

function PopularTopics() {
  return (
    <Grid container spacing={2} sx={{ background: "#fff" }}>
      {cardsData.map((card) => (
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          key={card.title}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "367px",
              height: "346px",
              marginTop: "10px",
              gap: "0px",
              borderRadius: "20px 20px 20px 20px",
              opacity: "0px",
              background: " #fff",
              "&:hover": {
                background:
                  " linear-gradient(180deg, #251E78 4.26%, rgba(59, 49, 222, 0.54) 100%)", // This will change the background to white on hover
              },
            }}>
            <CardMedia
              component='img'
              image={card.image}
              alt={card.title}
              style={{
                height: 50,
                width: 50,
                marginTop: 70,
                borderRadius: "30px ",
              }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant='h5' component='div'>
                {card.title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {card.description}
              </Typography>
            </CardContent>
            <Button
              variant='contained'
              href={card.learnMoreLink}
              sx={{ mb: 1 }}>
              Learn More
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default PopularTopics;
