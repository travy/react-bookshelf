import React from 'react'
import { Route } from 'react-router-dom'
import BookCollectionDashboard from './components/BookCollectionDashboard'
import BookSearchDashboard from './components/BookSearchDashboard'
import BookDashboard from './components/BookDashboard'
import './App.css'

const Routes = (props) => (
    <div className="App">
        <Route exact path='/' component={BookCollectionDashboard} />
        <Route path='/search' component={BookSearchDashboard} />
        <Route path='/book/:book_id' component={BookDashboard} />
    </div>
)

export default Routes
