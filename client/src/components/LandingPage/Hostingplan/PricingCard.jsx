import * as React from "react";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import {
  Card,
  CardContent,
  Button,
  Typography,
  Container,
} from "@mui/material";

const PricingCard = ({ title, price, features, Symbol, durations }) => (
  <Card
    sx={{
      width: "370px",
      height: "602px",
      borderRadius: "20px",
      marginTop: "20px",
      boxShadow: " 2px 4px 4px 2px #00000040",
    }}>
    <Container
      sx={{
        radius: "20px ",

        background:
          "linear-gradient(102.68deg, #251E78 0%, rgba(59, 49, 222, 0.51) 100%)",
        color: "#FFF",
      }}>
      <Typography
        variant='h5'
        p={2}
        mb={1}
        fontWeight={500}
        lineHeight={"28px"}
        fontSize={"24px"}>
        {title}
      </Typography>
      <Typography variant='h4' p={2}>
        <span style={{ fontSize: "16px", verticalAlign: "super" }}>
          {Symbol}
        </span>
        {price}
        <span>{durations}</span>
      </Typography>
    </Container>
    <CardContent>
      <ul
        style={{
          listStyleType: "revert",
        }}>
        {features.map((feature, index) => (
          <Typography key={feature} component='li' variant='h6' p={1} ml={1}>
            {feature}
          </Typography>
        ))}
      </ul>
      <Button
        variant='contained'
        onClick={onended}
        style={{
          width: 124,
          height: 49,
          left: "25%",
          background:
            "linear-gradient(99deg, #251E78 0%, rgba(59, 49, 222, 0.68) 100%)",
          borderRadius: 15,
        }}>
        Order Now
      </Button>
    </CardContent>
  </Card>
);

const Pricing = () => {
  const webPlans = [
    {
      title: "Personal",
      Symbol: "$",
      price: "30",
      durations: "/month",
      features: [
        "Hosting For 1 website",
        "4 GB SSD Raid 10 Storage",
        "10 GB Bandwidth/Mo",
        "5 Email Account",
        "3 Sub-Domain",
        "Free Auto SSL",
        "Unlimited FTP Account",
      ],
    },
    {
      title: "Professional",
      price: "$35/month",
      features: [
        "Hosting For 1 website",
        "4 GB SSD Raid 10 Storage",
        "10 GB Bandwidth/Mo",
        "5 Email Account",
        "3 Sub-Domain",
        "Free Auto SSL",
        "Unlimited FTP Account",
      ],
    },
    {
      title: "Business Hosting",
      price: "$40/month",
      features: [
        "Hosting For 1 website",
        "4 GB SSD Raid 10 Storage",
        "10 GB Bandwidth/Mo",
        "5 Email Account",
        "3 Sub-Domain",
        "Free Auto SSL",
        "Unlimited FTP Account",
      ],
    },
  ];
  const virtualPlans = [
    {
      title: "Personal",
      price: "$40/month",
      features: [
        "Hosting For 1 website",
        "4 GB SSD Raid 10 Storage",
        "10 GB Bandwidth/Mo",
        "5 Email Account",
        "3 Sub-Domain",
        "Free Auto SSL",
        "Unlimited FTP Account",
      ],
    },
    {
      title: "Professional",
      price: "$45/month",
      features: [
        "Hosting For 1 website",
        "4 GB SSD Raid 10 Storage",
        "10 GB Bandwidth/Mo",
        "5 Email Account",
        "3 Sub-Domain",
        "Free Auto SSL",
        "Unlimited FTP Account",
      ],
    },
    {
      title: "Business Hosting",
      price: "$50/month",
      features: [
        "Hosting For 1 website",
        "4 GB SSD Raid 10 Storage",
        "10 GB Bandwidth/Mo",
        "5 Email Account",
        "3 Sub-Domain",
        "Free Auto SSL",
        "Unlimited FTP Account",
      ],
    },
  ];
  const gamePlans = [
    {
      title: "Personal",
      price: "$40/month",
      features: [
        "Hosting For 1 website",
        "4 GB SSD Raid 10 Storage",
        "10 GB Bandwidth/Mo",
        "5 Email Account",
        "3 Sub-Domain",
        "Free Auto SSL",
        "Unlimited FTP Account",
      ],
    },
    {
      title: "Professional",
      price: "$45/month",
      features: [
        "Hosting For 1 website",
        "4 GB SSD Raid 10 Storage",
        "10 GB Bandwidth/Mo",
        "5 Email Account",
        "3 Sub-Domain",
        "Free Auto SSL",
        "Unlimited FTP Account",
      ],
    },
    {
      title: "Business Hosting",
      price: "$50/month",
      features: [
        "Hosting For 1 website",
        "4 GB SSD Raid 10 Storage",
        "10 GB Bandwidth/Mo",
        "5 Email Account",
        "3 Sub-Domain",
        "Free Auto SSL",
        "Unlimited FTP Account",
      ],
    },
  ];

  return (
    <div style={{ background: "#FFFFFF" }}>
      <Typography
        mt={3}
        variant='h2'
        textAlign={"center"}
        fontSize={"48px"}
        fontWeight={700}
        lineHeight={"52px"}
        color={"#180D5B"}>
        Pricing
      </Typography>

      <Tabs defaultValue={0} aria-label='volunteer dashboard tabs'>
        <TabsList
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "53px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
          className='Sutitles'>
          <Tab
            variant='h4'
            textAlign={"center"}
            fontSize={"100%"}
            fontFamily={"Roboto"}
            fontWeight={600}>
            <Typography
              variant='h4'
              textAlign={"center"}
              fontSize={"100%"}
              fontFamily={"Roboto"}
              fontWeight={600}>
              Web Hosting
            </Typography>
          </Tab>
          <Tab
            variant='h4'
            textAlign={"center"}
            fontSize={"100%"}
            fontWeight={600}>
            <Typography
              variant='h4'
              textAlign={"center"}
              fontSize={"100%"}
              fontFamily={"Roboto"}
              fontWeight={600}>
              Virtual Machines
            </Typography>
          </Tab>
          <Tab
            variant='h4'
            textAlign={"center"}
            fontSize={"100%"}
            fontWeight={600}>
            <Typography
              variant='h4'
              textAlign={"center"}
              fontSize={"100%"}
              fontFamily={"Roboto"}
              fontWeight={600}>
              Game Servers
            </Typography>
          </Tab>
        </TabsList>
        <TabPanel
          value={0}
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px ",
          }}>
          {webPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </TabPanel>
        <TabPanel
          value={1}
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px ",
          }}>
          {virtualPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </TabPanel>
        <TabPanel
          value={2}
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px ",
          }}>
          {gamePlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Pricing;

const Tab = styled(BaseTab)`
  font-family: "Roboto;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background: transparent;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background:
    "linear-gradient(180deg, rgba(37, 30, 118, 0.89) 0%, rgba(59, 49, 222, 0.56) 100%) ",
  }

  &:focus {
    text-decoration: underline;
    padding: 15px 18px;
  }

  &.${tabClasses.selected} {
    text-decoration: underline;
    padding: 15px 18px;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)(
  ({ theme }) => `
  
  font-family: 'Roboto;
  padding: 20px 12px;
  border-radius: 12px;
  
  `
);

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 400px;
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  `
);
