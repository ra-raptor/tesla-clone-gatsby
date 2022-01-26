import styled from "@emotion/styled"

export const NavHeader = styled.div`
  display: flex;
  position: fixed;
  z-index: 8;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  padding-top: 20px;
  .logoImg {
    object-fit: contain; /* maintains the aspect ratio */
    width: 90px;
    flex: 1;
    z-index: 0;
    margin-right: 100px;
  }
`

export const NavLinks = styled.div`
  display: flex;
  /* gap: 18px; */
  /* background-color: blue; */
  a {
    width: 110px;
    text-align: center;
    text-decoration: none;
    text-transform: capitalize;
    /* background-color: red; */
    color: #222;
    font-weight: 500;
    font-size: 14px;
    font-family: "Gotham", Arial, Helvetica, sans-serif;
  }
  #hover {
    width: 110px;
    border-radius: 10px;
    height: 30px;
    background-color: rgba(100, 100, 100, 0.08);
    backdrop-filter: blur(1px);
    position: absolute;
    z-index: -1;
    /* transform: translate(-20%, -60%); */
  }
  @media (max-width: 1200px) {
    display: none;
  }
`

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  /* background: red; */
  /* gap: 18px; */
  a {
    text-align: center;
    /* background: blue; */
    width: 80px;
    text-decoration: none;
    text-transform: capitalize;
    color: #222;
    font-weight: 500;
    font-size: 14px;
    z-index: 0;
    position: relative;
    font-family: "Gotham", Arial, Helvetica, sans-serif;
  }
  #hover2 {
    width: 80px;
    border-radius: 10px;
    height: 30px;
    background-color: rgba(100, 100, 100, 0.08);
    backdrop-filter: blur(1px);
    position: absolute;
    z-index: -1;
    /* transform: translate(-20%, -60%); */
  }
  @media (max-width: 600px) {
    display: none;
  }
`

export const NavMenuBtn = styled.div`
  background-color: rgba(100, 100, 100, 0.08);
  backdrop-filter: blur(1px);
  font-family: "Gotham", Arial, Helvetica, sans-serif;
  font-weight: 300;
  padding: 8px 12px;
  /* border: 1px solid red; */
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  left: 15px;
  &:hover {
    background-color: rgba(100, 100, 100, 0.2);
  }
`

export const FullPageBlur = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 15;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
`

export const Menu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  /* width: 40vw; */
  height: 100vh;
  background-color: #fff;
  z-index: 20;
  min-width: 295px;
  ///////////******* shadow */
  /* overflow-y: scroll; */
  box-shadow: -5px 0 10px #2d343630;
  padding-left: 35px;
  padding-top: 90px;
  padding-right: 20px;

  display: flex;
  flex-direction: column;
  div {
    /* border-bottom: 1px solid #d0d1d2; */
    text-align: left;
    cursor: pointer;
    margin-bottom: 10px;
    z-index: 27;
    a {
      text-decoration: none;
    }
    h4 {
      font-weight: 500;
      letter-spacing: 0.5px;
      color: #2d3436;
      text-transform: capitalize;
      padding-bottom: 15px;
      /* border: 1px solid red; */
      font-size: 15px;
      vertical-align: middle;
      padding-left: 10px;
      cursor: pointer;
      font-family: "Gotham", Arial, Helvetica, sans-serifl;
    }
  }
  .close {
    position: absolute;
    z-index: 2;
    cursor: pointer;
    /* border: 1px solid purple; */
    top: 25px;
    right: 10px;
    height: 40px;
    width: 40px;
    border-radius: 100%;
    display: grid;
    place-items: center;
    font-size: 1.5rem;
    color: #2d3436;
    transition: all 0.3s ease-in;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`
