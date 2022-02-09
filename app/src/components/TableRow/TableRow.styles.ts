import { Btn } from "src/configs/app";
import styled, { css } from "styled-components";

interface StyledSpanProps {
    status: string
}

export const SpanStyle = styled.span<StyledSpanProps>`
display: inline-block;
padding: 0.25em 0.4em;
font-size: 75%;
font-weight: 700;
line-height: 1;
text-align: center;
white-space: nowrap;
vertical-align: baseline;
border-radius: 0.25rem;
 ${({ status }) => status == 'new' ? newStatus : status == 'processing' ? newProcessing : status == 'done' ? newDone : newError};
`;

const newStatus = css`
color: #fff;
    background-color: #007bff;
`
const newProcessing = css`
color: #fff;
    background-color: #6c757d
`

const newDone = css`
color: #fff;
    background-color: #28a745;
`

const newError = css`
color: #fff;
background-color: #dc3545;
`

export const Button = styled.button`
    color: #212529;
    background-color: #ffc107;
    border-color: #ffc107;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: 0.2rem;
    ${Btn}
    &:hover {
        color: #212529;
        background-color: #e0a800;
        border-color: #d39e00;
    }
     &:focus {
        outline: 0;
      
        box-shadow: 0 0 0 0.2rem rgb(255 193 7 / 50%);
    }   
`;

export const Select = styled.select`
display: block;
width: auto;
padding: 0.375rem 0.75rem;
font-size: 1rem;
line-height: 1.5;
color: #495057;
background-color: #fff;
background-clip: padding-box;
border: 1px solid #ced4da;
border-radius: 0.25rem;
transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
padding: 0.25rem 0.5rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: 0.2rem;
`;
;

export const CancelBtn = styled.button`
    ${Btn}
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545; 
    margin: 5px  5px  5px 0;

`;

export const ConfirmBtn = styled.button`
    ${Btn}
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
`;
