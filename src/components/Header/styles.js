import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
`

export const Logo = styled.article`
    width: 12%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        font-size: 2rem;
        font-weight: bolder;
        color: #212121;
        margin-bottom: 8px; 
    }
`

export const ExitButton = styled.article`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: .9rem;
        line-height: 24px;

        color: #212121; 
        cursor: pointer;
    }
`