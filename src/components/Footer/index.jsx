import { FooterStyled } from "../Footer/styled";
import linkedin from "../../assets/linkedin.svg";
import gitHub from "../../assets/gitHub.svg";

export default function Footer() {
  return (
    <>
      <FooterStyled>
        <div className="listas-informacao-site">
          <ul className="informacao-site">
            <h4>
              <strong>Pagamento</strong>
            </h4>
            <li>Cartão de crédito</li>
            <li>Cartão de débito</li>
            <li>Boleto e Pix</li>
          </ul>
          <ul className="informacao-site">
            <h4>
              <strong>Em que posso ajudar</strong>
            </h4>
            <li>Sua conta</li>
            <li>Frete e prazo de entrega</li>
            <li>Devolução e reembolso</li>
            <li> Ajuda </li>
          </ul>
        </div>

        <div>
          <h3>Desenvolvido por Aline Benjamim 2022</h3>{" "}
        </div>

        <div className="redes-social">
          <a href="https://github.com/AlineBCBenjamim" target={"_blank"}>
            <img src={gitHub} alt="icone gitHub" rel="noopener noreferrer" />
          </a>
          <a
            href="https://www.linkedin.com/in/alinebcarvalhobenjamim/"
            target={"_blank"}
          >
            <img
              src={linkedin}
              alt="icone linkedin"
              rel="noopener noreferrer"
            />
          </a>
        </div>
      </FooterStyled>
    </>
  );
}
