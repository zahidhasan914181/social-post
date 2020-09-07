import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useParams } from "react-router-dom";
import CommentsDetails from '../CommentsDetails/CommentsDetails';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      margin: 20,
      background: '#2ecc71',
      color: '#ffffff'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Comments = () => {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    let { statusId } = useParams();

    const [postDetails, setPostDetails] = useState([]);
    const [commentsDetails, setCommentsDetails] = useState([]);

    // Post
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${statusId}`;
        fetch (url)
        .then(res => res.json())
        .then(data => setPostDetails(data));
    }, []);
    // Comments
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${statusId}`;
        fetch (url)
        .then(res => res.json())
        .then(data => setCommentsDetails(data));
    }, []);
    return (
            <div className = "card">
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        <h1>ID: {postDetails.id}</h1>
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        <h3>Title: {postDetails.title}</h3>
                    </Typography>
                    <Typography variant="body2" component="p">
                        <p>Status: {postDetails.body}</p>
                    </Typography>
                </CardContent>
            </Card>
            <h3>Comments : {commentsDetails.length}</h3>
            {
                commentsDetails.map(comments =><CommentsDetails key={commentsDetails.id} commentsDetails={comments}></CommentsDetails>)
            }
    </div>
    );
};

export default Comments;