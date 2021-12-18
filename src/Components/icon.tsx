import React from "react";
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type X ={
    name:string
}

const Icon = (props:X) => {
    return (
        <svg className='icon'>
            <use xlinkHref={'#'+props.name}/>
        </svg>
    )
}

export default Icon;