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

        @media(max-width: 720px) {
            font-size: 2.2rem;
        }

        @media(max-width: 420px) {
            font-size: 2rem;
        }
    }
`

export const Cards = styled.article`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`

export const Loading = styled.div`
    width: 100%;
    margin-top: 8rem;
    display: flex;
    justify-content: center;
`
