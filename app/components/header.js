import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <header className="masthead masthead-subgrid">
                <div className="company-logo">
                    <a href="#">
                        <img src="../assets/pool-pros-logo.png" alt="Pool Pros logo" title="Pool Pros"/>
                        <h1 className="screen-reader-text">Pool Pro app</h1>
                    </a>
                </div>
                <div className="pool-pro-form">
                    <a className="find-pro" href="#"><i className="fa fa-map-marker" aria-hidden="true"></i> Find A Pro</a>
                </div>
                <nav className="main-nav" role="navigation">
                   <button className="menu-icon" aria-expanded="false" aria-controls="menu"></button>
                    <ul>
                        <li><a href="#">Pools &amp; Spas</a></li>
                        <li><a href="#">Supplies</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">Services</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}