import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";

require('icons/money.svg');
require('icons/tag.svg');
require('icons/statistic.svg');


const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 33.3333%;
      text-align: center;
      padding: 4px 0;

      .icon {
        width: 24px;
        height: 24px;
      }

      > Link {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
`
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/tags">
                        <svg className='icon'>
                            <use xlinkHref='#tag'/>
                        </svg>
                        <div>Tags</div>
                    </Link>
                </li>
                <li><Link to="/money">
                    <svg className='icon'>
                        <use xlinkHref='#money'/>
                    </svg>
                    <div>Money</div>
                </Link>
                </li>
                <li>
                    <Link to="/statistics">
                        <svg className='icon'>
                            <use xlinkHref='#statistic'/>
                        </svg>
                        <div>Statistics</div>
                    </Link>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav;