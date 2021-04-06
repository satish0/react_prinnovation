import React from 'react';

const portfolio = (props) => {
    return(
        <li>
            <img src={props.portfolioImage.portfoliosWeManage.image.url} alt={props.portfolioImage.portfoliosWeManage.image.fileName} />
        </li>
    );
}

export default portfolio;