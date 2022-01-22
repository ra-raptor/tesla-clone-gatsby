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
  gap: 18px;
  a {
    text-decoration: none;
    text-transform: capitalize;
    color: #222;
    font-weight: 500;
    font-size: 14px;
    font-family: "Gotham", Arial, Helvetica, sans-serif;
  }
  #hover {
    width: 70px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(1px);
    position: absolute;
    z-index: -1;
    transform: translate(-20%, -50%);
  }
`

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  a {
    text-decoration: none;
    text-transform: capitalize;
    color: #222;
    font-weight: 500;
    font-size: 14px;
    z-index: 0;
    position: relative;
    font-family: "Gotham", Arial, Helvetica, sans-serif;
  }
`
