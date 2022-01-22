import styled from "@emotion/styled"
import { css } from "@emotion/react"

export const HeaderContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: green;
  /* scroll-snap-type: y mandatory; */
  /* overflow-y: scroll; */
  .slidewidth {
  }
`

export const Header = styled.div`
  padding-bottom: 1rem;
  height: 100vh;
  /* scroll-snap-align: start; */
  width: 100%;
  display: flex;
  max-width: 100%;

  flex-direction: column;
  background: url("${props => props.url}") no-repeat center center;
  /* background: url("https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop")
    no-repeat center center; */
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
    font-family: "gotham", Arial, Helvetica, sans-serif;
  }
  h2,
  h4 {
    text-align: center;
  }
  h4 {
    padding-top: 4px;
    font-weight: 300;
    font-size: 14px;
    color: rgb(102, 103, 107);
    font-family: "Gotham", Arial, Helvetica, sans-serif;
    font-weight: 300;
    span {
      padding-bottom: 4px;
      padding-top: 15px;
      /* border-bottom: 1px solid black; */
      color: #393c41;
      cursor: pointer;
      position: relative;
      transition: 0.5s ease-in-out;
      &::after {
        background-color: red;
        height: 50px;
        width: 50px;
        content: "";
        bottom: 0;
        left: 0;
        display: block;
        position: relative;
        color: black;
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: rgb(92, 93, 97);
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        transition: height 0.3s ease-in;
        width: 100%;
        left: 0;
        /* content: "xhh"; */
      }

      &:hover:after {
        background: #393c41;
        height: 2.5px;
      }
      &:hover {
        color: #393c41;
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
