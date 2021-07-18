import React from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

const ConfirmEditNaveModal = ({ displayConfirmEdit }) => {
    const history = useHistory();
    
    const closeModal = () => {
        displayConfirmEdit();
        history.goBack();
    };

    return (
        <S.Wrapper>
            <S.Container>
                <S.ExitModal onClick={closeModal}>
                    X
                </S.ExitModal>
                <S.Title><span>Naver atualizado</span></S.Title>
                <S.Text><span>Naver atualizado com sucesso!</span></S.Text>
            </S.Container>
        </S.Wrapper>
    );
};

export default ConfirmEditNaveModal;