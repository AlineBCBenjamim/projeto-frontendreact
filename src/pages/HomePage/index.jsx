import { useContext } from "react";
import CardProduto from "../../components/CardProduto";
import { GlobalContext } from "../../contexts/GlobalContext";
import { HomePageStyled } from "./styled";

export default function HomePage() {
  const context = useContext(GlobalContext);
  const {
    produtos,
    limpaPesquisa,
    filtroTexto,
    filtroOrdem,
    atualizaFiltroOrdem,
    valorMin,
    valorMax,
    atualizaValorMin,
    atualizaValorMax,
  } = context;

  return (
    <>
      <HomePageStyled>
        <aside className="container-filtros">
          <h3>Filtros</h3>
          <hr />
          <aside className="filtro-por-ordem">
            <section className="filter">
              <select onChange={atualizaFiltroOrdem} value={filtroOrdem}>
                <option value="">Ordenar</option>
                <option value="manor-valor">Menor valor</option>
                <option value="maior-valor">Maior valor</option>
              </select>
            </section>
          </aside>

          <aside className="filtro-por-valor">
            <p>Valor mínimo:</p>
            <input
              type="text"
              className="filtrar-Dados"
              placeholder=" R$"
              value={valorMin}
              onChange={atualizaValorMin}
            />
            <p>Valor máximo:</p>
            <input
              type="text"
              className="filtrar-Dados"
              placeholder=" R$"
              value={valorMax}
              onChange={atualizaValorMax}
            />
          </aside>
          <button className="button-limpar" onClick={limpaPesquisa}>Limpar</button>
        </aside>
        <section>
          <h3>Produtos</h3>
          <hr />
          <section className="container-main">
            {produtos
              .filter((item) =>
                item.name.toLowerCase().includes(filtroTexto.toLowerCase())
              )
              .sort((a, b) => {
                if (filtroOrdem === "menor-valor") {
                  if (a.value < b.value) {
                    return -1;
                  } else {
                    return 1;
                  }
                } else if (filtroOrdem === "maior-valor") {
                  if (a.value < b.value) {
                    return 1;
                  } else {
                    return -1;
                  }
                }
              })

              .filter((produto) => {
                return produto.value >= valorMin;
              })
              .filter((produto) => {
                return valorMax ? produto.value <= valorMax : produto;
              })

              .map((produto) => (
                <CardProduto produto={produto} key={produto.id} />
              ))}
          </section>
        </section>
      </HomePageStyled>
    </>
  );
}
