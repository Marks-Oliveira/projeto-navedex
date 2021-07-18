import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

import api from '../../services/api';

import * as S from './styles';
import logo from '../../assets/logoNave.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const history = useHistory();

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if (token) {
            history.replace('/navers');
        }
    },[history]);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

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
                setError("Email e/ou senha incorreto(s)");
            } else if (e.response.status === 401) {
                setError("Senha incorreta");
            } else {
                toast.error("Ops... Ocorreu um erro");
            }
        };
    };
    
    return (
        <S.Wrapper>
            <S.Container>
                <S.Title>
                    <img src={logo} alt="Logo Nave" />
                </S.Title>
                <S.Inputs>
                    <form onSubmit={handleSubmitLogin}>
                        <TextField style={{ marginBottom: "1.5rem" }}
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
                            placeholder="exemplo@email.com"
                            autoFocus
                        />
                        <TextField
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            size="small"
                            label="Senha"
                            InputLabelProps={{ shrink: true }}
                            placeholder="******"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword}>
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            inputProps={{
                                minLength: 6
                            }}
                        />
                        {error && <S.ErrorWarning>{error}</S.ErrorWarning>}
                        <S.EnterButton>
                            <Button 
                                style={{ 
                                    background: "#212121", 
                                    color: "#fff",
                                    marginTop: "2rem"
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
