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
        <SideNavLink id="link1"  href="/users">Users</SideNavLink>
        <SideNavLink id="link2" href="/posts">Posts</SideNavLink>
      </SideNavItems>
      </SideNav>


        </div>
    )
}

export default SidePane
