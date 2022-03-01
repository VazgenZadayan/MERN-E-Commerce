import { makeStyles } from "@mui/styles";

export default makeStyles({
  container: {
    minHeight: '78vh',
    maxHeight: '100vh',
  },
  isEmpty: {
    background: 'rgb(145 145 145 / 21%)',
    width: 'fit-content',
    padding: '20px',
  },
  tableContainer: {
    maxHeight: '70vh',
    overflow: 'auto'
  }
});