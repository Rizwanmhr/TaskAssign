import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { BorderStyle } from '@material-ui/icons';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading:{
  marginTop:'2rem'
    },
    duedate:{
      marginTop:'2rem'
    },
    timeicon:{
      display:'flex'
    },
    secinput:{
      width:'100%',
      height:'70px',
      marginTop:'1rem'
    },
    plusbtn:{
      marginTop:'3rem'
    },
    thirdinp:{
    marginTop:'2rem'
    },
    selectName:{
      width:'100%',
      border:'3px solid #060b26'
    },
    optionName:{
      backgroundColor:'#060b26',
      color:'#fff',
      '&:hover':{
        backgroundColor: 'red',
        color:'black'
        },
},
userid:{
  marginTop:'1rem'
}
   


}),
);
export default useStyles