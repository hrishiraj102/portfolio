import { Email, Label, Message } from "@mui/icons-material";
import { Button, CircularProgress, Grid, Input, TextField, Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import React from "react";




function Footer() {

    

    return (

        <div>
            <Box sx={{ mb: 30 }}>
                <Container sx={{ mt: 15 }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        sx={{ display: "flex", justifyContent: "center" }}>

                        <Box item xs={12} sm={6} height={200} sx={{ ml: 2, width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", }}

                        >
                            <Box sx={{ backgroundColor: "#9F73AB", height: "auto", width: "180px", ml: 2, mr: 2, borderRadius: "20px" }}>
                                <Typography variant="h5" sx={{ fontWeight: "500", justifyContent: "center", display: "flex" }}>
                                    Write to me
                                </Typography>
                            </Box>
                            <Grid sx={{ width: "80%", mt: 5 }}>
                                <form>
                                    <TextField id="outlined-basic" label="Your Name" sx={{ backgroundColor: "#F5F2E7", width: 400, ml: 2, mr: 2, borderRadius: "5px", mb: 4 }} variant="outlined" size="small" />
                                    <TextField id="outlined-basic" type="email" label="Your E-mail ID" sx={{ backgroundColor: "#F5F2E7", width: 400, ml: 2, mr: 2, mb: 4, borderRadius: "5px" }} variant="outlined" size="small" />

                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Message"
                                        multiline
                                        rows={5}

                                        sx={{ backgroundColor: "#F5F2E7", width: 400, ml: 2, mr: 2, mb: 4, borderRadius: "5px" }}
                                    />
                                    <TextField id="outlined-basic" type="number" label="Contact Number" sx={{ backgroundColor: "#F5F2E7", width: 400, ml: 2, mr: 2, mb: 4, borderRadius: "5px" }} variant="outlined" size="small" />
                                    <div >


                                        <Button variant="contained" onClick={()=> window.alert("Will available soon")} sx={{ backgroundColor: "#5B8FB9", width: 150, ml: 2, mr: 2, borderRadius: "5px", }}>Send</Button>
                                    </div>

                                </form>

                            </Grid>



                        </Box>
                    </Grid>


                </Container>
            </Box>
        </div>
    )

}
export default Footer