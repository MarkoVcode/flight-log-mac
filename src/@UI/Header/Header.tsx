import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton'
import { VscSettingsGear } from "react-icons/vsc"
import { AppConfigModal } from '@UI';
import './style.css'

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const Header = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ clicks: 0 });
  const [date, setDate] = useState("");

  const onConfigurationModalOpen = () => {
    setOpen(true)
  }

  useEffect(() => {
    setInterval(() => {
      var locale = "en-GB"
      var now = new Date()
      var optionsDate = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
      var optionsTime = { timeStyle: 'short' }
      //@ts-ignore
      var date = now.toLocaleDateString(locale, optionsDate)
      //@ts-ignore
      var time = now.toLocaleTimeString(locale, optionsTime)
      //var date = now.getHours() + ':' + now.getMinutes() + '  •  ' + now.getDate() + '-' + (now.getMonth() + 1) + '-' + now.getFullYear();
      setDate(time + '  •  ' + date)
    }, 1000);
  }, [])

  return (
    <header id="app-header">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Box className='logo'>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={0}
          >
            <Box
              component="img"
              sx={{
                height: 36,
                width: 83,
                margin: '4px',
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="The house from the offer."
              src="./logo1.png"
            />
            <Box>
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={0}
              >
                <div className="title-top">Long Range</div>
                <div className="title-bottom">Flight Assistant</div>
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Box className='mode-switch'>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={0}
            className="mode-ctrl"
          >
            <div className="mode">Mode</div>
            <Stack direction="row" spacing={1} alignItems="center">
              <div className="mode-name-left">Player</div>
              <AntSwitch defaultChecked color="warning" inputProps={{ 'aria-label': 'ant design' }} />
              <div className="mode-name-right">Recorder</div>
            </Stack>
          </Stack>
        </Box>
        <Box className='cnf-area'>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={1}
          >
            <Box className='datetime-plhd'>
              <div className="datetime">{date}</div>
            </Box>
            <Box className='settings-plhd'>
              <IconButton onClick={onConfigurationModalOpen} >
                <VscSettingsGear className='header-ico-btn' />
              </IconButton>
            </Box>
          </Stack>
        </Box>
      </Stack>
      <Divider variant="middle" />
      {open && (
        <AppConfigModal
          setOpen={setOpen}
          data={data}
          setData={setData}
          isOpen={data}
          onClose={data}
          sensorsOnOpen={data}
        />
      )}
    </header>
  )
}

export default Header



// <Box>
// <Toolbar className='header-toolbar'>
//   <Button size="small">Subscribe</Button>
//   <Typography
//     component="h2"
//     variant="h5"
//     color="inherit"
//     align="center"
//     noWrap
//   >
//     Blog
//   </Typography>
//   <IconButton>
//     <FaRecordVinyl />
//   </IconButton>
//   <Box className='header-right'>
//     <Box className='datetime-plhd'>
//       <div className="datetime">date $ time</div>
//     </Box>
//     <Box className='config-btn'>
//       <IconButton onClick={onConfigurationModalOpen} >
//         <VscSettingsGear className='header-ico-btn' />
//       </IconButton>
//     </Box>
//   </Box>
// </Toolbar>
// </Box>