import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { toast } from 'react-toastify';
import moment from 'moment';

import { useUserIssues } from '../../providers/userContext';
import { calculateAge } from '../../constants/calculateAge';
import { calculateAdmissionDate } from '../../constants/calculateAdmissionDate';
import api from '../../services/api';
import Header from '../../components/Header';
import ConfirmEditNaveModal from '../../components/ConfirmEditNaveModal';

import * as S from './styles';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const EditNavePage = () => {
    const { user } = useUserIssues();
    const [name, setName] = useState(user?.name);
    const [birthdate, setBirthdate] = useState(moment(user?.birthdate).format("YYYY-MM-DD"));
    const [projects, setProjects] = useState(user?.project);
    const [role, setRole] = useState(user?.job_role);
    const [companyTime, setCompanyTime] = useState(moment(user?.admission_date).format("YYYY-MM-DD"));
    const [urlPhoto, setUrlPhoto] = useState(user?.url);
    const [displayConfirmEdit, setDisplayConfirmEdit] = useState(false);
    const history = useHistory();
    const pathParams = useParams();

    useEffect(() => {
        if (window.localStorage.getItem('token') === null) {
          history.push('/');
        }
    }, [history]);

    const confirmEditNave = () => {
        setDisplayConfirmEdit(!displayConfirmEdit);
    };

    const handleEditNaver = async (event) => {
        event.preventDefault();

        if (calculateAge(birthdate) < 18) {
            toast.error("Idade não pode ser menor que 18 anos");
            return;
        };

        if (calculateAdmissionDate(companyTime, birthdate) < 0) {
            toast.error("Data de admissão inválida");
            return;
        };

        const config = {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem('token')}`,
            },
        };

        const formattedBirthdate = moment(birthdate).format("DD/MM/YYYY");
        const formattedAdmissionDate = moment(companyTime).format("DD/MM/YYYY");

        const data = {
            name: name,
            birthdate: formattedBirthdate,
            admission_date: formattedAdmissionDate,
            job_role: role,
            project: projects,
            url: urlPhoto
        };
    
        try {
            await api.put(`/navers/${pathParams.naverId}`, data, config);
            confirmEditNave();

        } catch (e) {
            toast.error("Falha ao editar o Naver");
        };
    };    

    const goToHomePage = () => {
        history.goBack();
    };

    return (
        <S.Wrapper>
            <Header />
            <S.Container>
                <S.Title>
                    <ArrowBackIosSharpIcon 
                        onClick={goToHomePage} 
                        style={{ 
                            marginRight: '.8rem',
                            cursor: 'pointer'
                        }} 
                    />
                    <span>Editar Naver</span>
                </S.Title>
                <S.Inputs>
                    <form onSubmit={handleEditNaver}>
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
                            inputProps={{
                                minLength: 3
                            }}
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
