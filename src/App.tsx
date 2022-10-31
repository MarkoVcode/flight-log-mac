import * as React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack'
import { Header, MainDeck, Controls } from '@UI';

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

export default function App() {
  return (
    <Container maxWidth={false}>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={1}
      >
        <Header></Header>
        <MainDeck></MainDeck>
      </Stack>
      <Controls></Controls>
    </Container>
  );
}