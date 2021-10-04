import React,{useEffect,useState}  from'react'
import {Grid,Container, Button, Typography, Card,CardContent, CardActionArea} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import createTypography from '@mui/material/styles/createTypography'

interface CardItems {
    name:string,
    description:string,
    status:string
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
    })
    const classes = useStyles();
    return(
        <>
        <Grid container className={classes.root} spacing={2}>
        {
       card && card.map(({name,description,status}) =>{
       return(
       <Grid item lg={4}>
        <Card>
        <CardContent>
        <Typography variant='h6'>{name}</Typography>
        <Typography variant='subtitle1'>{description}</Typography>
        <Typography variant='subtitle1'>{status}</Typography>
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