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
`

export const Title = styled.article`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 3rem;
    padding-bottom: 2rem;

    span {
        font-size: 2.8rem;
        font-weight: bolder;
        color: #212121;
        margin-bottom: .5rem; 
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
`
