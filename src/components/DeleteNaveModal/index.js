import React from 'react';

import api from '../../services/api';

import * as S from './styles';
import Button from '@material-ui/core/Button';

const DeleteNaveModal = ({
    displayModalDeleteNave, 
    displayConfirmDelete, 
    naverId,
    getNavers
}) => {

    const token = window.localStorage.getItem('token');

    const handleDeleteNaver = async () => {
        const headers = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        };

        try {
            await api.delete(`/navers/${naverId}`, headers);
            displayModalDeleteNave();
            getNavers();
            displayConfirmDelete();
        } catch (error) {
            alert("Erro ao excluir naver :(");
        };
    };

    return (
        <S.Wrapper>
            <S.Container>
                <S.Title><span>Excluir Naver</span></S.Title>
                <S.Text><span>Tem certeza que deseja excluir este Naver?</span></S.Text>
                <S.Buttons>
                    <S.ButtonsContent>
                        <Button 
                            style={{ 
                                background: "#fff", 
                                color: "#000",
                                border: '1px solid #000',
                                width: '12rem' 
                            }}
                            variant="contained"
                            size="medium"
                            onClick={displayModalDeleteNave}
                        >
                            Cancelar
                        </Button>

                        <Button 
                            style={{ 
                                background: "#000", 
                                color: "#fff",
                                width: '12rem' 
                            }}
                            variant="contained"
                            size="medium"
                            onClick={handleDeleteNaver}
                        >
                            Excluir
                        </Button>
                    </S.ButtonsContent>
                </S.Buttons>
            </S.Container>
        </S.Wrapper>
    );
};

export default DeleteNaveModal;
