import React from 'react';

import Banner from './banner';
import Aside from './aside';
import Poolpro from './pool_pro';

export default class Landing extends React.Component {
    render() {
        return (
            <div>
                <Banner/>
                <Aside/>
                <Poolpro/>
            </div>
        );
    }
}