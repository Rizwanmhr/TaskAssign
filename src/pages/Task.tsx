import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Grid, useTheme, Typography, Button } from "@material-ui/core";
import useStyles from "./TaskDescription.style";
import AlarmIcon from "@mui/icons-material/Alarm";
import TextField from '@material-ui/core/TextField'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormData from './FormData'

interface assignTask {
    _id: string;
    name: string;
    userId:number,
    projects:string;
    description: string;
    status: string;
    title: string;
    timeStamp:Date
  }
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Task = () => {
    const [myTask, setMyTask] = useState<string>();
    const [assigntask, setAssignTask] = useState<assignTask[]>();
    const [userTask, setuserTask] = useState<string>()
    const [userStatus, setuserStatus] = useState<string>()

    const [assignTasks, setAssignTasks] = useState({
      name:'',description:'',status:'',title:'',projects:''
  })
  let name,value;
  const handleTask = (e:any) => {
    name = e.target.name;
    value = e.target.value;
    setAssignTasks({...assignTasks,[name]:value})
  }
  

  // const [newTask, setNewTask] = useState()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const  handleTask= (e:any) => {
  //     name = e.target.name;
  //     value = e.target.value;
  //     setAssignTasks({...assignTasks,[name]:value})
  // }
  const toGetAssignTask = async () => {
    const assign = await (await fetch("/task")).json();
    console.log(assign);
    // const newAssign = await assign;
    setAssignTask(assign);
  };
  useEffect(() => {
    toGetAssignTask();
  }, []);

  const handleChange = (e: SelectChangeEvent) => {
    setAssignTasks({...assignTasks,[e.target.name]:e.target.value});
  }
  //for user project
  const projecthandleChange = (e: SelectChangeEvent) => {
    setAssignTasks({...assignTasks,[e.target.name]:e.target.value});
  }
  //for user status
  const projecthandleStatus = (e: SelectChangeEvent) => {
    setAssignTasks({...assignTasks,[e.target.name]:e.target.value});
  }
  //for submit data
  const ClickedSubmit = async (e:any) => {
    e.preventDefault();
    console.log(assignTasks)
    const res = await fetch('/task', {
        method:'POST',
        headers:{
       'Content-Type': 'application/json'
        },
body:JSON.stringify(assignTasks)
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
  const classes = useStyles();
  return (
    <div>
      <Button   style={{backgroundColor:'#060b26',color:'#fff'}}
        variant='contained' onClick={handleOpen}>Task</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <>
    {/* <FormData /> */}
      <Grid container justify="flex-start">
        <Grid item xs={10}lg={5}>
        <Typography>Title</Typography>
          <input
            type="text"
            name='title'
            id='name'
            value={assignTasks.title}
            onChange={handleTask}
            placeholder="Write a task name"
            style={{
              width: "100%",
              height: "50px",
              marginTop: "2rem",
              fontSize: "1rem",
         
            }}
          />

        </Grid>
    
      <Grid container justify='flex-end'>
       <Grid item lg={2}>
         <Typography>Assign</Typography>
       </Grid>
       <Grid item lg={2}>
       {/* <Typography>{myTask}</Typography> */}
       </Grid>
       <Grid item lg={2}>
       <Typography>All Employees</Typography>
         <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Employee</InputLabel>
        <Select
          
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
           value={myTask}
           name='name'
          onChange={handleChange}
          //onChange={handleTask}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            assigntask?.map(({name,_id}) => {
return(

  <MenuItem key={_id} value={name}>{name}</MenuItem>

)
})
}
</Select>
</FormControl>
</Grid>
</Grid>
</Grid>
<Typography className={classes.heading}>
      <Grid container justify='flex-end'>
       <Grid item lg={2}>
         <Typography>Assign</Typography>
       </Grid>
       <Grid item lg={2}>
         {/* <Typography>{userTask}</Typography> */}
       </Grid>
       <Grid item lg={2}>
         <Typography>Recent Assign Projects</Typography>
         <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Project</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={userTask}
          name='projects'
          onChange={projecthandleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            assigntask?.map(({projects,_id}) => {
return(

  <MenuItem key={_id} value={projects}>{projects}</MenuItem>

)
            })
          }
        </Select>
      </FormControl>
       </Grid>
       </Grid>
      </Typography>

      <Typography className={classes.heading}>
      <Grid container justify='flex-end'>
       <Grid item lg={2}>
         <Typography>Status</Typography>
       </Grid>
       <Grid item lg={2}>
         {/* <Typography>{userStatus}</Typography> */}
       </Grid>
       <Grid item lg={2}>
         <Typography>Employee Status</Typography>
         <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={userStatus}
          name='status'
          onChange={projecthandleStatus}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            assigntask?.map(({status,_id}) => {
return(

  <MenuItem key={_id} value={status}>{status}</MenuItem>

)
            })
          }
        </Select>
      </FormControl>
       </Grid>
       </Grid>
      </Typography>
      <Grid container justify="flex-start">
        <Grid item lg={5}>
          <Typography className={classes.secinput}>
          <Typography>Description</Typography>
            <textarea
                 name='description'
                 id='description'
                 value={assignTasks.description}
                 onChange={handleTask}
              placeholder="Add more details to this task"
              style={{ width: "100%", height: "100px" }}
            />
          </Typography>
          <Button
      
      type='submit'
      style={{backgroundColor:'#060b26',color:'#fff'}}
      variant='contained'
      onClick={ClickedSubmit}
      >
      Submit
      </Button>
        </Grid>
      </Grid>
 </>
        </Box>
      </Modal>
    </div>
  );
}
export default Task

