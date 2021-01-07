import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Day1Page from '../screens/Day1Page/Day1Page'
import Day2Page from '../screens/Day2Page/Day2Page'
import Day3Page from '../screens/Day3Page/Day3Page'
import Day4Page from '../screens/Day4Page/Day4Page'
import HomePage from '../screens/HomePage/HomePage'

const Router = () => {
    return (    
        <BrowserRouter>
            <Switch>
                <Route exact path = {'/'}>
                    <HomePage />
                </Route>
                <Route exact path = {'/1'}>
                    <Day1Page />
                </Route>
                <Route exact path = {'/2'}>
                    <Day2Page />
                </Route>
                <Route exact path = {'/3'}>
                    <Day3Page />
                </Route>
                <Route exact path = {'/4'}>
                    <Day4Page />
                </Route>
                <Route>
                    <HomePage />
                </Route>
            </Switch>
        </BrowserRouter>   
    )
}

export default Router