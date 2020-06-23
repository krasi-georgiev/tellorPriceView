import React, { useState } from "react";
import { RightCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";

import TellorLogoDark from "../../assets/Tellor__Logo--Dark.png";
import ModeSwitcher from "components/ModeSwitcher/ModeSwitcher";

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const StyledBrandLink = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  img {
    height: 60px;
    width: auto;
    display: inline-block;
  }
  span {
    color: #5cfcb6;
    font-size: 21px;
    font-weight: 300;
    margin-bottom: -11px;
    font-weight: 500;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    span {
      display: none;
    }
  }
`;

const StyledHeaderNav = styled.div`
  display: inline-block;
  margin-left: auto;
  > button {
    padding: 0px 15px !important;
  }
  > * {
    margin-left: 25px;
    font-size: 1.5em;
    color: var(--color-link);
    // &:last-child {
    //   border: 2px solid #5cfcb6;
    //   color: #5cfcb6;
    //   border-radius: 50px;
    //   padding: 10px 15px;
    //   vertical-align: middle;
    // }

    @media (max-width: 800px) {
      font-size: 1em;
      margin-left: 15px;
    }
  }
`;

const Navigation = () => {
  const [logo, setLogo] = useState(TellorLogoDark);

  return (
    <StyledHeader>
      <StyledBrandLink>
        <img src={logo} alt="tellor" />
        <span>data</span>
      </StyledBrandLink>
      <StyledHeaderNav>
        <ModeSwitcher setLogo={setLogo} />
        <a
          href="https://disputes.tellorscan.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Dispute Center <RightCircleOutlined />
        </a>
      </StyledHeaderNav>
    </StyledHeader>
  );
};

export default Navigation;
