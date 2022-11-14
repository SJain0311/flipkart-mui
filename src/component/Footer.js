import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/system";
import Divider from "@mui/material/Divider";
import "./Footer.css"

function Footer() {
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    }));
    return (
      <div className="container-foo">
        <Box>
          <Container maxWidth="lg">
            <Grid container paddingTop={"10px"} paddingBottom={"10px"}>
              <Grid
                item
                xs={12}
                sm={3}
                md={2}
                sx={{ marginTop: { xs: 2, sm: 2 } }}
              >
                <Box className="heading">ABOUT</Box>
                <Box style={{ textAlign: "left" }}>Contact Us</Box>
                <Box style={{ textAlign: "left" }}>About Us</Box>
                <Box style={{ textAlign: "left" }}>Careers</Box>
                <Box style={{ textAlign: "left" }}>Flipkart Stories</Box>
                <Box style={{ textAlign: "left" }}>Press</Box>
                <Box style={{ textAlign: "left" }}>Flipkart Wholesale</Box>
                <Box style={{ textAlign: "left" }}>Corporate </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={3}
                md={2}
                sx={{ marginTop: { xs: 2, sm: 2 } }}
              >
                <Box className="heading">HELP</Box>
                <Box style={{ textAlign: "left" }}>Payments</Box>
                <Box style={{ textAlign: "left" }}>Shipping</Box>
                <Box style={{ textAlign: "left" }}>Cancellation & Returns</Box>
                <Box style={{ textAlign: "left" }}>FAQ</Box>
                <Box style={{ textAlign: "left" }}>Report Infringement</Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={3}
                md={2}
                sx={{ marginTop: { xs: 2, sm: 2 } }}
              >
                <Box className="heading">POLICY</Box>
                <Box style={{ textAlign: "left" }}>Return Policy</Box>
                <Box style={{ textAlign: "left" }}>Terms Of Use</Box>
                <Box style={{ textAlign: "left" }}>Security</Box>
                <Box style={{ textAlign: "left" }}>Privacy</Box>
                <Box style={{ textAlign: "left" }}>Sitemap</Box>
                <Box style={{ textAlign: "left" }}>EPR Compliance</Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={3}
                md={1}
                sx={{ marginTop: { xs: 2, sm: 2 } }}
              >
                <Box className="heading">SOCIAL</Box>
                <Box style={{ textAlign: "left" }}>Facebook</Box>
                <Box style={{ textAlign: "left" }}>Twitter</Box>
                <Box style={{ textAlign: "left" }}>Security</Box>
                <Box style={{ textAlign: "left" }}>YouTube</Box>
              </Grid>
              <Grid
                className="list"
                item
                xs={12}
                sm={4}
                md={3}
                sx={{ marginTop: { xs: 2, sm: 2 } }}
              >
                <Box className="heading">Mail Us</Box>
                <Box style={{ textAlign: "left" }}>
                  Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
                  Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
                  Village, Bengaluru, 560103, Karnataka, India
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                sx={{ marginTop: { xs: 2, sm: 2 } }}
              >
                <Box className="heading">Registered Office Address:</Box>
                <Box style={{ textAlign: "left" }}>
                  Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
                  Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
                  Village, Bengaluru, 560103, Karnataka, India CIN :
                  U51109KA2012PTC066107 Telephone: 044-45614700
                </Box>
              </Grid>
            </Grid>
          </Container>
          <Divider color="gray" />
          <Container>
            <Typography padding={"10px"}>© 2007-2022 Flipkart.com</Typography>
          </Container>
        </Box>
      </div>
    );
  }
  
  export default Footer;