"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react"
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export function ThemeSwitcher() {
    const [theme, settheme] = useState(true)

    useEffect(() => {
        const ltheme = JSON.parse(localStorage.getItem('theme'));
        { ltheme && document.getElementById('themeswitch').classList.replace('light', 'dark') }
        settheme(!ltheme)
    }, [])



    const handletheme = () => {
        settheme(!theme)
        { !theme && document.getElementById('themeswitch').classList.replace('dark', 'light') }
        { theme && document.getElementById('themeswitch').classList.replace('light', 'dark') }
        localStorage.setItem('theme', JSON.stringify(theme))
    }
    return (
        <motion.div
            whileTap={{ backgroundColor: '#D0DDEA' }}
            className='bg-transparent border border-white p-1 rounded-md flex items-center justify-center cursor-pointer' onClick={handletheme}>
            {!theme ? <DarkModeIcon className="text-white" /> : <LightModeIcon className="text-white" />}
        </motion.div>
    )
};