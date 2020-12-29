import { Card } from '@material-ui/core';
import React from 'react';

type Option = {
    text: string
}

const OptionCard = (option: Option) => {
    return (
        <Card>
            <h1>{option.text}</h1>
        </Card>
    )
}

export default OptionCard;