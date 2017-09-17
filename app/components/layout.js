import React from 'react';

import Header from './header';
import Landing from './landing';
import Footer from './footer';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Landing/>
                <Footer/>
            </div>
        );
    }
}