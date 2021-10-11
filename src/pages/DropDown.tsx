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

const ReactModal = () => {
    const [myTask, setMyTask] = useState<string>();
    const [assigntask, setAssignTask] = useState<assignTask[]>();
    const [userTask, setuserTask] = useState<string>()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const toGetAssignTask = async () => {
    const assign = await (await fetch("/task")).json();
    console.log(assign);
    // const newAssign = await assign;
    setAssignTask(assign);
  };
  useEffect(() => {
    toGetAssignTask();
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setMyTask(event.target.value);
  }
  //for user project
  const projecthandleChange = (event: SelectChangeEvent) => {
    setuserTask(event.target.value);
  }
  const classes = useStyles();
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <>
      <Grid container justify="center">
        <Grid item xs={10}lg={12}>
          <input
            type="text"
            placeholder="Write a task name"
            style={{
              width: "100%",
              height: "50px",
              marginTop: "2rem",
              fontSize: "1rem",
            }}
          />
        </Grid>
      </Grid>
      <>
      <Grid container justify='flex-start'>
       <Grid item lg={2}>
         <Typography>Assign</Typography>
       </Grid>
       <Grid item lg={2}>
       <Typography>{myTask}</Typography>
       </Grid>
     
       <Grid item lg={2}>
       <Typography>All Employees</Typography>
         <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Employe</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={myTask}
          onChange={handleChange}
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
      </>
      <Typography className={classes.duedate}>
        <Grid container justify="flex-start">
          <Grid item lg={2}>
            <Typography>Due Date <TextField type="date" variant='filled' /></Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography className={classes.timeicon}>
              <AlarmIcon />
              No Due Date
            </Typography>
          </Grid>
        </Grid>
      </Typography>
      <Typography className={classes.heading}>
      <Grid container justify='flex-start'>
       <Grid item lg={2}>
         <Typography>Assign</Typography>
       </Grid>
       <Grid item lg={2}>
         <Typography>{userTask}</Typography>
       </Grid>
       <Grid item lg={2}>
         <Typography>Recent Assign Project</Typography>
         <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Project</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={userTask}
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
        <Grid container justify="flex-start">
          <Grid item lg={2}>
            <Typography>Comments</Typography>
            
          </Grid>
        </Grid>
      </Typography>
      <Grid container justify="center">
        <Grid item lg={12}>
          <Typography className={classes.secinput}>
            <input
              type="text"
              placeholder="Add more details to this task"
              style={{ width: "100%", height: "70px" }}
            />
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="flex-start">
        <Grid item lg={2}>
            <Button
              style={{ backgroundColor: "#060b26", color: "#fff" }}
              variant="contained"
            >
            Details
            </Button>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item lg={12}>
          <Typography className={classes.secinput}>
            <input
              type="text"
              placeholder="Add more comments to this task"
              style={{ width: "100%", height: "70px" }}
            />
          </Typography>
        </Grid>
      </Grid>
      
      <Grid container justify="flex-start">
        <Grid item lg={2}>
            <Button
              style={{ backgroundColor: "#060b26", color: "#fff" }}
              variant="contained"
            >
            Comments
            </Button>
        </Grid>
      </Grid>
 </>
        </Box>
      </Modal>
    </div>
  );
}
export default ReactModal
