import React, { useEffect, useState } from 'react';
import "./CatalogDetail.scss";

const CatalogDetail = ({ id }) => {

    return (
        <div className="catalog-detail">
            <h1>Catalog Detail {id}</h1>
        </div>
    );
};

export default CatalogDetail;
