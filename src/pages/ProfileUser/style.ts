import styled from "styled-components"

export const StyledProfile = styled.main`
  background-color: var(--grey8);
`

export const StyledBlueDiv = styled.div`
  background-color: var(--brand1);
  position: relative;
  height: 330px;
  margin-bottom: 220px;
`

export const StyledUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--grey10);
  height: 400px;
  position: absolute;
  top: 30%;
  left: 5%;
  right: 5%;
  border: solid 1px red;
  padding: 40px 20px;

  .divNameTag {
    display: flex;
    gap: 15px;
  }

  .descriptionUser {
    margin-top: 15px;
  }
`
