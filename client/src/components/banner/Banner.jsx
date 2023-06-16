
import { styled, Box, Typography } from '@mui/material';
import hero from './blogbg.jpg'
const Image = styled(Box)`
    width: 100%;
    background: hero;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;
// https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg
//url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
const Heading = styled(Typography)`

    font-size: 70px;
    color: black;
    line-height: 1;
    font-family: Georgia, serif;

    
`;

const SubHeading = styled(Typography)`
    font-size: 30px;
    background: black;
    color: #fff;
    font-family: Georgia, serif;
`;

const Banner = () => {
    
    return (
        <Image style={{ backgroundImage: `url(${hero})`}}>
            <Heading>BLOGGER</Heading>
            <SubHeading>What's Your Story ?</SubHeading>
        </Image>
    )
}

export default Banner;