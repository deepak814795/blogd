
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    height: 47vh;
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #fff;
`;


const Contact = () => {
    return (
        <div style={{backgroundColor:'black'}}>
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>    
                <Text variant="h5">
                    Reach out to me on  &nbsp; &nbsp;
                    <Link href="https://www.instagram.com/__dk.20/" color="inherit" target="_blank">
                        <Instagram/>
                    </Link>
                    &nbsp; &nbsp; or send me an Email  &nbsp; &nbsp;
                    <Link href="mailto:deepkush40@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                    <br/> Phone  &nbsp; &nbsp;+91 8917756429 

                    <br/> Check out my amazing Portfolio here  &nbsp; &nbsp;
                        <Link href="https://6478f2ff932d5802d348cbd1--strong-dodol-20f52f.netlify.app/" color="inherit" target="_blank">
                           <CoPresentIcon />
                        </Link>
                        <br/>
                        <p style={{color:'#04D010',fontSize:'40px'}}>Wanna hire me!!! Connect with me on Linkedin  &nbsp; &nbsp; 
                        <Link href="https://www.linkedin.com/in/deepakkushwaha-893464152/" color="inherit" target="_blank">
                           <LinkedInIcon />
                        </Link> </p>
                </Text>
            </Wrapper>
        </Box>
        </div>
    );
}

export default Contact;