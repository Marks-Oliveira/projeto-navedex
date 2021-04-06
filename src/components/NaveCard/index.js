import React from 'react';

import * as S from './styles';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import EditSharpIcon from '@material-ui/icons/EditSharp';

const NaveCard = ({item}) => {
    return (
        <S.Wrapper>
            <S.NavePhoto>
                <img src={item.url} alt="Imagem Navers" />
            </S.NavePhoto>
            <S.NameAndOffice>
                <p>{item.name}</p>
                <span>{item.job_role}</span>
            </S.NameAndOffice>
            <S.Buttons>
                <DeleteSharpIcon style={{ color: '#212121', marginRight: '.5rem', cursor: 'pointer' }} />
                <EditSharpIcon style={{ color: '#212121', cursor: 'pointer' }} />
            </S.Buttons>
        </S.Wrapper>
    );
};

export default NaveCard;