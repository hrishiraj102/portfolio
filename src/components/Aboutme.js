import React from "react";
import { Grid, Button, Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { TypoAboutMe } from "./AboutmeCSS";
import DownloadIcon from "@mui/icons-material/Download";


function Aboutme() {

    const skills = ["Problem Solving", "Java Development", "Google Cloud", "Servlet", "JSP", "Spring Boot",
        "MySql", "DevOps", "React.js", "JavaScript", "HTML", "CSS", "Data Analysis and Visualization", "Python", "Excel"]
    return (
        <div>
            <Box sx={{ mt: 10 }}>
                <Container>
                    <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        sx={{ display: "flex", justifyContent: "center" }}

                    >
                        {/* <Grid item xs={6} sx={{justifyContent: "center",width:"200%"}}  > */}

                        <Typography variant="h3" sx={[TypoAboutMe, { mb: 3, mt: 1 }]}>
                            About Me
                        </Typography>
                        <Typography variant="h6" sx={[TypoAboutMe, { mt: "10px", width: "100%" }]}>
                            Hello, I’m Hrishiraj from Jalandhar, India. I'm passionate about problem solving and I love solving data structures & algorithm based problems. Also,
                            I'm working on domains like Web Development, Cloud Computing, Devops, Data Science. Currently, I'm in the third year of pursuing a B.Tech Computer Science & Engineering degree from Lovely
                            Professional University, Phagwara. I hail from Assam, a beautiful state located in the North-Eastern part of India.
                        </Typography>
                        <Typography variant="h5" sx={[TypoAboutMe, { fontWeight: 500, mt: "30px", width: "100%", mb: "20px" }]} >
                            My Skills
                        </Typography>
                        <Box
                            sx={{
                                width: "80%", display: "flex",
                                justifyContent: "center",
                                flexWrap: "wrap"
                            }}>
                            {skills.map((items) => {
                                return (
                                    <button
                                        key="item"
                                        style={{
                                            padding: "6px",
                                            backgroundColor: "transparent",
                                            border: "2px solid  #0CBBA0",
                                            borderRadius: "10px",
                                            fontSize: "1rem",
                                            margin: "4px"
                                        }}
                                    >
                                        {items}
                                    </button>
                                )
                            })}

                        </Box>
                        <Grid sx={{ width: "100%", display: "flex", mt: 5, justifyContent: "center" }}>
                            <Button
                                variant="contained"
                                size="medium"
                                sx={{
                                    backgroundColor: "#0CBBA0", width: "200px",

                                }}
                                endIcon={<DownloadIcon />}
                                href="https://drive.google.com/open?id=16QDX0UzMPS-5xO-uovx9pNezj2fpxroc&authuser=hrishiraj102%40gmail.com&usp=drive_fs"
                                target="_blank">
                                Download CV
                            </Button>
                        </Grid>


                        {/* </Grid> */}




                    </Grid>
                </Container>
            </Box>
        </div>
    )


}
export default Aboutme