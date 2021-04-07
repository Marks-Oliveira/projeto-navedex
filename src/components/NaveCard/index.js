import React, { useState } from 'react';

import NaveModal from '../NaveModal';
import ExcludesNaveModal from '../ExcludesNaveModal';

import * as S from './styles';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import EditSharpIcon from '@material-ui/icons/EditSharp';

const NaveCard = ({item}) => {
    const [displayModal, setDisplayModal] = useState(false);
    const [displayModalExcludeNave, setDisplayModalExcludeNave] = useState(false);

    const handleDisplayModal = () => {
        setDisplayModal(!displayModal);
    };

    const handleExcludeNave = () => {
        if (displayModal) {
            handleDisplayModal();
            setDisplayModalExcludeNave(!displayModalExcludeNave);
        } else {
            setDisplayModalExcludeNave(!displayModalExcludeNave);
        }
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
                    onClick={handleExcludeNave}
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
                    displayModalExclude={() => handleExcludeNave()}
                /> 
                : null
            }

            {displayModalExcludeNave ? 
                <ExcludesNaveModal 
                    naverId={item.id}
                    displayModalExclude={() => handleExcludeNave()}
                /> 
                : null
            }
        </S.Wrapper>
    );
};

export default NaveCard;
