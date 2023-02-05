import React, { useState, useEffect } from "react";
import { Grid, Box, Container, Button, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { typoContact } from "./HeaderCSS";
import { GitHub, LocationOn, Phone } from "@mui/icons-material";
import profile from "../assets/profile.png"
import profile1 from "../assets/profile1.jpeg"


function Header() {



    return (
        <div >
            <Box sx={{ width: "100%" }}>
                <Container >

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid

                            item
                            xs={6}

                            sx={{
                                height: "90vh",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                                , mt: 10

                            }}

                        >
                            <Box


                                sx={{ backgroundColor: "#A4B494", width: "150px", height: "30px", borderRadius: "10px" }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: "500", justifyContent: "center", display: "flex", fontSize: "18px" }}>
                                    Hello I'm
                                </Typography>
                            </Box>
                            <Typography variant="h3" sx={{ fontWeight: "750", mt: 2, mb: 1 }}>
                                Hrishiraj Sawan
                            </Typography>
                            <Typography variant="h5" sx={{ mt: 1, mb: 2 }}>
                                B.Tech CSE Scholar
                            </Typography>

                            <Box
                                sx={{
                                    height: "120px",
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    flexDirection: "column"
                                }}>
                                <Typography variant="subtitle1" sx={typoContact}>
                                    <EmailIcon sx={{ mr: 1 }} />
                                    hrishiraj102@gmail.com
                                </Typography>
                                <Typography variant="subtitle1" sx={typoContact}>
                                    <Phone sx={{ mr: 1 }} />
                                    8486039384
                                </Typography>
                                <Typography variant="subtitle1" sx={typoContact}>
                                    <LocationOn sx={{ mr: 1 }} />
                                    Near LPU, Jalandhar, Punjab, India
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    mt: 3,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "150px"

                                }}
                            >
                                <a href="https://github.com/hrishiraj102">
                                    <GitHub />
                                </a>
                                <a href="https://www.instagram.com/hrishiraj102/">
                                    <InstagramIcon />
                                </a>
                                <a href="https://www.linkedin.com/in/hrishirajsawan/">
                                    <LinkedInIcon />
                                </a>
                                <a href="https://www.facebook.com/hrishiraj.sawan">
                                    <FacebookIcon />
                                </a>

                            </Box>
                        </Grid>

                        <Grid
                            item
                            xs={6}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",

                            }}
                        >


                            <Box
                                sx={{
                                    height: "380px",
                                    width: "380px",
                                    backgroundColor: "#EAE0DA",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: "50%", mt: 10
                                }}
                            >
                                <img
                                    src={profile1}
                                    style={{
                                        height: "350px",
                                        width: "350px",
                                        objectFit: "cover",
                                        objectPosition: "50% 0%",
                                        border: "none",
                                        borderRadius: "50%",
                                        backgroundColor: "#100e17"
                                    }}
                                />
                            </Box>


                        </Grid>

                    </Grid>

                </Container>


            </Box>
        </div>
    )

}

export default Header