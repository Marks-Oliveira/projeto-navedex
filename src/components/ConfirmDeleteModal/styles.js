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
    position: relative;
    width: 43.5%;
    height: 35.5%;
    height: 160px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
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

export const Title = styled.article`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 36px;
    color: #212121;
    padding-top: 2rem;
    padding-left: 2rem;
`

export const Text = styled.article`
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    line-height: 36px;
    color: #212121;
    padding-top: 1rem;
    padding-left: 2rem;
`