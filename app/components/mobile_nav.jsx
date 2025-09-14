'use client'
import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import Search from '@mui/icons-material/Search';
import Image from 'next/image';

import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import AccordionGroup from '@mui/joy/AccordionGroup';

import Social1 from './assets/email1.svg'
import Social2 from './assets/linkedin1.svg'
import Social3 from './assets/twitter.svg'
import Social4 from './assets/github1.svg'

const socials = [
    {
        src: Social1,
        name: 'Email',
        link: "mailto:shadow459434@gmail.com"
    },
    {
        src: Social2,
        name: 'Linkedin',
        link: "https://www.linkedin.com/in/abhishek-jangid-079b9726a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        src: Social3,
        name: 'Twitter',
        link: "https://x.com/AbhishekJa94069?t=T_vVqs7Bbcj1GjLx0tei4g&s=08"
    },
    {
        src: Social4,
        name: 'Github',
        link: "https://github.com/techshadow01"
    },
]

const works = [
    {
        name: 'Ai image genearter',
        link: ''
    },
    {
        name: 'Ai chatbot'
    },
    {
        name: 'Music website'
    },
]

const mobile_nav = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className='sm:hidden '>
            <IconButton variant="outlined" color="neutral" onClick={() => setOpen(true)}>
                <Menu className='dark:text-white' />
            </IconButton>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <Box className='flex items-center justify-between w-[100%] mx-auto px-2 dark:bg-[#1F1F1F]'>
                    <div className='text-3xl font-bold text-[#1976D2] text-center mb-2' >Swing</div>
                    <ModalClose id="close-icon" sx={{ position: 'initial' }} />
                </Box>

                <List
                    className='text-xl font-semibold dark:bg-[#1F1F1F] dark:text-white'
                >
                    <a href="./"><ListItemButton className='dark:text-white'>Home</ListItemButton></a>
                    <a href="https://abhi-profile.vercel.app/" target='_blank'>
                        <ListItemButton className='dark:text-white' >Portfolio</ListItemButton>
                    </a>

                    <AccordionGroup className='dark:text-white'
                        transition="10000s">
                        <Accordion >
                            <AccordionSummary className='text-xl font-semibold ' >
                                <div className='dark:text-white'>Socials:</div>
                            </AccordionSummary>
                            <AccordionDetails>
                                {socials.map((item, index) => {
                                    return <div key={index} className='font-normal dark:text-white' >
                                        <a href={item.link} target='_blank'>
                                            <ListItemButton className='dark:text-white'>
                                                <Image src={item.src} alt="" width={25} />
                                                <div>{item.name}</div>
                                            </ListItemButton>
                                        </a>
                                    </div>
                                })}
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary className='text-xl font-semibold' >
                                <div className=' dark:text-white'>other Works:</div>
                            </AccordionSummary>
                            <AccordionDetails>
                                {works.map((item, index) => {
                                    return <div key={index} className='font-normal dark:text-white' >
                                        <ListItemButton className='dark:text-white'>
                                            <div>{item.name}</div>
                                        </ListItemButton>
                                    </div>
                                })}
                            </AccordionDetails>
                        </Accordion>
                    </AccordionGroup>

                </List>
            </Drawer>
        </div >
    );
}

export default mobile_nav