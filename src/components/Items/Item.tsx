import React from 'react';

interface Props {
    onItemClick: React.MouseEventHandler;
    link: string;
    name: string;
}

const Item: React.FC<Props> = ({onItemClick, link, name}) => {
    return (
        <div>
            <button style={{background: 'none', border: 'none'}} onClick={onItemClick} type='button'><img width={40} src={link} alt={name} /></button>
        </div>
    );
};

export default Item;