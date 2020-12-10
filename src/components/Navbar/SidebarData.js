import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import tombol from './Tombol';

export const SidebarData=[
    {
     title: 'Home',
     path: '/',
     icon: <AiIcons.AiFillHome/>,
     cName: 'nav-text'
    },
    {
        title: 'Autorization',
        path: '/reports',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    },
    {
        title: 'Setting',
        path: '/products',
        icon: <FaIcons.FaCogs/>,
        cName: 'nav-text'
    },
    {
        title: 'Transaction',
        path: '/file',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text',
        event: tombol.handleClick
    },
    // {
    //     title: 'Message',
    //     path: '/messages',
    //     icon: <FaIcons.FaEnvelopeOpen/>,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'Support',
    //     path: '/support',
    //     icon: <IoIcons.IoMdHelpCircle/>,
    //     cName: 'nav-text'
    // },

       

]