import styled, { css } from "styled-components";

type ImageProps = {
    src: string | null,
    placeholder: string | null
}

export const Image = styled.div<ImageProps>`
width : 80px;
height : 80px;
border-radius: 50%;
background-image: url(${({ src, placeholder }) => src != null ? src : placeholder});
background-repeat: no-repeat;
background-size: ${({ src }) => src != null ? 'cover' : '100px 30px'};
background-position: ${({ src }) => src != null ? 'center' : '10px'};
background-color : ${({ src }) => src != null ? '' : '#efefef'};
opacity : ${({ src }) => src != null ? '' : '0.5'};

`;

