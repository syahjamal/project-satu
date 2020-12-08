import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

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
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title: 'Setting',
        path: '/products',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text'
    },
    {
        title: 'Transaction',
        path: '/team',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
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