import styled from "styled-components";

export const HomePageStyled = styled.main`
  min-height: calc(100% - 200px);
  display: flex;
  background-color: #eaeded;

  input {
    border-radius: 20px;
    height: 30px;
  }

  .container-filtros {
    width: 400px;
    background-color: #eaeded;
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    gap: 20px;
  }

  .container-main {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 50px 60px;
    background-color: #eaeded;
    height: 100%;
    gap: 100px;
    flex-wrap: wrap;
  }

  .button-limpar {
    width: 80px;
    align-self: flex-start;
    color: white;
    background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
    border-radius: 20px;
  }
`;
