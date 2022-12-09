import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: #131921;
  color: white;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
  bottom: 0;
  width: 100%;
  left: 0;
  padding: 0 30px;

  .redes-social {
    display: flex;
    align-items: flex-end;
  }

  .informacao-site {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  .listas-informacao-site {
    display: flex;
    justify-content: space-evenly;
    gap: 30px;
    line-height: 30px;
  }
`;
