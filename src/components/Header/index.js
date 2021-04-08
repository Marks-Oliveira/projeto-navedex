import React from 'react';
import { useHistory } from 'react-router';

import * as S from './styles';

const Header = () => {
    const history = useHistory();

    const handleLogout = () => {
        window.localStorage.clear()
        history.push("/")
    };

    const goToHomePage = () => {
        history.push(`/navers`);
    };

    return (
        <S.Wrapper>
            <S.Logo>
                <svg width="41" height="40" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.8491 45.2685L28.1586 60L40.5882 43.8107L41.8926 31.688L52.0972 21.4834L60.0767 0L38.5933 7.90281L28.312 18.1074L16.1893 19.4118L0 31.8414L14.7315 31.1509L28.8491 45.2685Z" fill="#212121"/>
                    <path d="M15.4216 36.1374L23.8615 44.654L11.3551 49.1809L15.4216 36.1374Z" fill="#212121"/>
                </svg>
                <span onClick={goToHomePage}>nave.rs</span>
            </S.Logo>
            <S.ExitButton>
                <span onClick={handleLogout}>Sair</span>
            </S.ExitButton>
        </S.Wrapper>
    );
};

export default Header;
