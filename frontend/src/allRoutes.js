import React from 'react'
import { Players } from './Pages/Players'
import { Training } from './Pages/Training';
import { Lineup } from './Pages/Lineup';
import { Matches } from './Pages/Matches';
import { SignUp } from './Pages/SignUp/SignUp';
import PlayerUser from './Pages/PlayerUser/PlayerUser';
import { SignIn } from './Pages/SignIn/SignIn';
import Admin from './Pages/Admin/Admin';
import { SignUpMessage } from './components/SignUpMessage/SignUpMessage';
import { AllPlayers } from './Pages/AllPlayers';
import { TeamName } from './components/TeamName/TeamName';

const authroutes = [{ path: "/players", component: <Players /> },
{ path: "/training", component: <Training /> },
{ path: "/lineup", component: <Lineup /> },
{ path: "/matches", component: <Matches /> },
{ path: "/allplayers", component: <AllPlayers /> },

];

const authroutesPl = [
    { path: "/users/:id", component: <PlayerUser /> },
    { path: "/Admin", component: <Admin /> },

]

const routes = [
    { path: "/", component: <SignUp /> },
    { path: "/signIn", component: <SignIn /> },
    { path: "/signUpMessage", component: <SignUpMessage /> },
    { path: "/teamName", component: <TeamName /> }

];

export { authroutes, routes, authroutesPl }