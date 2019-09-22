import React from 'react';

const ListView = ({element}) => {
    return <div style={ style.border }>{ element }</div>
}

const style={
    border:{
        paddingTop: '8px',
        paddingLeft:'8px',
        borderRadius:'5px',
        display: 'inline-block',
        color:'white',
        border:'solid 0.05em',
        margin: '1em',
        height: '170px',
        width: '400px',
        borderColor: '#CFB53B',
        background:'#252120'        
    }
} 

export default ListView