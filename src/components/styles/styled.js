import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  header: {

  },
  table: {
    display: 'flex',
    width: '600px',
    height: '600px',
    flexWrap: 'wrap',
    alignSelf: 'center',
    alignContent: 'space-around',
    justifyContent: 'space-between',
  },
  closed: {
    width: '130px',
    height: '130px',
    margin: '0.5em 0 0.5em 0',
    padding: 0,
    cursor: 'pointer',
  },
  opened: {
    width: '130px',
    height: '130px',
    margin: '0.5em 0 0.5em 0',
    padding: 0,
    cursor: 'pointer',
  },
  match: {
    width: '130px',
    height: '130px',
    margin: '0.5em 0 0.5em 0',
    background: 'white',
  }
});

