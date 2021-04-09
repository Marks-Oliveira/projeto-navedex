import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import moment from 'moment';

import api from '../../services/api';
import Header from '../../components/Header';
import ConfirmEditNaveModal from '../../components/ConfirmEditNaveModal';

import * as S from './styles';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const EditNavePage = () => {
    const [name, setName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [projects, setProjects] = useState("");
    const [role, setRole] = useState("");
    const [companyTime, setCompanyTime] = useState("");
    const [urlPhoto, setUrlPhoto] = useState("");
    const [displayConfirmEdit, setDisplayConfirmEdit] = useState(false);
    const history = useHistory();
    const pathParams = useParams();

    const token = window.localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
          history.push('/');
        }
    }, [history, token]);

    const confirmEditNave = () => {
        setDisplayConfirmEdit(!displayConfirmEdit);
    };

    const handleSubmitEditNaver = async (event) => {
        event.preventDefault();

        const headers = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        };

        const formattedBirthdate = moment(birthdate).format("DD/MM/YYYY");
        const formattedAdmissionDate = moment(companyTime).format("DD/MM/YYYY");

        const body = {
            name: name,
            birthdate: formattedBirthdate,
            admission_date: formattedAdmissionDate,
            job_role: role,
            project: projects,
            url: urlPhoto
        };
    
        try {
            await api.put(`/navers/${pathParams.naverId}`, body, headers);
            confirmEditNave();

            setName("");
            setBirthdate("");
            setProjects("");
            setRole("");
            setCompanyTime("");
            setUrlPhoto("");
        } catch (e) {
            alert("Falha ao editar Naver :(");
        };
    };    

    return (
        <S.Wrapper>
            <Header />
            <S.Container>
                <S.Title>
                    <ArrowBackIosSharpIcon style={{ marginRight: '.8rem' }} />
                    <span>Editar Naver</span>
                </S.Title>
                <S.Inputs>
                    <form onSubmit={handleSubmitEditNaver}>
                        <TextField style={{ width: '18rem', marginRight: '2rem' }}
                            value={name}
                            onChange={e => setName(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            label="Nome"
                            size="medium"
                            InputLabelProps={{ shrink: true }}
                            placeholder="Nome"
                            autoFocus
                        />
                        <TextField style={{ width: '18rem' }}
                            value={role}
                            onChange={e => setRole(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            label="Cargo"
                            size="medium"
                            InputLabelProps={{ shrink: true }}
                            placeholder="Cargo"
                        />
                        <TextField style={{ width: '18rem', marginRight: '2rem' }}
                            value={birthdate}
                            onChange={e => setBirthdate(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            label="Data de nascimento"
                            size="medium"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                        />
                        <TextField style={{ width: '18rem' }}
                            value={companyTime}
                            onChange={e => setCompanyTime(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            label="Data de admissão na empresa"
                            size="medium"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                        />
                        <TextField style={{ width: '18rem', marginRight: '2rem' }}
                            value={projects}
                            onChange={e => setProjects(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            label="Projetos que participou"
                            size="medium"
                            InputLabelProps={{ shrink: true }}
                            placeholder="Projetos que participou"
                        />
                        <TextField style={{ width: '18rem' }}
                            value={urlPhoto}
                            onChange={e => setUrlPhoto(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            label="Url da foto do Naver"
                            size="medium"
                            InputLabelProps={{ shrink: true }}
                            placeholder="Url da foto do Naver"
                        />
                        <S.ButtonContent>
                            <Button
                                style={{ 
                                    background: "#212121", 
                                    color: "#fff",
                                    width: "11rem",
                                }}
                                variant="contained"
                                size="medium"
                                type="submit"
                            >
                                Salvar
                            </Button>
                        </S.ButtonContent>
                    </form>
                </S.Inputs>
            </S.Container>
            {displayConfirmEdit ? 
                <ConfirmEditNaveModal
                    displayConfirmEdit={() => confirmEditNave()}
                /> 
                : null
            }
        </S.Wrapper>
    );
};

export default EditNavePage;
