import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApplicationFormPage from '../components/ApplicationFormPage/ApplicationFormPage';
import Contact from '../components/Contact/Contact';
import CreateTripPage from '../components/CreateTripPage/CreateTripPage';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import HomePage from '../components/HomePage/HomePage';
import ListTripsPage from '../components/ListTripsPage/ListTripsPage';
import LoginPage from '../components/LoginPage/LoginPage';
import TripDetailsPage from '../components/TripDetailsPage/TripDetailsPage';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route exact path="/form">
                    <ApplicationFormPage />
                </Route>

                <Route exact path="/create">
                    <CreateTripPage />
                </Route>

                <Route exact path="/list">
                    <ListTripsPage />
                </Route>

                <Route exact path="/login">
                    <LoginPage />
                </Route>

                <Route exact path="/trip">
                    <TripDetailsPage />
                </Route>

                <Route exact path="/contact">
                    <Contact />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
        
    )
}
  