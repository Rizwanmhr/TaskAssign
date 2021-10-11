import React,{useState} from 'react'
import { Grid, useTheme,TextField, Typography, Button } from "@material-ui/core";
// interface CardItems {
    
//     title:string,
//     name:string,
//     description:string,
//     status:string,
//     projects:string,
//     timeStamp:Date,
// }
const FormData = () => {
    const [taskData,setTaskData] = useState({
        name:'',description:'',status:'',title:'',projects:''
    })
    let  name,value
    const handleTask = (e:any) => {
        name = e.target.name;
        value = e.target.value;
        setTaskData({...taskData,[name]:value})
    }
    const ClickSubmit = async (e:any) => {
    e.preventDefault();
    console.log(taskData)
    const res = await fetch('/task', {
        method:'POST',
        headers:{
       'Content-Type': 'application/json'
        },
body:JSON.stringify(taskData)
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

    return (
        <div>
        <Grid container justify='space-between'>
         <Grid item lg={2}>
     <TextField
    label="Title"
    name='title'
    id='title'
    value={taskData.title}
    onChange={handleTask}
    style={{color:'#060b26'}}
    
    fullWidth
    required
    />
    </Grid>
    <Grid item lg={2}>
     <TextField
    label="Name"
    name='name'
    id='name'
    value={taskData.name}
    onChange={handleTask}
    style={{color:'#060b26'}}
    
    fullWidth
    required
    />
    </Grid>
    <Grid item lg={2}>
     <TextField
    label="Projects"
    name='projects'
    id='projects'
    value={taskData.projects}
    onChange={handleTask}
    style={{color:'#060b26'}}
    
    fullWidth
    required
    />
    </Grid>
    </Grid>
    <Grid container justify='space-between'>
    <Grid item lg={2}>
    <TextField
    label="Status"
    name='status'
    id='status'
    value={taskData.status}
    onChange={handleTask}
    style={{color:'#060b26'}}
    
    fullWidth
    required
    />
    </Grid>
   
    <Grid item lg={2}>
    <TextField
       label="Description"
       name='description'
       id='description'
       value={taskData.description}
       onChange={handleTask}
    style={{color:'#060b26'}}
    
    fullWidth
    required
    />
    </Grid>
    </Grid>
    <Button
      
      type='submit'
      style={{backgroundColor:'#060b26',color:'#fff'}}
      variant='contained'
      onClick={ClickSubmit}
      >
      Submit
      </Button>
    </div>
    )
}

export default FormData
