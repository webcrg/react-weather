import { Box, Tabs, Tab } from '@mui/material';
import React from 'react';
import NowPanel from './now-panel/now-panel';
import { DetailsPanel } from './details-panel';
import { ForecastPanel } from './forecast-panel';

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
  dir?: string;
  overflowY?: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, overflowY, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`weather-tabpanel-${index}`}
      aria-labelledby={`weather-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, height: '400px', overflowY: overflowY ?? 'inherit' }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `weather-tab-${index}`,
    'aria-controls': `weather-tabpanel-${index}`,
  };
}

function TabSection() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <TabPanel value={value} index={0}>
        <NowPanel />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DetailsPanel />
      </TabPanel>
      <TabPanel value={value} index={2} overflowY="scroll">
        <ForecastPanel />
      </TabPanel>
      <Box sx={{ borderTop: 1, borderColor: 'divider', marginTop: '20px' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
          sx={{
            '.MuiTabs-indicator': {
              top: 0,
            },
          }}
        >
          <Tab label="Now" {...a11yProps(0)} />
          <Tab label="Details" {...a11yProps(1)} />
          <Tab label="Forecast" {...a11yProps(2)} />
        </Tabs>
      </Box>
    </>
  );
}

export { TabSection };
