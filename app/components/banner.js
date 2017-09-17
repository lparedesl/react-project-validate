import React from 'react';

export default class Banner extends React.Component {
    render() {
        return (
            <div className="banner banner-subgrid">
                <div className="hero">
                    <h2>Is your pool ready for the summer?</h2>
                    <h5>A pool pro is ready to help</h5>
                    <hr className="short-divider"/>
                    <p>Choose a pro close to home from the list below</p>
                </div>
                
                {/* Need to fix SVG recognition */}
                {/*
                <div className="steps steps-subgrid">
                    <div className="step1">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                        viewBox="0 0 40 40" width="40" height="40">
                            <g>
                                <circle style="fill:url(#toning);stroke:#083D8C;stroke-width:3;stroke-miterlimit:10;" cx="20" cy="20" r="18">
                                </circle>
                                <text x="50%" y="50%" text-anchor="middle" stroke="#46D6D6" stroke-width="2px" dy=".3em">1</text>
                            </g>
                        </svg>
                        <h3>Choose A Pro</h3>
                    </div>
                    <div className="step2">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                        viewBox="0 0 40 40" width="40" height="40">
                            <g>
                                <circle style="fill:url(#toning);stroke:#083D8C;stroke-width:3;stroke-miterlimit:10;" cx="20" cy="20" r="18">
                                </circle>
                                <text x="50%" y="50%" text-anchor="middle" stroke="#46D6D6" stroke-width="2px" dy=".3em">2</text>
                            </g>
                        </svg>
                        <h3>Contact A Pro</h3>
                    </div>
                    <div className="step3">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                        viewBox="0 0 40 40" width="40" height="40">
                            <g>
                                <circle style="fill:url(#toning);stroke:#083D8C;stroke-width:3;stroke-miterlimit:10;" cx="20" cy="20" r="18">
                                </circle>
                                <text x="50%" y="50%" text-anchor="middle" stroke="#46D6D6" stroke-width="2px" dy=".3em">3</text>
                            </g>
                        </svg>
                        <h3>A Pro Visits</h3>
                    </div>
                </div>
                */}
                
                <div className="water-divide" aria-hidden="true"></div>
            </div>
        );
    }
}