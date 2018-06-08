import React from 'react'
import { Route, Link } from 'react-router-dom'
import BookSearchDashboard from './BookSearchDashboard'
import './App.css'

const Routes = (props) => (
    <div className="App">
        <Route exact path='/' render={() => (
            <Link className='search' to='/search'>Search</Link>
        )} />
        <Route path='/search' component={BookSearchDashboard} />
    </div>
)

export default Routes
