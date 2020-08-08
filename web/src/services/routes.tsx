import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from '../pages/Landing'
import TeachersList from '../pages/TeachersList'
import TeacherForm from '../pages/TeacherForm'

const Routes = () => (
  <BrowserRouter>
    <Route path="/" exact component={Landing} />
    <Route path="/estudar" component={TeachersList} />
    <Route path="/lecionar" component={TeacherForm} />
  </BrowserRouter>
)

export default Routes
