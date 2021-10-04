import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { BorderStyle } from '@material-ui/icons';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({

side:{
    width:'250px',
    height:'100vh',
    backgroundColor:'#060b26',
    alignItems:'center'
},
}),
);
export default useStyles