import React from 'react'
import {Container,Paper,Box,Typography,TableContainer,Table,TableBody,TableHead,TableRow,TableCell} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// const useStyles = makeStyles((theme) = ({
// root:{
//   width:'100vw',
//   height:'100vh',
//   backgroundColor: theme.palette.grey[300],
//   paddingTop: theme.spacing(5)
// }
// }))
const Tablebox = () => {
  // const classes = useStyles()
  return (
    <div>
      <Container>
        <TableContainer>
        <Table>
            <TableHead>
              <TableRow>
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
                 <TableCell></TableCell>
                 <TableCell>ali12@gmail.com</TableCell>
                 <TableCell>1234</TableCell>
                 <TableCell>0301458436</TableCell>
                 <TableCell>Developer</TableCell>
                 <TableCell>Job</TableCell>
              </TableRow>
              
            </TableBody>
          
            </Table>
          </TableContainer>
      </Container>
    </div>
  )
}

export default Tablebox
