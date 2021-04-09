import React from 'react';

import * as S from './styles';

const ConfirmDeleteModal = ({ displayConfirmDelete, getNavers }) => {
    
    const confirmDelete = () => {
        displayConfirmDelete();
        getNavers();
    };

    return (
        <S.Wrapper>
            <S.Container>
                <S.ExitModal onClick={confirmDelete}>
                    X
                </S.ExitModal>
                <S.Title><span>Naver excluído</span></S.Title>
                <S.Text><span>Naver excluído com sucesso!</span></S.Text>
            </S.Container>
        </S.Wrapper>
    );
};

export default ConfirmDeleteModal;
