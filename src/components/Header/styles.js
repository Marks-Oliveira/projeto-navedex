import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.article`
    width: 12%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .8rem;

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

    span {
        font-size: 1rem;
        font-weight: bold;
        color: #212121; 
        cursor: pointer;
    }
`