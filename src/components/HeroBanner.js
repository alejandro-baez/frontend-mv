import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImg from "../assets/images/front-page-img.webp"

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#0069F7" fontWeight="600" fontSize="26px">
        Fitness Wiki
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px" mt="30px"
      >
        Every Exercise<br/> All In One Place{" "}
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>Learn more about every exercises</Typography>
      <Button variant="contained" href="#exercises">Explore Exercises</Button>
      <img src={HeroBannerImg} alt="Banner" className="hero-banner-img" style={{width:"600px", height:"400px", margin:"0 5px"}}/>
    </Box>
  );
};

export default HeroBanner;
