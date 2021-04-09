import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 20.6vw;
    height: 63.5vh;
    display: flex;
    flex-direction: column;
    margin: 2rem 1.8rem;

    @media(max-width: 1080px) {
        width: 25%;
        height: 30%;
        margin: 1.5rem;
    }

    @media(max-width: 720px) {
        width: 30%;
        margin: 1.3rem;
    }

    @media(max-width: 420px) {
        width: 60%;
        height: 8%;
        margin: 1.3rem;
    }
`

export const NavePhoto = styled.article`
    cursor: pointer;

    img {
        width: 100%;
        height: 43vh;
        object-fit: cover;
        object-position: 100% 9%;
        filter: grayscale(100%);
    

        @media(max-width: 1080px) {
            height: 33vh;
        }

        @media(max-width: 720px) {
            height: 26vh;
        }

        @media(max-width: 420px) {
            height: 28vh;
        }
    }
`

export const NameAndOffice = styled.article`
    display: flex;
    flex-direction: column;
    padding: 0.8rem 0;

    p {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 1rem;
        line-height: 18px;
        color: #212121;
        margin: 0;
        padding-bottom: .3rem;
    }

    span {
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
        line-height: 24px;
        color: #212121;
    }
`

export const Buttons = styled.article`
    display: flex;
`
