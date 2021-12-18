import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import Icon from "./icon";


const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      text-align: center;
      padding: 4px 0;
      
      > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: grey;
        .icon {
          width: 24px;
          height: 24px;
          fill: grey;
        }
        &.active{
          color: red;
          .icon{
            fill: blue;
          }
        }
      }
    }
  }
`
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink className={(navData)=>navData.isActive?'active':""}  to="/tags">
                        <Icon name='tag'/>
                        <div>Tags</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={(navData)=>navData.isActive?'active':""} to="/money">
                    <Icon name='money'/>
                    <div>Money</div>
                </NavLink>
                </li>
                <li>
                    <NavLink className={(navData)=>navData.isActive?'active':""} to="/statistics">
                        <Icon name="statistic"/>
                        <div>Statistics</div>
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav;