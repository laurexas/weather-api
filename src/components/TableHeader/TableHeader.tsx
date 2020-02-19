import React from 'react';
import style from './index.module.scss';


interface HeaderProps {
    city: string,
    country: string
}

const TableHeader = (props:HeaderProps):JSX.Element => {
    return (
        <div className={style.tableTitle}>
            <span>{props.city}, {props.country}</span>
        </div>
    )
}

export default TableHeader;