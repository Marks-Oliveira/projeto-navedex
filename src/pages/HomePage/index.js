import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import api from '../../services/api';
import Header from '../../components/Header';
import NaveCard from '../../components/NaveCard';

import * as S from './styles';
import Button from '@material-ui/core/Button';

const HomePage = () => {
    const [navers, setNavers] = useState("");
    const history = useHistory();

    const token = window.localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
          history.push('/');
        }
    }, [history, token]);

    useEffect(() => {
        getNavers();
    }, []);

    const getNavers = async () => {
        const headers = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        };

        try {
            const response = await api.get(`/navers`, headers);
            
            setNavers(response.data);
        } catch (error) {
            alert("Erro ao carregar lista de navers :(");
        };
    };

    const goToCreateNavePage = () => {
        history.push('/navers/create');
    };

    return (
        <S.Wrapper>
            <Header />
            <S.Container>
                <S.TextAndButton>
                    <S.Text><span>Navers</span></S.Text>
                    <Button 
                        style={{ 
                            background: "#212121", 
                            color: "#fff"
                        }}
                        variant="contained"
                        size="medium"
                        onClick={goToCreateNavePage}
                    >
                        Adicionar Naver
                    </Button>
                </S.TextAndButton>
                <S.Cards>
                    {navers ? 
                        navers.map((item, index) => {
                            return <NaveCard 
                                key={index} 
                                item={item}
                                getNavers={() => getNavers()}
                            /> 
                        })
                    : null}
                </S.Cards>
            </S.Container>
        </S.Wrapper>
    );
};

export default HomePage;
