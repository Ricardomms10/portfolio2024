import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import style from '../styles/Choice.module.scss';
import WebProjects from '@/components/WebProjects';

const Choice: React.FC = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className={style.container}>
            <h1>PROJETOS</h1>
            <Box className={style.buttonGroup} sx={{ width: '100%' }}>
                <TabContext value={value}>
                    <Box>
                        <TabList
                            onChange={handleChange}
                            aria-label="Tabs de projetos"
                            textColor="secondary"
                            indicatorColor="secondary"
                        >
                            <Tab
                                label="Web Developer"
                                value="1"
                                sx={{
                                    color: '#a64af5',
                                    fontSize: {
                                        xs: '1rem',
                                        sm: '1rem',
                                        md: '1.5rem',
                                    },
                                    fontWeight: 'bold',
                                    '&.Mui-selected': {
                                        color: '#7b1fa2',
                                    },
                                }}
                            />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <WebProjects />
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    );
};

export default Choice;
