import styled from "styled-components";
import { bgDebug } from "../../styles/mixins";

export const RegisterSection = styled.section`
    ${bgDebug('transparent','khaki')};
    /* padding: 0 80px; */
    ;
    `;

export const RegisterWrapper = styled.div`
    ${bgDebug('transparent','greenyellow')};
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    padding-top: 45px;
    `;

export const RegisterForm = styled.form`
${bgDebug('transparent','cyan')};
display: flex;
flex-direction: column;
margin-top: 22px;
h4{
    color: $medium-gray;
    font-size: 14px;
}
`;
export const FormContainer = styled.form`
    ${bgDebug('transparent','yellow')};
    display: flex;
    max-width: 860px;
    justify-content: center;
    `;

export const FormContainerLeft = styled.form`
    ${bgDebug('transparent','fuchsia')};
    display: flex;
    flex-direction: column;
    width: 100%;

`;

export const FormContainerRight = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 412px;
    width: 100%;
    justify-content: end;
    margin-left: 10px;
`;
export const StateDateFlexbox = styled.form`
    display: flex;
    justify-content:space-evenly;
    position: relative;
    gap: 10px;

    /* FormElement{
        max-width: 225px;
    }    */
`;
export const FormElement = styled.form`
    max-width: 225px;

    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;

    /* background-color: cyan; */
    input {
        max-width: 412px;
        width: 100%;
        height: 36px;
        
        appearance: none;
        
        border-radius: 5px;
        
        padding-left: 20px;
        font-size: 14px;
        border: 1px solid ${({ theme }) => theme.colors.borderGray};
        outline: none;
        margin-bottom: 5px;

    }    

    select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        
        /* max-width: 412px; */
        width: 100%;
        height: 36px;
        padding-left: 20px;

        border-style: none;
        border-radius: 5px;
        border: 1px solid ${({ theme }) => theme.colors.borderGray};
        color: $dark-blue;
        outline: none;
        font-size: 14px;

        color: $placeholder-text;
    }
    /* .date-selector{
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
    
        color: black;
    } */
`;

export const DateSelectorInput = styled.input`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    color: black;
    
    /* Para eliminar el icono predeterminado de chromo para calendario. */ 
    &::-webkit-calendar-picker-indicator {
        opacity: 0;
        cursor: pointer; 
        position: absolute;
        right: 15px; // ! right: 0;
    }
    &::-webkit-datetime-edit {
        color: ${({ theme }) => theme.colors.placeholderText};
    }

`;



export const FormIcon = styled.img`
    position: absolute;
    width: 14px;
    bottom: 15px;
    right: 15px;
`;



