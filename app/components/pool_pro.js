import React from 'react';
import {dealers} from '../dealers.json';
import _ from 'lodash';

export default class Aside extends React.Component {
    renderListResult() {
        return dealers.map(({data}) => {
            return (
                <div className="list-result" key={data.companyID}>
                    <h4 className="pool-pro-name">{data.name}</h4>
                    <hr/>
                    <h5 className="pool-pro-phone"><i className="fa fa-phone" aria-hidden="true"></i><span className="mobile-call">Tap to call </span>{data.phone1}</h5>
                    <p><em>Can't talk now?, Click below to send email.</em></p>
                    <a className="pro-email" href="#"><i className="fa fa-envelope" aria-hidden="true"></i>Contact This Pro</a>
                    {this.renderBusinessHours(data.weekHours)}
                    {this.renderListFooter(data.certifications)}
                </div>
            )
        })
    }

    renderBusinessHours(weekHours) {
        let found = false;
        const w = _.values(weekHours);
        let wk = "Closed";
        for (let i = 0; i < 5 && !found; i++) {
            if (w[i].length > 0) {
                wk = w[i];
                found = true;
            }
        }

        const sat = weekHours.sat.length > 0 ? weekHours.sat : "Closed";
        const sun = weekHours.sun.length > 0 ? weekHours.sun : "Closed";

        return (
            <ol>
                <li><strong>Business Hours</strong></li>
                <li>Weekdays: {wk}</li>
                <li>Saturdays: {sat}</li>
                <li>Sundays: {sun}</li>
            </ol>
        )
    }

    renderListFooter(certifications) {
        let c1 = [];
        let c2 = [];

        const c1Limit = Math.min(certifications.length, 2);

        for (let i = 0; i < c1Limit; i++) {
            let icon;
            switch(certifications[i]) {
                case "Installation Pro":
                    icon = "fa fa-star";
                    break;

                case "Commercial Pro":
                    icon = "fa fa-star";
                    break;

                case "Residential Pro":
                    icon = "fa fa-home";
                    break;

                case "Service Pro":
                    icon = "fa fa-users";
                    break;
            }
            const obj = {
                name: certifications[i],
                icon: icon
            };
            c1.push(obj);
        }

        if (certifications.length > 2) {
            for (let i = 2; i < certifications.length; i++) {
                let icon;
                switch (certifications[i]) {
                    case "Installation Pro":
                        icon = "fa fa-star";
                        break;

                    case "Commercial Pro":
                        icon = "fa fa-star";
                        break;

                    case "Residential Pro":
                        icon = "fa fa-home";
                        break;

                    case "Service Pro":
                        icon = "fa fa-users";
                        break;
                }
                const obj = {
                    name: certifications[i],
                    icon: icon
                };
                c2.push(obj);
            }
        }

        return (
            <div className="list-footer">
                <div className="left-type-service">
                    {c1.map(c => <p key={c.name}><i className={c.icon} aria-hidden="true"></i> {c.name}</p>)}
                </div>
                <div className="right-type-service">
                    {c2.map(c => <p key={c.name}><i className={c.icon} aria-hidden="true"></i> {c.name}</p>)}
                </div>
            </div>
        )
    }

    render() {
        return (
            <main id="content" className="main-content">
                {this.renderListResult()}
            </main>
        );
    }
}