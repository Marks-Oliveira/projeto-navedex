import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import api from '../../services/api';

import * as S from './styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if (token) {
            history.replace('/navers');
        }
    },[history]);

    const handleSubmitLogin = async (event) => {
        event.preventDefault();

        const body = {
            email: email,
            password: password
        };
    
        try {
            const response = await api.post(`/users/login`, body);
    
            window.localStorage.setItem("token", response.data.token);
            history.replace("/navers");
        } catch (e) {
            if (e.response.status === 400) {
                setError("Email e senha incorretos");
            } else if (e.response.status === 401) {
                setError("Senha incorreta");
            } else {
                alert("Login falhou :(");
            }
        };
    };

    return (
        <S.Wrapper>
            <S.Container>
                <S.Title>
                    <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.8491 45.2685L28.1586 60L40.5882 43.8107L41.8926 31.688L52.0972 21.4834L60.0767 0L38.5933 7.90281L28.312 18.1074L16.1893 19.4118L0 31.8414L14.7315 31.1509L28.8491 45.2685Z" fill="#212121"/>
                        <path d="M15.4216 36.1374L23.8615 44.654L11.3551 49.1809L15.4216 36.1374Z" fill="#212121"/>
                    </svg>
                    <span>nave.rs</span>
                </S.Title>
                <S.Inputs>
                    <form onSubmit={handleSubmitLogin}>
                        <TextField style={{ marginBottom: "25px" }}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Email"
                            size="small"
                            type="email"
                            InputLabelProps={{ shrink: true }}
                            placeholder="Email"
                            autoFocus
                        />
                        <TextField
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            size="small"
                            label="Senha"
                            type="password"
                            InputLabelProps={{ shrink: true }}
                            placeholder="Senha"
                        />
                        {error && <S.ErrorWarning>{error}</S.ErrorWarning>}
                        <S.EnterButton>
                            <Button 
                                style={{ 
                                    background: "#212121", 
                                    color: "#fff",
                                    marginTop: "30px"
                                }}
                                variant="contained" 
                                fullWidth
                                size="medium"
                                type="submit"
                            >
                                Entrar
                            </Button>
                        </S.EnterButton>
                    </form>
                </S.Inputs>
            </S.Container>
        </S.Wrapper>
    );
};

export default LoginPage;