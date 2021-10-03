
import React from 'react'
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import CloseIcon from '@material-ui/icons/Close';
import Home from '@material-ui/icons/Home';
import { BsPencilSquare } from "react-icons/bs";
import { BsPersonCheckFill } from "react-icons/bs";
export const SidebarData = [
 {
     title:"Home",
     path:'/',
     icon:<Home />,
     cName:'/nav-text'
 },
 {
    title:"UserForm",
    path:'/form',
    icon:<BsPersonCheckFill />,
    cName:'/nav-text'
},
 {
    title:"Create",
    path:'/create',
    icon:<BsPencilSquare />,
    cName:'/nav-text'
},
{
    title:"Task",
    path:'/task',
    icon:<BsPersonCheckFill />,
    cName:'/nav-text'
},

]
