import React, { FC, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
//import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import './style.css'

const Modal = styled.div`
  max-width: 662px;
  background-color: white;
  position: fixed;
  top: 48px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 332px);
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    left: 0px;
    margin: 0px 10px;
  }
`;
export const ModalContent = styled.div`
  overflow: auto;
  min-height: 200px;
  padding: 0px 40px;
  padding-bottom: 80px;
`;
export const ModalFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;
export const ConfirmButton = styled.div`
  margin: 10px;
  color: white;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: blue;
`;
const ModalShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;
const ModalBanner = styled.div`
  margin-bottom: 20px;
  background-color: rgb(95,99,104);
  color: white;
  padding: 10px;
`;
const Input = styled.input`
  text-align: right;
  width: 200px;
  margin-left: 15px;
`;

const MainButton = styled.button`
`;

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

type AppConfigModalProps = {
    setOpen: any,
    data: any,
    setData: any
    isOpen: any,
    onClose: any,
    sensorsOnOpen: any
};

const AppConfigModal: FC<AppConfigModalProps> = (props) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [settings, setSettings] = useState(
        {
            'map': { 'provider': 'googlemaps', 'api': { 'key': 'demo-key' } },
            'sampling': '5',
            'dataSource': 'radio_lua'
        })

    const samplingOptions = [
        { value: '10', text: '10 Hz' },
        { value: '5', text: '5 Hz' },
        { value: '1', text: '1 Hz' }
    ];

    const mapProviders = [
        { value: 'googlemaps', text: 'Google Maps' }
    ]

    const dataSources = [
        { value: 'radio_lua', text: 'Radio LUA+UART' }
    ]

    const onSamplingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        //@ts-ignore
        settings[event.target.id] = event.target.value
        setSettings(settings)
    };

    const onAPIKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //@ts-ignore
        settings.map.api.key = event.target.value
        setSettings(settings)
    };

    const onSaveHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        localStorage.fr_basicSettings = JSON.stringify(settings)
        console.log(settings);
        //take the state and save in appropriate settings the file
        props.onClose()
        // const button: HTMLButtonElement = event.currentTarget;
        // setClickedButton(button.name);
    }

    useEffect(() => {
        if (localStorage.fr_basicSettings !== null && localStorage.fr_basicSettings !== undefined) {
            setSettings(JSON.parse(localStorage.fr_basicSettings))
        }
    }, []);

    const content = new Array(1).fill(
        <p>
            Edit the clicks below by clicking on the number input or typing in your
            own value.
        </p>,
    );
    return ReactDOM.createPortal(
        <>
            <ModalShadow />
            <Modal>
                <ModalBanner>Settings</ModalBanner>
                <ModalContent>
                    <Box
                        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
                    >
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            sx={{ borderRight: 1, borderColor: 'divider' }}
                        >
                            <Tab label="General" {...a11yProps(0)} />
                            <Tab label="Audio/Video" {...a11yProps(1)} />
                            <Tab label="Telemetry" {...a11yProps(2)} />
                            <Tab label="Sensors" {...a11yProps(3)} />
                        </Tabs>
                        <TabPanel value={value} index={0}>

                            <Box>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={10}
                                            label="Age"
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={20}
                                            label="Age"
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <FormControl fullWidth>
                                    <InputLabel id="map-provider">Map Provider</InputLabel>
                                    <Select id={'mapProviders'} defaultValue={settings.map.provider}>
                                        {mapProviders.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.text}
                                            </option>
                                        ))}
                                    </Select>
                                    <InputLabel id="demo-simple-select-label">Google Map Key</InputLabel>
                                    <Input onChange={onAPIKeyChange} defaultValue={settings.map.api.key} />
                                    <InputLabel id="demo-simple-select-label">Sampling Frequency</InputLabel>
                                    {/*
                                    //@ts-ignore */}
                                    <Select labelId="demo-simple-select-label" label="Sampling" id={'sampling'} defaultValue={settings.sampling} onChange={onSamplingChange}>
                                        {samplingOptions.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.text}
                                            </option>
                                        ))}
                                    </Select>
                                    <InputLabel id="demo-simple-select-label">Data Source Type</InputLabel>
                                    <Select labelId="demo-simple-select-label" label="Data" id={'dataSource'} defaultValue={settings.dataSource}>
                                        {dataSources.map(option => (
                                            <option key={option.value} value={option.value}>
                                                {option.text}
                                            </option>
                                        ))}
                                    </Select>
                                    <TextField onClick={props.sensorsOnOpen}> Sensors Aliasing and Typing more...</TextField>
                                    <Button variant="contained">Check Device</Button>
                                    <Button variant="outlined">I do not have any device</Button>
                                </FormControl>
                            </Box>

                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Item Three
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            Item Four
                        </TabPanel>
                    </Box>

                </ModalContent>
                <ModalFooter>
                    {/*
                            //@ts-ignore */}
                    <ConfirmButton onClick={onSaveHandler}>
                        Save
                    </ConfirmButton>
                    <Button onClick={props.onClose}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>,
        //@ts-ignore
        document.getElementById('config-modal'),
    );
}

export default AppConfigModal