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