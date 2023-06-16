
import { styled, Box, Typography } from '@mui/material';
import blog from './blog2.jpg';
const Container = styled(Box)`
    border: 1px solid #d3cede;
    border-radius: 25px;
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #071330;    
    color: #fff;
    height: 350px;
    & > img, & > p {
        padding: 0 5px 5px 5px;
    }
`;
// background: #071330;
const Image = styled('img')({
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    height: 200
});

const Text = styled(Typography)`
    color: #878787
    font-size: 15px;
`;

const Heading = styled(Typography)`
    font-size: 22px;
    font-weight: 600
`;

const Details = styled(Typography)`
    font-size: 14px;
    word-break: break-word;
`;

const Post = ({ post }) => {
    const url = post.picture ? post.picture : blog;
    // https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80
    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    } 

    return (
        <Container>
            <Image src={url} alt="post" />
            <Text>{post.categories}</Text>
            <Heading>{addEllipsis(post.title, 20)}</Heading>
            <Text>Author: {post.username}</Text>
            <Details>{addEllipsis(post.description, 100)}</Details>
        </Container>
    )
}

export default Post;