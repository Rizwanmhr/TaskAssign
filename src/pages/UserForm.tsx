import React,{useState,useEffect} from 'react'
import { Grid, TextField, Button,makeStyles} from "@material-ui/core";
const useStyles = makeStyles({
    field:{
        // marginTop:'20',
        // marginBottom:'20',
        // display:'block'
    }
})
interface GetFullData {
    name: string;
    email: string;
    userId: number;
    phone:number;
    designation: string;
    employeetype:string;
  }
const UserForm = () => {
    const [user, setUser] = useState({
        name:'',email:'',userId:'',
        designation:'',employeetype:'',phone:''
    });
  
    const [getData,setGetData] = useState<GetFullData[]>();
    const getAllData = async () => {
    try {
     const res = await fetch('/employee');
    const newData = await res.json();
    console.log(newData);
    setGetData(newData)
    } catch (error) {
      console.log(error)
    }
    }
      useEffect(() => {
        getAllData();
      },[])
   
   
    let name,value;
    const handleInput = (e:any) => {
 name = e.target.name;
 value = e.target.value;
 setUser({...user,[name]:value})
    }

    const submitData = async (e:any) => {
       e.preventDefault();
       console.log(user)

    //    const {name,email,userId,designation,employeetype,phone} = user
      const res = await fetch('/employee', {
          method:'POST',
          headers:{
         'Content-Type': 'application/json'
          },
body:JSON.stringify(user)
      })
    const data = await res.json()
    console.log(data)
    if(data.status === 422 || !data){
        window.alert('Invalid Registration');
        console.log('Invalid Registration')
    }else{
        window.alert('Registration Successfully');
        console.log('Registration Successfully')
        
    }
    }
    
   const classes = useStyles()
    return (
        <div>
        <Grid container justify='center'>
        <Grid item lg={10}>
        <form method='POST' noValidate autoComplete='off'>
        <TextField
        className={classes.field}
        label="Name"
        name='name'
        id='name'
        style={{color:'#060b26'}}
        value={user.name}
        onChange={handleInput}
        
        fullWidth
        required
        />
         <TextField
        className={classes.field}
        label="UserID"
        name='userId'
        id='userId'
        type='number'
        style={{color:'#060b26'}}
        value={user.userId}
        onChange={handleInput}
        fullWidth
        required
        />
        <TextField
        className={classes.field}
        label="Email"
        name='email'
        id='email'
        value={user.email}
        onChange={handleInput}
        style={{color:'#060b26'}}
        fullWidth
        required
        />
           <TextField
        className={classes.field}
        label="Phone"
        name='phone'
        id='phone'
        style={{color:'#060b26'}}
        value={user.phone}
        onChange={handleInput}
        fullWidth
        required
        />
             <TextField
        className={classes.field}
        label="Designation"
        name='designation'
        id='designation'
        style={{color:'#060b26'}}
        value={user.designation}
        onChange={handleInput}
        fullWidth
        required
        />
         <TextField
        className={classes.field}
        label="Employee Type"
        name='employeetype'
        id='employeetype'
        style={{color:'#060b26'}}
        value={user.employeetype}
        onChange={handleInput}
        fullWidth
        required
        />
         <Button
        type='submit'
        style={{backgroundColor:'#060b26',color:'#fff'}}
        variant='contained'
        onClick={submitData}
        >
        Submit
        </Button>
        </form>
        {
          getData && getData.map(({name,email,phone,userId,designation,employeetype}) => {
            // const {name,email,phone,userId,designation,employeetype} = currValue;
            return(
               <ul>
                   <li>
                   {userId}
                    {name} 
                    {email}
                    {phone}
                    {employeetype}
                    {designation}
                   </li>
               </ul>
            )
            })
        }
        </Grid>
        </Grid>
        <Grid container justify='center'> 
       <Grid item lg={10}>
           
       </Grid>
        </Grid>

        </div>
        
    )
}

export default UserForm
