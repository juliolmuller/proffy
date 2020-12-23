import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './pages/Landing'
import TeachersList from './pages/TeachersList'
import TeacherForm from './pages/TeacherForm'

const Routes: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/estudar" component={TeachersList} />
      <Route path="/lecionar" component={TeacherForm} />
    </Switch>
  </BrowserRouter>
)

export default Routes
