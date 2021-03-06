import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApplicationFormPage from '../components/ApplicationFormPage/ApplicationFormPage';
import MyTrips from '../components/MyTrips/MyTrips';
import CreateTripPage from '../components/CreateTripPage/CreateTripPage';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import HomePage from '../components/HomePage/HomePage';
import ListTripsPage from '../components/ListTripsPage/ListTripsPage';
import LoginPage from '../components/LoginPage/LoginPage';
import TripDetailsPage from '../components/TripDetailsPage/TripDetailsPage';
import SignupPage from '../components/SignupPage/SignupPage';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route exact path="/form/:id">
                    <ApplicationFormPage />
                </Route>

                <Route exact path="/form/">
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

                <Route exact path="/signup">
                    <SignupPage />
                </Route>

                <Route exact path="/trip">
                    <TripDetailsPage />
                </Route>

                <Route exact path="/mytrips">
                    <MyTrips />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
        
    )
}
  