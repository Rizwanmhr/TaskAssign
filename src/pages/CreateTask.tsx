import React,{useState,useEffect} from 'react'
import { Grid, TextField, Button,makeStyles} from "@material-ui/core";
import TaskCard from './TaskCard'
import TaskDescription from './TaskDescription'
//Manage Form
const CreateTask = () => {
    const [assignTask, setAssignTask] = useState({
        name:'',description:'',status:'',title:'',projects:'',userId:''
    })
    let name,value;
    const handleTask = (e:any) => {
        name = e.target.name;
        value = e.target.value;
        setAssignTask({...assignTask,[name]:value})
    }
    const postData = async (e:any) => {
        e.preventDefault();
        console.log(assignTask)
        const res = await fetch('/task', {
            method:'POST',
            headers:{
           'Content-Type': 'application/json'
            },
  body:JSON.stringify(assignTask)
        })
      const data = await res.json()
      console.log(data)
      if(data.status === 422 || !data){
          window.alert('Task not send');
          console.log('Task not send')
      }else{
          window.alert('Task send Successfully');
          console.log('Task send Successfully')
          
      }
    }
    //Form input values
    return (
    <div>
    <Grid container justify='center'>
    <Grid item xs={10}lg={10}>
    <form method='POST' noValidate autoComplete='off'>
    <TextField
    label="Name"
    name='name'
    id='name'
    value={assignTask.name}
    onChange={handleTask}
    style={{color:'#060b26'}}
    
    fullWidth
    required
    />
     <TextField
    label="Description"
    name='description'
    id='description'
    style={{color:'#060b26'}}
    value={assignTask.description}
    onChange={handleTask}
    fullWidth
    required
    />
     <TextField
    label="Status"
    name='status'
    id='status'
    style={{color:'#060b26'}}
    value={assignTask.status}
    onChange={handleTask}
    fullWidth
    required
    /> 
       <TextField
    label="User Id"
    name='userId'
    id='userId'
    style={{color:'#060b26'}}
    value={assignTask.userId}
    onChange={handleTask}
    fullWidth
    required
    /> 
    <TextField
    label="Projects"
    name='projects'
    id='projects'
    style={{color:'#060b26'}}
    value={assignTask.projects}
    onChange={handleTask}
    fullWidth
    required
    />
     <TextField
    label="Title"
    name='title'
    id='title'
    style={{color:'#060b26'}}
    value={assignTask.title}
    onChange={handleTask}
    fullWidth
    required
    />
        <Button
        type='submit'
        style={{backgroundColor:'#060b26',color:'#fff'}}
        variant='contained'
        onClick={postData}
        >
        Submit
        </Button>
    </form>
    </Grid>
    </Grid>
    <TaskCard />
    <TaskDescription />
    </div>
    )
}

export default CreateTask
