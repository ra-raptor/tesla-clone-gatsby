import styled from "@emotion/styled"
import { LoginMain, LoginFooter } from "./LoginStyle"

export const SignupWrapper = styled.div`
  padding: 25px;
  padding-top: 5px;
  min-height: 100vh;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-sizing: border-box;
  font-family: "Gotham", Arial, Helvetica, sans-serif;
  .secondary {
    margin-bottom: 60px;
  }
`

export const SignupMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 325px;
  margin-left: auto;
  margin-right: auto;
  h1 {
    font-weight: 500;
    font-size: 36px;
    margin-left: -20%;
    margin-bottom: 10px;
    color: hsl(0, 0%, 20%);
    @media (max-width: 600px) {
      margin-left: 0%;
    }
  }
`

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  label {
    color: #5c5e62;
    padding: 8px 0;
    font-weight: 500;
    font-size: 15px;
    padding-left: 20px;
  }
  input {
    margin-bottom: 15px;
    background-color: #f4f4f4;
    border: 1px solid #f4f4f4;
    outline: none;
    border-radius: 50px;
    padding: 11px 20px;
    color: #393c41;
    font-weight: 600;
    &:focus {
      border: 1px solid #d6d6d6;
      transition: all 0.2s;
    }
  }
`

export const SignupFooter = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
  padding: 0;
  padding-bottom: 1rem;
  position: relative;
  bottom: 10px;
  li {
    color: #393c41;
    font-size: 0.9rem;
    list-style-type: none;
    padding: 0rem 0.4rem;
  }
  /* left: 50%; */
  /* transform: translateX(-50%); */
`

export const SignupAgree = styled.div`
  max-width: 350px;
  display: flex;
  align-items: flex-start;
  padding: 10px;
  margin-top: 12px;
  font-weight: 200;
  color: hsl(0, 0%, 30%);
  font-size: 0.9rem;
  text-align: justify;
`
export const SignupDivide = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 20px;
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
