import styled, { css } from "styled-components";
import { buttonProps} from "../types/index"

export const StyledButtons = styled.button<buttonProps>`
cursor: pointer;
${({ nameButtons }: buttonProps) => {
        switch (nameButtons) {
            case "buttonsections":
                return css`
                height: 40px;
                width: 200px;
                background-color: var(--colorPrimary);
                color: var(--colorSecond);
                font-size: 18px;
                border: transparent;
            `;
            case "buttonSend":
                return css`
                height: 40px;
                width: 200px;
                background-color: var(--colorPrimary);
                color: var(--colorSecond);
                font-size: 14px;
                border: transparent;
                display: flex;
                align-items: center;
                justify-content: center;
            `;
            default:
                return css``
        }
    }
    }`