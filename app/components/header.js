import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <header class="masthead masthead-subgrid">
                <div class="company-logo">
                    <a href="#">
                        <img src="../assets/pool-pros-logo.png" alt="Pool Pros logo" title="Pool Pros"/>
                        <h1 class="screen-reader-text">Pool Pro app</h1>
                    </a>
                </div>
                <div class="pool-pro-form">
                    <a class="find-pro" href="#"><i class="fa fa-map-marker" aria-hidden="true"></i> Find A Pro</a>
                </div>
                <nav class="main-nav" role="navigation">
                   <button class="menu-icon" aria-expanded="false" aria-controls="menu"></button>
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