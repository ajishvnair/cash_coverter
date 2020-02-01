import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Container from '../components/Container';
import ColorPicker from './../playground/ColorPicker'

const AppRouter=()=>(
    <BrowserRouter>
    <Route path="/user/:id" component={Container} exact={true}/>
    <Route path="/playground" component={ColorPicker} exact={true}/>
    </BrowserRouter>
);
export default AppRouter;