import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import './Status.css'

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

const Status = (props) => {
    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

    const {id, title, body} = props.status;

    let history = useHistory();
      
        function handleClick(statusId) {
          history.push(`/status/${statusId}`);
        }

    return (
        <div className = "card">
            <Card className={classes.root}>
      <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
          <h1>ID: {id}</h1>
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <h3>Title: {title}</h3>
        </Typography>
        <Typography variant="body2" component="p">
        <p>Status: {body}</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick = {() => handleClick(id)} variant = 'contained' color = 'primary'>See Comments</Button>
      </CardActions>
    </Card>
        </div>
    );
};

export default Status;