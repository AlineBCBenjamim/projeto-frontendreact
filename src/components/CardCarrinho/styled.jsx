import styled from "styled-components";

export const CardCarrinhoStyled = styled.section`
  width: 100%;
  height: 180px;
  background: white;
  position: relative;
  display: flex;
  align-items: center;
  gap: 40px;
  flex-direction: row;
  place-content: center;
  place-items: center;
  overflow: hidden;  
  box-shadow: 1px 2px 5px blue;

  .image-produto {
    height: 100px;
  }

  .descricao-produto {
    display: flex;
    gap: 10px;
    flex-direction: row;
    width:400px;
  }

  .valor{
    display: flex;
    width: 200px;
  }

  .buttons {
    display: flex;
    justify-content: space-evenly;
    border-radius: 7px;
    border: none;

    font-family: inherit;
    text-align: center;
    font-size: 13px;
    width: 220px;
    padding: 1em;
    transition: all 0.4s;
    cursor: pointer;
  }

  .buttons span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.4s;
  }

  .buttons:hover span {
    padding-right: 0.55em;
  }

  .button-quantidade {
    border: none;
    border-radius: 10px;
    border-left: 10px;
    height:40px;
    color: white;
  }
  
  .button-delete {
    border: none;
    border-radius: 10px;
    border-left: 10px;
    color: white;
    height: 40px;
  }

  h3 {
    position: relative;
    z-index: 2;
    font-size: 1.1rem;
    font-weight: 200;
    margin: 0 20px;
  }

.divisao-buttons-subtotal{
  display: flex;
  justify-content:center;
  flex-direction: column;
}

`;
