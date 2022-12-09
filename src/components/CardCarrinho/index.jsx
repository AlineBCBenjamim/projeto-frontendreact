import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { CardCarrinhoStyled } from "./styled";
import lixeira from "../../assets/lixeira.svg";
import mais from "../../assets/mais.svg";
import menos from "../../assets/menos.png";

export default function CardCarrinho({ produto }) {
  const context = useContext(GlobalContext);
  const {
    adicionaQuantidadeNoCarrinho,
    diminuiQuantidadeNoCarrinho,
    deletaDoCarrinho,
  } = context;

  const totalPorItem = (produto.value * produto.quantidade) 

  return (
    <CardCarrinhoStyled>
      <img
        className="image-produto"
        src={produto.imageUrl}
        alt={produto.imageAlt}
      />
      <div className="descricao-produto">
        <h3>{produto.name}</h3>
      </div>
      <div className="valor">
        <h3>R$ {produto.value.toFixed(2).replace(".", ",")}</h3>
      </div>
      <div className="divisao-buttons-subtotal">
        <div className="buttons">
          {produto.quantidade > 1 && (
            <img
              className="button-quantidade"
              id="menos"
              src={menos}
              alt="menos"
              onClick={() => diminuiQuantidadeNoCarrinho(produto)}
            />
          )}
          {
            <img
              className="button-quantidade"
              id="mais"
              src={mais}
              alt="mais"
              onClick={() => adicionaQuantidadeNoCarrinho(produto)}
            />
          }
          {<span>Quant: {produto.quantidade}</span>}
          {
            <img
              className="button-delete"
              id="lixeira"
              src={lixeira}
              alt="lixeira"
              onClick={() => deletaDoCarrinho(produto)}
            />
          }
        </div>
        <div className="totalDeItens">
          <h4>
            Subtotal ({produto.quantidade} itens) R${" "}
            {totalPorItem.toFixed(2).replace(".", ",")}
          </h4>
        </div>
      </div>
    </CardCarrinhoStyled>
  );
}
