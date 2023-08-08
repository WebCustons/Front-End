import styled from "styled-components"


export const StyledMenu = styled.div`

    max-width: 100%;
    display: flex;
    justify-content: space-between;
    padding:10px;
    align-items: center;
    font-family: 'Lexend', sans-serif;

    img{
        width:150px;
        height: 60px;

        @media(min-width:599px){
            width:250px;
            height:80ox;
        }
    }
`;