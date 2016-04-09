'use strict'

import React from 'react'
import AddTodoContainer from '../containers/AddTodoContainer'
import FilteredTodoList from '../containers/FilteredTodoList'
import Filters from './Filters'

class App extends React.Component {

  render() {
    return (
      <div>
        <AddTodoContainer />
        <FilteredTodoList />
      </div>
    )
  }

}

export default App
