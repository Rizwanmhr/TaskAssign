import React,{useEffect,useState}  from'react'
import {Grid, Button, Typography, Card,CardContent, CardActionArea} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import createTypography from '@mui/material/styles/createTypography'
// set type Script State to get Data for Cards
interface CardItems {
    name:string,
    userId:number,
    description:string,
    status:string,
    title:string,
    projects:string,
    timeStamp:Date,
}

const useStyles = makeStyles((theme) => ({
    root:{
        width:'70vw',
        height:'100vh',
         backgroundColor:theme.palette.grey[200],
        paddingTop: theme.spacing(5)
    }
}))

const TaskCard = () => {
    const [card, setCard]= useState<CardItems[]>()
    const createCard = async () => {
        try {
           const res = await fetch('/task')
           const cardData = await res.json();
           console.log(cardData)
           setCard(cardData);
        } catch (error) {
           console.log(error) 
        }
        }
    useEffect(() => {
        createCard()
    },[])
    
    const classes = useStyles();
    //map method
    return(
        <>
        <Grid container className={classes.root} spacing={2}>
        {
       card && card.map(({name,description,status,title,timeStamp,projects,userId}) =>{
       return(
       <Grid item xs={12}lg={4}>
        <Card>
        <CardContent>
        <Typography variant='h6'>Name: {name}</Typography>
        <Typography variant='subtitle1'>Description: {description}</Typography>
        <Typography variant='subtitle1'>Status: {status}</Typography>
        <Typography variant='subtitle1'>UserId: {userId}</Typography>
        <Typography variant='subtitle1'>Title: {title}</Typography>
        <Typography variant='subtitle1'>Projects: {projects}</Typography>
        <Typography variant='subtitle1'>Time: {timeStamp}</Typography>
        </CardContent>
        <CardContent>
         <Button>Read More</Button>
        </CardContent>
        </Card>
        </Grid>

       )
       })
        }
        </Grid>
        
        </>
    )
}
export default TaskCard