import React from 'react';
import { useParams } from 'react-router-dom';

const RepositoryDetail = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Detalles del Proyecto {id}</h1>
            <p>Descripción del proyecto...</p>
        </div>
    );
}

export default RepositoryDetail;
