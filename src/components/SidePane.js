import React from 'react'


import {
    Content,
    SideNav,
    SideNavItems,
    SideNavLink,
    SideNavMenu,
    SideNavMenuItem
  } from "carbon-components-react/lib/components/UIShell";
  
import '../SCSS/SidePane.scss';

function SidePane() {
    return (
        <div>
            <SideNav isFixedNav 
            expanded={true}
      isChildOfHeader={false}
      aria-label="Side navigation">

<SideNavItems>
        <SideNavLink href="javascript:void(0)">Users</SideNavLink>
        <SideNavLink href="javascript:void(0)">Posts</SideNavLink>
      </SideNavItems>
      </SideNav>


        </div>
    )
}

export default SidePane
