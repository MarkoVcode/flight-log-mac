import React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { VscSettingsGear } from "react-icons/vsc"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './style.css'

const Controls = () => {
    return (
        <div id="controls-cont">
            <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
            >
                <Box component="span">
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={0.5}
                    >
                        <Button variant="outlined" startIcon={<VscSettingsGear />}></Button>
                        <Button variant="outlined" startIcon={<VscSettingsGear />}></Button>
                        <Button variant="outlined" startIcon={<VscSettingsGear />}></Button>
                        <Button variant="outlined" startIcon={<VscSettingsGear />}></Button>
                    </Stack>
                </Box>
                <Box component="span" className="control-slider-cont">
                    <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" />
                    <input type="text" id="fname" name="fname"></input>
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
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
                </Box>
            </Stack>
        </div>
    )
}

export default Controls