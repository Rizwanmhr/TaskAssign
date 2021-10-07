import React, { useEffect, useState } from "react";
import { Grid, useTheme, Typography, Button } from "@material-ui/core";
import useStyles from "./TaskDescription.style";
import AlarmIcon from "@mui/icons-material/Alarm";
import TextField from '@material-ui/core/TextField'
import AddIcon from "@mui/icons-material/Add";
//set typescript state to assign task to user
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
const TaskDescription = () => {
  const [myTask, setMyTask] = useState<string>();
  const [assigntask, setAssignTask] = useState<assignTask[]>();
  const [userTask, setuserTask] = useState<string>()
  const [userid, setuserId] = useState<string>()
  //get task
  const toGetAssignTask = async () => {
    const assign = await (await fetch("/task")).json();
    console.log(assign);
    // const newAssign = await assign;
    setAssignTask(assign);
  };
  useEffect(() => {
    toGetAssignTask();
  }, []);
  const classes = useStyles();
//frontEnd Designing
  return (
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
    
      <Typography className={classes.heading}>
        <Grid container justify="flex-start">
          <Grid item lg={2}>
            <Typography>Assignee</Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography>{myTask}</Typography>
          </Grid>
          
          <Grid item lg={2}>
            <Typography>
              <Typography style={{textAlign:'center'}}>Recently Assigned</Typography>
              <select
              className={classes.selectName}
                value={myTask}
                onChange={(event) => {
                  setMyTask(event.target.value);
                
                }}
              >
                {assigntask?.map(({ name,_id }) => {
                  return (
                    <>
                      <option className={classes.optionName} key={_id} value={name}>{name}</option>
                      
                    </>
                  );
                })}
              </select>
            
              {/* {JSON.stringify(assigntask,null,4)} */}
            </Typography>
          </Grid>
        </Grid>
      </Typography>
      <Typography className={classes.userid}>
      <Grid container justify="flex-start">
          <Grid item lg={2}>
              <Typography>{userid}</Typography>
          </Grid>
          <Grid item lg={2}>
         <Typography style={{textAlign:'center'}}>User Id</Typography>
         <select className={classes.selectName} value={userid} onChange={(e) => {
             setuserId(e.target.value)
         }}>
             {
                assigntask?.map(({userId,_id}) => {
                return(
                <>
            <option className={classes.optionName}  key={_id} value={userId}>{userId}</option>
                </>
                )
                 })
             }
         </select>
          </Grid>
      </Grid>
      </Typography>
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
        <Grid container justify="flex-start">
          <Grid item lg={2}>
            <Typography>Projects</Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography>{userTask}</Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography style={{textAlign:'center'}}>Add to projects</Typography>
            <select className={classes.selectName} value={userTask} onChange={(e) => {
                setuserTask(e.target.value)
            }}>
                {assigntask && assigntask.map(({ projects,_id }) => {
                  return (
                    <>
                      <option className={classes.optionName} key={_id} value={projects}>{projects}</option>
                    </>
                  );
                })}
            </select>
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
              placeholder="Add more detailsto this task"
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
  );
};
export default TaskDescription;
