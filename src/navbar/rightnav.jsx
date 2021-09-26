import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (min-width: 481px) {
    display: none;
  }

  @media (max-width: 480px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }

    li a {
      text-decoration: none;
      color: #ffff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="https://www.corebiz.ag/pt/about/">A Corebiz</a>
      </li>
      <li>
        <a href="https://www.corebiz.ag/pt/#framework-title">Serviços</a>
      </li>
      <li>
        <a href="https://www.corebiz.ag/pt/cases/">Cases</a>
      </li>
      <li>
        <a href="https://www.corebiz.ag/pt/contato/">Contato</a>
      </li>
    </Ul>
  )
}

export default RightNav