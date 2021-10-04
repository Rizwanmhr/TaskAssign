import React,{useState,useEffect} from 'react'
import { Grid, TextField, Button,makeStyles} from "@material-ui/core";
import TaskCard from './TaskCard'
interface GetData {
    name: string;
    description: string;
    status:string
   
  }
const CreateTask = () => {
    const [assignTask, setAssignTask] = useState({
        name:'',description:'',status:''
    })
    const [getAllData,setGetAllData] = useState<GetData[]>();
    // const GetAllData = async () => {
    //     try {
    //         const res = await fetch('/task');
    //        const newData = await res.json();
    //        console.log(newData);
    //        setGetAllData(newData)
    //        } catch (error) {
    //          console.log(error)
    //        }
    // }
    // useEffect(() => {
    //     GetAllData()
    // },[])
    let name,value;
    const handleTask = (e:any) => {
        name = e.target.name;
        value = e.target.value;
        setAssignTask({...assignTask,[name]:value})
    }
    const getData = async (e:any) => {
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
    return (
        <div>
        <Grid container justify='center'>
    <Grid item lg={10}>
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
        <Button
        type='submit'
        style={{backgroundColor:'#060b26',color:'#fff'}}
        variant='contained'
        onClick={getData}
        >
        Submit
        </Button>
    </form>
    {
        getAllData && getAllData.map(({name,description,status}) => {
return(
    <ul>
        <li>
              
                    {name}
                    {description}
                    {status}
                  
        </li>
    </ul>
)
        })
    }
    </Grid>
    </Grid>
    <TaskCard />
    </div>
    )
}

export default CreateTask
