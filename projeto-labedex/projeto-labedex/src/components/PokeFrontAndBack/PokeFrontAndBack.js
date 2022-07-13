import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PokeCard from '../PokeCard/PokeCard';
import { PropaneSharp } from '@mui/icons-material';
import { DivImage } from './styles';

export default function PokeFrontAndBack(props) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Frente" value="1" />
            <Tab label="Traseira" value="2" />
            <Tab label="Shiny" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <DivImage url={props.imageFront} />
        </TabPanel>
        <TabPanel value="2">
            <DivImage url={props.imageBack} />
        </TabPanel>
        <TabPanel value="3">
            <DivImage url={props.imageShiny} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
