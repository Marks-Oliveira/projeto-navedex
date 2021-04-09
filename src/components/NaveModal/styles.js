import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, .6);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.section`
    width: 70%;
    height: 70%;
    background-color: #fff;
    display: flex;
    position: relative;

    @media(max-width: 1080px) {
        width: 55%;
        height: 55%;
    }

    @media(max-width: 720px) {
        width: 75%;
        height: 55%;
    }

    @media(max-width: 420px) {
        width: 85%;
        height: 38%;
    }
`

export const ExitModal = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    color: #212121;
    font-weight: bold;
    cursor: pointer;

    @media(max-width: 420px) {
        font-size: .7rem;
    }
`

export const NavePhoto = styled.article`
    width: 50%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 100% 9%;
        filter: grayscale(100%);

        @media(max-width: 1080px) {
            object-position: 78%;
        }
    }
`

export const NaveInfos = styled.article`
    width: 50%;
    height: 100%;
`

export const Infos = styled.div`
    padding: 2rem;

    @media(max-width: 420px) {
        padding: 1.5rem 1rem;
    }

    p {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 1rem;
        line-height: 24px;
        color: #212121;
        margin: .5rem 0;

        @media(max-width: 420px) {
            font-size: .5rem;
            margin: 0;
        }
    }

    span {
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
        line-height: 24px;
        color: #212121;

        @media(max-width: 420px) {
            font-size: .5rem;
        }
    }
`

export const Title = styled.div`
    padding-bottom: 1rem;

    p {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 1.5rem;
        line-height: 36px;
        color: #000000;

        @media(max-width: 420px) {
            font-size: .6rem;
            margin: 0;
        }
    }

    span {
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
        line-height: 24px;
        color: #212121;

        @media(max-width: 420px) {
            font-size: .6rem;
        }
    }
`

export const Buttons = styled.div`
    margin-top: 4rem;
    margin-left: 2rem;

    @media(max-width: 420px) {
        margin-top: 0;
        margin-left: .5rem;
    }
`