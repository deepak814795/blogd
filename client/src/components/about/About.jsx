
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    height: 46vh;  
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #fff;
`;

const About = () => {

    return (
        <div style={{backgroundColor:'black'}}>
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3" color={'whitesmoke'}>My name is Deepak Kushwaha</Typography>
                <Text variant="h5">I'm a Software Engineer based in India. 
                    I've built websites and web applications.<br />
                    If you are interested, you can view some of my favorite projects here &nbsp; &nbsp;
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/deepak814795" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on &nbsp; &nbsp;
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/__dk.20/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                    &nbsp; or send me an Email &nbsp; &nbsp;
                        <Link href="mailto:deepkush40@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.

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
    )
}

export default About;