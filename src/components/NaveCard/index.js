import React, { useState } from 'react';
import { useHistory } from 'react-router';

import NaveModal from '../NaveModal';
import DeleteNaveModal from '../DeleteNaveModal';
import ConfirmDeleteModal from '../ConfirmDeleteModal';

import * as S from './styles';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import EditSharpIcon from '@material-ui/icons/EditSharp';

const NaveCard = ({ item, getNavers }) => {
    const [displayModal, setDisplayModal] = useState(false);
    const [displayModalDeleteNave, setDisplayModalDeleteNave] = useState(false);
    const [displayConfirmDelete, setDisplayConfirmDelete] = useState(false);
    const history = useHistory()

    const handleDisplayModal = () => {
        setDisplayModal(!displayModal);
    };
    
    const handleDeleteNave = () => {
        if (displayModal) {
            handleDisplayModal();
            setDisplayModalDeleteNave(!displayModalDeleteNave);
        } else {
            setDisplayModalDeleteNave(!displayModalDeleteNave);
        }
    };
    
    const confirmDelete = () => {
        setDisplayConfirmDelete(!displayConfirmDelete);
    };

    const goToEditNavePage = () => {
        history.push(`/navers/edit/${item.id}`)
    };

    return (
        <S.Wrapper>
            <S.NavePhoto>
                <img src={item.url} onClick={handleDisplayModal} alt="Imagem Navers" />
            </S.NavePhoto>
            <S.NameAndOffice>
                <p>{item.name}</p>
                <span>{item.job_role}</span>
            </S.NameAndOffice>
            <S.Buttons>
                <DeleteSharpIcon 
                    style={{ 
                        color: '#212121', 
                        marginRight: '.5rem', 
                        cursor: 'pointer' 
                    }}
                    onClick={handleDeleteNave}
                />
                <EditSharpIcon 
                    style={{ 
                        color: '#212121', 
                        cursor: 'pointer' 
                    }}
                    onClick={goToEditNavePage}
                />
            </S.Buttons>
            {displayModal ? 
                <NaveModal 
                    item={item}
                    displayModal={() => handleDisplayModal()}
                    displayModalDeleteNave={() => handleDeleteNave()}
                /> 
                : null
            }

            {displayModalDeleteNave ? 
                <DeleteNaveModal 
                    naverId={item.id}
                    displayModalDeleteNave={() => handleDeleteNave()}
                    displayConfirmDelete={() => confirmDelete()}
                /> 
                : null
            }

            {displayConfirmDelete ? 
                <ConfirmDeleteModal
                    displayConfirmDelete={() => confirmDelete()}
                    getNavers={getNavers}
                /> 
                : null
            }
        </S.Wrapper>
    );
};

export default NaveCard;
