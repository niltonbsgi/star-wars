import React from 'react';
import PropTypes from 'prop-types';
const ListView = ({element, onClick}) => {
    return <div className="custom_view" style={style.styleListView} onClick={ onClick } >{ element }</div>
}

const  style={
    styleListView: { 
        height: '190px', 
        width: '400px' 
    }
}

ListView.propTypes = {
    onClick: PropTypes.func
  };

ListView.defaultProps = {
    onClick: ()=> {}
  };

export default ListView