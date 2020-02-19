import React from 'react';
import style from './index.module.scss';


interface Error {
    message: string,
    close: (state: null) => void
}

const Error = (props:Error):JSX.Element => {
    return (
        <div className={style.error}>
            {props.message}
            <div>
                <button className={style.button} onClick={() => props.close(null)}>Close</button>
            </div>
        </div> 
    )
}

export default Error;