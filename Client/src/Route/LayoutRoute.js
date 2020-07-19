/* eslint-disable no-unused-expressions */
import React from 'react';
import { Route } from 'react-router-dom';

const LayoutRoute=props=>{
    const {layout:Layout, component:Component,LayoutProps,...rest}=props;
    
    return(
        <Route
            {...rest}
            render={matchProps=>{
                <Layout {...LayoutProps}>
                    <Component {...matchProps}/>
                </Layout>
            }}
        />
    );
};

export default LayoutRoute;