import React from 'react';

import * as S from './styles';

const ConfirmDeleteModal = ({displayConfirmDelete}) => {
    return (
        <S.Wrapper>
            <S.Container>
                <S.ExitModal onClick={displayConfirmDelete}>
                    X
                </S.ExitModal>
                <S.Title><span>Naver excluído</span></S.Title>
                <S.Text><span>Naver excluído com sucesso!</span></S.Text>
            </S.Container>
        </S.Wrapper>
    );
};

export default ConfirmDeleteModal;