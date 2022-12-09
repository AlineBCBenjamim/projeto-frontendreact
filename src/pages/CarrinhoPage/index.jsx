import CardCarrinho from "../../components/CardCarrinho";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { CarrinhoPageStyled } from "../../pages/CarrinhoPage/styled";



export default function CarrinhoPage() {
  const context = useContext(GlobalContext);
  const { carrinho } = context;

  const total = carrinho.reduce(
    (acc, produto) => produto.value * produto.quantidade + acc,
    0
  );

  return (
    <CarrinhoPageStyled>
      <section>
        <h3>Carrinho</h3>
        <hr />
        {carrinho.map((produto) => (
          <CardCarrinho produto={produto} key={produto.id} />
        ))}
        <hr />
      </section>
      {carrinho.length >= 1 && (
        <section className="valor-total">
          <h3> Valor Total: R$ {total.toFixed(2).replace(".", ",")}</h3>
        </section>
      )}
      {carrinho.length === 0 && <h2>Carrinho Vazio</h2>}
    </CarrinhoPageStyled>
  );
};
