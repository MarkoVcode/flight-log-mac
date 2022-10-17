import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
//import ProTip from './ProTip';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ReactPlayer from 'react-player'

//https://github.com/nwjs/nw.js/wiki/Save-persistent-data-in-app
var path = require("path");
var pathstr = path.dirname(process.execPath);
console.log(pathstr);
//@ts-ignore
console.log(nw.App.dataPath)

// @ts-ignore
chrome.serial.getDevices(function (ports) {
  for (let port of ports) {
    if (port.vendorId) {
      console.log(port);
    }
  }
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      https://mui.com/material-ui/react-grid/#RowAndColumnSpacing.tsx
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth={false}>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          <Grid item xs={6}>
            <Item><ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /></Item>
          </Grid>
          <Grid item xs={6}>
            <Item><ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /></Item>
          </Grid>
          <Grid item xs={6}>
          <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
          </Grid>
          <Grid item xs={6}>
          <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

/* <Box sx={{ my: 4 }}>
<Typography variant="h4" component="h1" gutterBottom>
  Create React App example with TypeScript
</Typography>
<ProTip />
<Copyright />
</Box> */