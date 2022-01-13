import React from 'react'
import { Players } from './Pages/Players'
import { Training } from './Pages/Training';
import { Lineup } from './Pages/Lineup';
import { Matches } from './Pages/Matches';
import { SignUp } from './Pages/SignUp/SignUp';


const routes = [{ path: "/players", component: <Players /> },
{ path: "/training", component: <Training /> },
{ path: "/lineup", component: <Lineup /> },
{ path: "/matches", component: <Matches /> },
{ path: "/signup", component: <SignUp />},
{ path: "/", component: <SignUp /> },
];

export { routes }