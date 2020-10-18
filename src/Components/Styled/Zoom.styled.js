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
    height: 90%;
    width: 100%;
  }

  img {
    object-fit: scale-down;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
