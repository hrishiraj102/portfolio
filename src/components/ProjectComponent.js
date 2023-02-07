import React from "react";
import { Grid, Box, Typography, } from "@mui/material";
import { Container, } from "@mui/system";
import './Project.css'



function ProjectComponent() {
    const project =
        [
            {
                "title": "Student Management System",
                "date": 2022,
                "description": "It was a Java Full Stack project. Where client can search/manipulate MySQL database using the browser. I have used Servlet, Tomcat, JSP, JDBC, HTML, CSS in this project."
            },

            {
                "title": "Music System for Android Mobile",
                "date": 2021,
                "description": "Prepared a android application where user can listen to music with a additional feature where user can view images of them that was loaded during build. I programmed this app using Java language and XML in android studio."
            },

            {
                "title": "Covid Vaccine Update Bot",
                "date": 2021,
                "description": "It was a API based project. I made this project in python and I have used Telegram bot to communicate with people. I have used Cowin.gov.in API for the data. I had linked my codes with my bot using API."
            },

            {
                "title": "Dekstop Music System",
                "date": 2021,
                "description": "It was a group project I completed with my classmate. This project was based on python and we took help of Tkinter GUI toolkit and pygame module to complete this project. "
            },

            {
                "title": "Frontend Tutor Website ",
                "date": 2021,
                "description": "This was my first project in the field of Computer Science. It was a group project we did in our 1st year of degree. We have use HTML, CSS, Javascript here."
            },

        ]

    const certificate =
        [
            {
                "title": "10+ Quest completion badge & 5 skills Badge by Google Cloud ",
                "date": 2022,

            },

            {
                "title": "App Modernization Basics by IBM",
                "date": 2022,

            },

            {
                "title": "Enterprise Design Thinking Practitioner by IBM",
                "date": 2022,

            },

            {
                "title": "Modernizing Java EE Applications by Cognitive Class",
                "date": 2022,

            },

            {
                "title": "C for Everyone: Programming Fundamentals authorized by UC Santa Cruz ",
                "date": 2020,
            },

            {
                "title": "Python Programming by Central Tool Room & Training Centre (MSME) Government of India ",
                "date": 2020,
            },


        ]






    return (
        <div>
            <Box>
                <Container >
                    <Grid
                        container

                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        sx={{
                            display: "flex",
                            mt: 20,
                            mb:20
                        }}
                    >
                        <Grid
                            item xs={12} sm={6}

                            sx={{
                                mt: 2,

                            }}

                        >
                            <Grid className="clothoid-corner"

                                sx={{

                                    
                                    height: "140vh ",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                            >

                                <Typography variant="h4" sx={{ fontWeight: 500, display: "flex", justifyContent: "center" }}>
                                    Projects
                                </Typography>

                                {project.map((item) => {

                                    return (
                                        <div >
                                            <Box

                                                sx={{

                                                    height: "190px",
                                                    width: "90%",
                                                    ml: 2,
                                                    flexDirection: "column",
                                                    display: "flex"
                                                }}
                                            >   <ul>

                                                    <Typography variant="h5" sx={{ fontWeight: 450, mt: 2, color: "#FFFFD0" }}>
                                                        {item.title}
                                                    </Typography>
                                                    <ol>
                                                        <Typography variant="subtitle1" sx={{ mb: 1, color: "#F3CCFF" }}>
                                                            {item.date}
                                                        </Typography>
                                                    </ol>
                                                    <ol>
                                                        <Typography variant="subtitle1" sx={{ fontWeight: 200 }}>
                                                            {item.description}
                                                        </Typography>
                                                    </ol>

                                                </ul>

                                            </Box>
                                        </div>
                                    )
                                })}

                            </Grid>

                        </Grid>

                        <Grid
                            item xs={12} sm={6}
                            sx={{
                                mt: 2
                            }}

                        >

                            <Grid className="clothoid-corner"

                                sx={{
                                    height: "140vh",
                                    
                                    display: "flex",
                                    flexDirection: "column",

                                }}>
                                <Typography variant="h4" sx={{ fontWeight: 500, mt: 7, display: "flex", justifyContent: "center" }}>
                                    Certifications
                                </Typography>

                                {certificate.map((item) => {

                                    return (
                                        <div>
                                            <Box

                                                sx={{
                                                    height: "140px",
                                                    width: "90%",
                                                    ml: 2,
                                                    flexDirection: "column",
                                                    display: "flex"
                                                }}
                                            >   <ul>
                                                    <Typography variant="h6" sx={{ fontWeight: 350, mt: 2, color: "#FFFFD0" }}>
                                                        {item.title}
                                                    </Typography>
                                                    <ol>
                                                        <Typography variant="subtitle1" sx={{ mt: 2, mb: 1, color: "#F3CCFF" }}>
                                                            {item.date}
                                                        </Typography>
                                                    </ol>

                                                </ul>

                                            </Box>
                                        </div>
                                    )
                                })}


                            </Grid>

                        </Grid>

                    </Grid>

                </Container>
            </Box>
        </div>
    )
}
export default ProjectComponent;