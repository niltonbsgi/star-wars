import React from 'react';
import PropTypes from 'prop-types';
import Star_Wars_Title from '../assets/Star_Wars_Title.png'

const Header = ({onChange}) => {
    return (
        <div style={ style.headerPaddingBotton }>
            <img 
                style={ style.header } 
                src={Star_Wars_Title}/>
            <input 
                placeholder="Search for a person..." 
                style={ style.search }
                onChange={(e)=> onChange(e)}/>
        </div>
    )
}

const style = {
    header: { 
        width: '15%', 
        marginTop:'1%', 
        marginLeft:'1%', 
        marginRight:'2%'
    },
    search: { 
        outline: 'none', 
        color: '#5f5f5f', 
        fontSize:20, 
        width:'80%', 
        background:'none', 
        borderWidth: '0 0 1px', 
        borderColor:'#5f5f5f',
        fontFamily: 'Open Sans Condensed,sans-serif' 
    },
    headerPaddingBotton: {
        paddingBottom:'5px'
    }
}

Header.propTypes = {
    onChange: PropTypes.func
  };

Header.defaultProps = {
    onChange: ()=> {}
  };

export default Header;
