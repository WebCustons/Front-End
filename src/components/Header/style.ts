import styled from "styled-components"

const StyledHeader = styled.header`
    height: 80px;
    width:100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    div{
        height:100%;
        width:70%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
    .logo{
        height:80%;
    }
    .logo>img{
        height:100%;
    }
`

export default StyledHeader