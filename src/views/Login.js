import React from 'react'

import Form from '../components/Form'

export default function Login({title, txtBtn, path}) {
    return(
        <div className='log-page'>
            <Form title={title} txtBtn={txtBtn} path={path}/>
        </div>
    )
}

