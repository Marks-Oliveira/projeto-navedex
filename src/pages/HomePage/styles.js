import styled from 'styled-components';

export const Wrapper = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TextAndButton = styled.article`
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
`

export const Text = styled.div`
    span {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 2.5rem;
        line-height: 48px;
        color: #212121;
    }
`

export const Cards = styled.article`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`