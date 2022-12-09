import React from 'react';
import error from '../../assets/404.webp'

export default function Error (){
    return (
        <>
        <img src={error} alt={'Page not found'}/>
        </>
    )
}
