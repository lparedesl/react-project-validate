import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="colophon">
                <div className="footer-base">
                    <img src="../assets/pool-pros-logo-footer.png" alt="Pool Pros logo"/>
                    <div className="social">
                        <ul>
                            <li>connect with us</li>
                            <li>
                                <a aria-label="Facebook" type="button" className="tabbing-button" tabIndex="-1"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a aria-label="Twitter" type="button" className="tabbing-button" tabIndex="-1"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a aria-label="YouTube" type="button" className="tabbing-button" tabIndex="-1"><i className="fa fa-youtube" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom-links"><a href="#">2017 Pool Pros</a> <span>|</span> <a href="">Private Policy</a> <span>|</span> <a href="">Terms and Conditions</a></div>
            </footer>
        );
    }
}