import styled from 'styled-components';

export const Wrapper = styled.main`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.section`
    width: 33vw;
    height: 62vh;
    border: 1px solid #212121;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 1080px) {
        width: 45%;
        height: 48%;
    }

    @media(max-width: 720px) {
        width: 55%;
        height: 48%;
    }

    @media(max-width: 420px) {
        width: 85%;
        height: 43.8%;
    }
`

export const Title = styled.article`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
    padding-bottom: 2rem;

    @media(max-width: 1080px) {
        width: 40%;
    }

    @media(max-width: 720px) {
        width: 40%;
    }

    @media(max-width: 420px) {
        width: 45%;
        padding-top: 2rem;
    }

    img {
        width: 80%;
    }
`

export const Inputs = styled.article`
    width: 85%;
`

export const ErrorWarning = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: red;
    font-size: 0.8rem;
`

export const EnterButton = styled.article`
    margin-top: .3rem;

    @media(max-width: 420px) {
        margin-top: .1rem;
    }
`
