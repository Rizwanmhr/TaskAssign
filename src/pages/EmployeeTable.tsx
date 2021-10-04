import React,{useState,useEffect} from 'react'
import { Grid, TextField, Button,makeStyles} from "@material-ui/core";
import {Container,Paper,Box,Typography,TableContainer,Table,TableBody,TableHead,TableRow,TableCell} from '@material-ui/core'

interface GetFullData {
    name: string;
    email: string;
    userId: number;
    phone:number;
    designation: string;
    employeetype:string;
  }
const EmployeeTable = () => {
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
    return (
        <div>
                 {
          getData && getData.map(({name,email,phone,userId,designation,employeetype},index) => {
            
            return(
               <ul>
                   <li style={{listStyle:'none'}} key={userId}>
                   
      <Container>
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
              <TableRow>
              {/* <TableCell>NO.</TableCell> */}
                <TableCell>No.</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>UserId</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Designation</TableCell>
                <TableCell>Employee Type</TableCell>
             </TableRow>
            </TableHead>
           
            <TableBody>
            <TableRow>
                 <TableCell>{index+1}</TableCell>
                 <TableCell>{name}</TableCell>
                 <TableCell>{email}</TableCell>
                 <TableCell>{userId}</TableCell>
                 <TableCell>{phone}</TableCell>
                 <TableCell>{designation}</TableCell>
                 <TableCell>{employeetype}</TableCell>
              </TableRow>
              
            </TableBody>
          
            </Table>
          </TableContainer>
      </Container>
   
                   </li>
               </ul>
            )
            })
        }
        </div>
    )
}

export default EmployeeTable
