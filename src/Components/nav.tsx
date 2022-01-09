import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import Icon from "./icon";

const NavWrapper = styled.nav`
  background: white;
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

        &.active {
          color: #1677ff;
          .icon {
            fill: #1677ff;
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
                    <NavLink className={(navData) => navData.isActive ? 'active' : ""}
                             to="/tags">
                        <Icon name='tag'/>
                        <div>标签</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={(navData) => navData.isActive ? 'active' : ""}
                             to="/money">
                        <Icon name='money'/>
                        <div>记一笔</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={(navData) => navData.isActive ? 'active' : ""}
                             to="/statistics">
                        <Icon name="statistic"/>
                        <div>统计</div>
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav;