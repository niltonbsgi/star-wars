import React from 'react';

const ListView = ({element, onClick}) => {
    return <div className="custom_view" style={style.styleListView} onClick={ onClick } >{ element }</div>
}

const  style={
    styleListView: { 
        height: '190px', 
        width: '400px' 
    }
}

export default ListView