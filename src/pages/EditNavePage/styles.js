import styled from 'styled-components';

export const Wrapper = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Container = styled.section`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 3rem;
`

export const Title = styled.article`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 36px;
    color: #212121;
    display: flex;
    align-items: center;
`

export const Inputs = styled.article`
    width: 100%;
    padding-top: 2rem; 
`

export const ButtonContent = styled.div`
    width: 99%;
    display: flex;
    justify-content: flex-end;
    padding-top: 2rem;
`