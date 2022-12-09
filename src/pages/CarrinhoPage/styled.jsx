import styled from "styled-components";

export const CarrinhoPageStyled = styled.main`
  min-height: calc(100vh - 200px);

  .carrinho {
    padding: 20px;
  }
  .container-produtos {
    display: flex;
    flex-wrap: wrap;
  }
  .valor-total {
    display: flex;
    justify-content: flex-end;
    padding: 40px;
  }
`;
