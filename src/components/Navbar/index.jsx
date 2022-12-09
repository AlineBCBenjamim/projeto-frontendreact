import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {goToHomePage, goToCarrinhoPage} from "../../routes/coordinator";
import { NavbarStyled } from "./styled";
import logo from "../../assets/logo.png";
import { GlobalContext} from "../../contexts/GlobalContext";
import lupa from "../../assets/lupa.svg";
import carrinho from "../../assets/carrinho.png";
import casinha from "../../assets/casinha.png";
import saturnoLogo from "../../assets/saturnoLogo.png";

export default function Navbar (){
    const navigate = useNavigate()

    const context = useContext(GlobalContext);
    const{atualizaFiltroTexto, filtroTexto, quantidade} = context;

  
    return (
      <NavbarStyled>
        <a onClick={() => goToHomePage(navigate)}>
          <img className="saturno-logo" src={saturnoLogo} alt="logo-saturno" />
        </a>
        <a onClick={() => goToHomePage(navigate)}>
          <img className="logo" src={logo} alt="Logo" />
        </a>
        <div className="input">
          <img src={lupa} alt="buscar" />
          <input
            type="text"
            placeholder="Buscar"
            onChange={atualizaFiltroTexto}
            value={filtroTexto}
          />
        </div>
        <div className="container-button">
          <img
            className="button"
            id="home"
            src={casinha}
            alt="casinha"
            onClick={() => goToHomePage(navigate)}
          />
          <img
            className="button"
            src={carrinho}
            alt="carrinho"
            onClick={() => goToCarrinhoPage(navigate)}
          />
          {quantidade > 0 && <span>{quantidade}</span>}
          {""}
        </div>
      </NavbarStyled>
    );
};