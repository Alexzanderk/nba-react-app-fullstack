import React from 'react';
import SideNav from 'react-simple-sidenav';

import SideNavItem from './SideNav_Item';

const SideNavigation = props => {
    return (
        <div>
            <SideNav
                showNav={props.showNav}
                onHideNav={props.onHideNav}
                navStyle={{
                    background: '#242424',
                    maxWidth: '230px',
                    color: '#dfdfdf'
                }}
            >
                <SideNavItem />
            </SideNav>
        </div>
    );
};

export default SideNavigation;
