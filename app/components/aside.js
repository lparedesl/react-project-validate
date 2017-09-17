import React from 'react';

export default class Aside extends React.Component {
    render() {
        return (
            <aside class="sidebar">
                <div class="pro-results">
                    <h6 class="result-count">7 dealers</h6>
                </div>
                <div class="pro-filter">
                    <form action="">
                        <p>Filter</p>
                        <a href="#"><i class="fa fa-question" aria-hidden="true"></i></a>
                        <label for="service-check">
                            <input id="service-check" type="checkbox"/>
                            Service
                        </label>
                        <label for="installation-check">
                            <input id="installation-check" type="checkbox"/>
                            Installation
                        </label>
                        <label for="residential-check">
                            <input id="residential-check" type="checkbox"/>
                            Residential
                        </label>
                        <label for="commercial-check">
                            <input id="commercial-check" type="checkbox"/>
                            Commercial
                        </label>
                    </form>
                </div>
            </aside>
        );
    }
}