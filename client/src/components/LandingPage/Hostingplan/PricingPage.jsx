import React, { useState } from "react";
import { Typography, Card, CardContent, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  pricingPage: {
    padding: "20px",
  },
  sectionTitle: {
    display: "flex",
    marginBottom: "20px",
    gap: "50px",
  },
  card: {
    maxWidth: 300,
    margin: "0 auto",
    marginBottom: "20px",
  },
  cardContent: {
    padding: "16px",
  },
  orderButton: {
    background:
      "linear-gradient(99deg, #251E78 0%, rgba(59, 49, 222, 0.68) 100%)",
    borderRadius: 15,
    color: "white",
    marginTop: "16px",
  },
});

const PricingPage = () => {
  const classes = useStyles();
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className={classes.pricingPage}>
      <Typography
        variant='h2'
        className={classes.sectionTitle}
        textAlign={"center"}
        justifyContent={"center"}
        mt={2}
        mb={2}>
        Pricing
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          textDecoration: "underline",
        }}>
        <div>
          <Typography variant='h4' onClick={() => handleSectionClick("web")}>
            Web Hosting
          </Typography>
          {selectedSection === "web" && (
            <>
              {/* Web Hosting Pricing Cards */}
              {/* Example: */}
              <Box sx={{ display: "flex" }}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h6'>Basic Plan</Typography>
                    <Typography variant='h4'>$10/month</Typography>
                    <Button variant='contained' className={classes.orderButton}>
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
                {/* Add two more cards for different plans */}
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h6'>Standard Plan</Typography>
                    <Typography variant='h4'>$10/month</Typography>
                    <Button variant='contained' className={classes.orderButton}>
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
                {/* Add two more cards for different plans */}
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h6'>Pro Plan</Typography>
                    <Typography variant='h4'>$10/month</Typography>
                    <Button variant='contained' className={classes.orderButton}>
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            </>
          )}
        </div>
        <div>
          <Typography
            variant='h4'
            onClick={() => handleSectionClick("virtual")}>
            Virtual Hosting
          </Typography>
          {selectedSection === "virtual" && (
            <>
              {/* Virtual Hosting Pricing Cards */}
              {/* Example: */}
              <Box sx={{ display: "flex" }}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h6'>Basic Plan</Typography>
                    <Typography variant='h4'>$10/month</Typography>
                    <Button variant='contained' className={classes.orderButton}>
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
                {/* Add two more cards for different plans */}
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h6'>Standard Plan</Typography>
                    <Typography variant='h4'>$10/month</Typography>
                    <Button variant='contained' className={classes.orderButton}>
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
                {/* Add two more cards for different plans */}
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h6'>Pro Plan</Typography>
                    <Typography variant='h4'>$10/month</Typography>
                    <Button variant='contained' className={classes.orderButton}>
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            </>
          )}
        </div>
        <div>
          <Typography
            variant='h4'
            textAlign={"center"}
            onClick={() => handleSectionClick("game")}>
            Game Hosting
          </Typography>
          {selectedSection === "game" && (
            <>
              {/* Game Hosting Pricing Cards */}
              {/* Example: */}
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h6'>Basic Plan</Typography>
                    <Typography variant='h4'>$10/month</Typography>
                    <Button variant='contained' className={classes.orderButton}>
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
                {/* Add two more cards for different plans */}
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h6'>Standard Plan</Typography>
                    <Typography variant='h4'>$10/month</Typography>
                    <Button variant='contained' className={classes.orderButton}>
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
                {/* Add two more cards for different plans */}
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h6'>Pro Plan</Typography>
                    <Typography variant='h4'>$10/month</Typography>
                    <Button variant='contained' className={classes.orderButton}>
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            </>
          )}
        </div>
      </Box>
    </div>
  );
};

export default PricingPage;
