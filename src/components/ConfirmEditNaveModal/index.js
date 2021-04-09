import React from 'react';

import * as S from './styles';

const ConfirmEditNaveModal = ({ displayConfirmEdit }) => {
    return (
        <S.Wrapper>
            <S.Container>
                <S.ExitModal onClick={displayConfirmEdit}>
                    X
                </S.ExitModal>
                <S.Title><span>Naver atualizado</span></S.Title>
                <S.Text><span>Naver atualizado com sucesso!</span></S.Text>
            </S.Container>
        </S.Wrapper>
    );
};

export default ConfirmEditNaveModal;