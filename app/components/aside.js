import React from 'react';

export default class Aside extends React.Component {
    render() {
        return (
            <aside className="sidebar">
                <div className="pro-results">
                    <h6 className="result-count">7 dealers</h6>
                </div>
                <div className="pro-filter">
                    <form action="">
                        <p>Filter</p>
                        <a href="#"><i className="fa fa-question" aria-hidden="true"></i></a>
                        <label htmlFor="service-check">
                            <input id="service-check" type="checkbox"/>
                            Service
                        </label>
                        <label htmlFor="installation-check">
                            <input id="installation-check" type="checkbox"/>
                            Installation
                        </label>
                        <label htmlFor="residential-check">
                            <input id="residential-check" type="checkbox"/>
                            Residential
                        </label>
                        <label htmlFor="commercial-check">
                            <input id="commercial-check" type="checkbox"/>
                            Commercial
                        </label>
                    </form>
                </div>
            </aside>
        );
    }
}