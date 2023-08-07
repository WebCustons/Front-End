import styled from "styled-components"

export const StyledHome = styled.main`

    background-color: red;

`; 
export const StyledMenu = styled.div`

    max-width: 100%;
    display: flex;
    justify-content: space-between;
    padding:10px;
    align-items: center;
    font-family: 'Lexend', sans-serif;

    img{
        width:150px;
        height: 30px;
    }
`;

export const StyledButtonsMenu = styled.div`

    display:flex;
    padding:10px;
    gap:25px;
`;

export const StyledButtonLogin = styled.button`

    color: var(--grey2);
    font-weight: bold;

`;

export const StyledButtonRegister = styled.button`

    color: var( --grey0);
    font-weight: bold;
    border:1px solid var(--grey4);
    padding:5px;
    width:100px;

`;




export const StyledBannerPageHome = styled.div`

    max-width: 100%;
    width:100%;
    position: relative;
    z-index: 1;

    img{
        width:100%;
        height: 450px;
    }

    h1{
        position: absolute;
        top:30%;
        left:35%;
        color:white;
    }

    p{
        max-width: 100%;
        min-width:250px;
        position: absolute;
        top:40%;
        left:15%;
        right:5%;
        margin: auto;
        color:white;
        font-family: 'Lexend', sans-serif;
    }

`;