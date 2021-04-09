import React from 'react';

import * as S from './styles';

const ConfirmCreateNaveModal = ({ displayConfirmCreate }) => {
    return (
        <S.Wrapper>
            <S.Container>
                <S.ExitModal onClick={displayConfirmCreate}>
                    X
                </S.ExitModal>
                <S.Title><span>Naver criado</span></S.Title>
                <S.Text><span>Naver criado com sucesso!</span></S.Text>
            </S.Container>
        </S.Wrapper>
    );
};

export default ConfirmCreateNaveModal;