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
`

export const ExitModal = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    color: #212121;
    font-weight: bold;
    cursor: pointer;
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
    }
`

export const NaveInfos = styled.article`
    width: 50%;
    height: 100%;
`

export const Infos = styled.div`
    padding: 2rem;

    p {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 1rem;
        line-height: 24px;
        color: #212121;
        margin: .5rem 0;
    }

    span {
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
        line-height: 24px;
        color: #212121;
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
    }

    span {
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
        line-height: 24px;
        color: #212121;
    }
`

export const Buttons = styled.div`
    margin-top: 4rem;
    margin-left: 2rem;
`