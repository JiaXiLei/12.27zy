import React from 'react';
import ReactDOM from 'react-dom';

import './age/rem'
import './index.less';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Count from '@/pages' //首页组件
import Food from '@/pages/food' //首页组件


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/food' component={Food} />
            <Route path='/' component={Count} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

