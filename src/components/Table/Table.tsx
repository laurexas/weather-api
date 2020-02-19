import React from 'react';
import style from './index.module.scss';


interface Children {
    children: any
}

const Table = (props:Children):JSX.Element => {
    return (
        <div className={style.table}>
            {props.children}
        </div>
    )
}

export default Table;