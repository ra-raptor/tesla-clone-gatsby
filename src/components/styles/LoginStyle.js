import styled from "@emotion/styled"
import { StyledFooter } from "./FooterStyle"

export const LoginWrapper = styled.div`
  padding: 25px;
  padding-top: 15px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-sizing: border-box;
`

export const LoginHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  img {
    object-fit: contain;
    width: 90px;
  }
  .language {
    display: flex;
    gap: 5px;
    align-items: center;
    cursor: pointer;
    padding: 10px 10px;
    font-family: "Gotham", Arial, Helvetica, sans-serif;
    border-radius: 50px;
    font-size: 15px;
    transition: all 0.2s ease-in;
    &:hover {
      background-color: hsla(0, 0%, 50.2%, 0.125);
    }
    span {
      font-weight: 500;
    }
  }
`

export const LoginFooter = styled(StyledFooter)`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`

export const LoginMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 325px;
  margin-left: auto;
  margin-right: auto;
  h1 {
    font-weight: 500;
    font-size: 36px;
    margin-left: -10px;
    font-family: "Gotham", Arial, Helvetica, sans-serif;
  }
`
