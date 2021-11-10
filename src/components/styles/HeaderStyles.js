import styled from "@emotion/styled"
import { css } from "@emotion/react"

export const HeaderContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
`

export const Header = styled.div`
  padding-bottom: 1rem;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: url("https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop")
    no-repeat center center;
  background-size: cover;
  .content {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .text {
    margin-top: 8rem;
    text-align: center;
    flex: 1;
  }
  h2 {
    color: #393c41;
    font-weight: 500;
    font-size: 40px;
  }
  h2,
  h4 {
    text-align: center;
  }
  h4 {
    padding-top: 8px;
    font-weight: 300;
    font-size: 15px;
    color: #5c5e62;
    span {
      padding-bottom: 4px;
      padding-top: 15px;
      border-bottom: 1px solid black;
      color: #393c41;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover {
        border-bottom-width: 2px;
        color: black;
      }
    }
  }
  .cta {
    /* margin-top: -10rem; */
    position: relative;
    padding-bottom: 2rem;
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
  }
`
