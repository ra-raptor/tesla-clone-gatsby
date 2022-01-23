import styled from "@emotion/styled"
import { StyledFooter } from "./FooterStyle"
import { Btn } from "../LandingPage/PrimaryBtn"

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

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  label {
    color: #5c5e62;
    padding: 8px 0;
    font-weight: 500;
    font-size: 15px;
    font-family: "Gotham", Arial, Helvetica, sans-serif;
    padding-left: 20px;
  }
  input {
    margin-bottom: 20px;
    background-color: #f4f4f4;
    border: 1px solid #f4f4f4;
    outline: none;
    border-radius: 50px;
    padding: 12px 20px;
    color: #393c41;
    font-weight: 600;
    &:focus {
      border: 1px solid #d6d6d6;
      transition: all 0.2s;
    }
  }
`

export const Forgot = styled.div`
  display: flex;
  width: 100%;
  padding: 0 10px;
  font-size: 0.82rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  hr {
    height: 10px;
    width: 0px;
    margin: 0 12px;
  }
  a {
    color: #5c5e62;
    font-weight: 100;
    border-bottom: 1px solid #5c5e62;
    padding-bottom: 3px;
    text-decoration: none;
    font-family: "Gotham", Arial, Helvetica, sans-serif;
    &:hover {
      border-bottom: 2px solid #5c5e62;
      transition: 0.2s ease-in;
    }
  }
`

export const Divide = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
  hr {
    height: 0;
    width: 40%;
    opacity: 0.3;
  }
  span {
    font-weight: 500;
    color: #5c5e62;
  }
`

export const BtnP = styled(Btn)`
  background-color: #3e6ae1;
  border: none;
  width: 100%;
  height: 40px;
  padding: 12px 40px;
  border-radius: 50px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  /* margin-bottom: 2px; */
  transition: all 0.4s;
  &:hover {
    background-color: #3457b1;
  }
`

export const BtnS = styled(BtnP)`
  background-color: transparent;
  border: 3px solid #171a20;
  padding: 10px 40px;
  color: hsl(220, 16%, 21%);
  &:hover {
    background-color: #171a20;
    color: white;
  }
`
