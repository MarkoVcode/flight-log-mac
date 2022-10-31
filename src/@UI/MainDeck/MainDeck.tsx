import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper';
import { Maps, VideoPlayer } from '@UI';
import './style.css'

const MainDeck = () => {
  return (
    <Box component="span" className="deck-container">
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={1}
      >
        <Box component="span" className="deck-main-container">
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="stretch"
            spacing={1}
          >
            <Box component="span" className="deck-contr-container">
              <Paper elevation={3}>
                <VideoPlayer></VideoPlayer>
              </Paper>
            </Box>
            <Box component="span" className="deck-map-container">
              <Maps></Maps>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>

  )
}

export default MainDeck