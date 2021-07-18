import React from 'react';
import { useHistory } from 'react-router';

import * as S from './styles';
import logo from '../../assets/logoNave.png';

const Header = () => {
    const history = useHistory();

    const handleLogout = () => {
        window.localStorage.clear()
        history.push("/")
    };
    
    return (
        <S.Wrapper>
            <S.Logo>
                <img src={logo} alt="Logo Nave" />
            </S.Logo>
            <S.ExitButton>
                <span onClick={handleLogout}>Sair</span>
            </S.ExitButton>
        </S.Wrapper>
    );
};

export default Header;
