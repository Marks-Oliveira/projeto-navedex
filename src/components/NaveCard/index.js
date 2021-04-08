import React, { useState } from 'react';

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

    return (
        <S.Wrapper>
            <S.NavePhoto style={{ cursor: 'pointer' }}>
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
                    getNavers={getNavers}
                /> 
                : null
            }

            {displayConfirmDelete ? 
                <ConfirmDeleteModal
                    displayConfirmDelete={() => confirmDelete()}
                /> 
                : null
            }
        </S.Wrapper>
    );
};

export default NaveCard;
