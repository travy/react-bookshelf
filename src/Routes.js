import React from 'react'
import { Route } from 'react-router-dom'
import BookCollectionDashboard from './BookCollectionDashboard'
import BookSearchDashboard from './BookSearchDashboard'
import './App.css'

const Routes = (props) => (
    <div className="App">
        <Route exact path='/' component={BookCollectionDashboard} />
        <Route path='/search' component={BookSearchDashboard} />
    </div>
)

export default Routes
