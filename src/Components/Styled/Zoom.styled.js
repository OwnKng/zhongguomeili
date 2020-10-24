import styled from "styled-components";

export const ZoomStyled = styled.div`
  position: fixed;
  display: flex;
  place-items: center;
  background: rgba(31, 30, 32, 0.5);
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 2;

  .inner {
    margin: 0 5%;
    display: flex;
    justify-content: center;
    height: 90%;
    width: 90%;
  }

  img {
    object-fit: scale-down;
    width: 80%;
    height: 100%;
    border-radius: 10px;
  }
`;
