import styled from "styled-components"

export const NavbarSection = styled.section`
    padding: 20px 50px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Navbar = styled.section`
    display: flex;
    align-items: center;
    `

export const ImgLogo = styled.img`
    height: auto;
    width: 60px;
    margin-right: 6px;
`;

export const TextLogo = styled.h1`
    color: white;
    font-weight: 200;
    font-size: 22px;
`;

export const SpanTextLogo = styled.span`
    color: pink;
    font-family: "Julius Sans One", sans-serif;
    margin-left: 5;
`;
export const PagesNav = styled.div`
    display: flex;
`;

export const TextHeader = styled.h4`
    color: #D6C3C3;
    font-size: 15px;
    font-weight: 300;
    margin-right: 50px;
    transition: 0.5s;

    &:hover{
        cursor: pointer;
        color: #7a4448;
        font-size: 17px;
        font-weight: bolder;
    }
`;