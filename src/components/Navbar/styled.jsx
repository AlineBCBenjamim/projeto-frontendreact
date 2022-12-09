import styled from "styled-components";

export const NavbarStyled = styled.header`
    background-color: #131921 ;
    height: 100px;
    display: flex;
    align-items: center;
    padding-left:15px;
    justify-content: space-evenly;

    .logo{
        width: 300px;
    }

    .saturno-logo{
        height:70px;
    }

    .input{
        width: 800px;
        height: 34px;
        border-radius: 30px;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        img{
            height: 25px;
            padding-left: 5px;
        }
        input{
            width: 720px;
            height: 34px;
            border: none;
            padding-left: 5px;
        }
        input:focus{
            outline: none;
        }
    } 

    .container-button{
        width: 100px;
        display: flex;
        justify-content: space-between;
        color: white;
    }
    
    .button{
        height: 30px;
        #home{
            width: 60px;
        }
    }
`