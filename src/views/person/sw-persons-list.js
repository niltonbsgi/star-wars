import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { _List } from  './sw-person-action';
import Header from '../../components/header';
import ListView from '../../components/list-view';

function mapStateToProps(state) {
    const { list, error } = state.PersonsReducer;
    return { list, error };
  }

  function mapDispatchToProps(dispatch) {
    return {
        onGetList: () => { 
            const promise = _List("https://swapi.co/api/people");
            dispatch(promise);
            return promise;
        }
    }
  }

  const Card = ({name, height, mass, hair_color, birth_year, skin_color}) =>{
    return(
        <div>
            <div style={ style.tagStyle }><label>{name}</label></div>
            <br/>
            <div>
                <div style={ style.tagTitle }><label>Height:</label></div>
                <label>{ height }</label>
            </div>
            <div>    
                <div style={ style.tagTitle }><label>Weight:</label></div>
                <label>{ mass }</label>
            </div>
            <div>    
                <div style={ style.tagTitle }><label>Hair color:</label></div>
                <label>{ hair_color }</label>
            </div>
            <div>    
                <div style={ style.tagTitle }><label>Year birth:</label></div>
                <label>{ birth_year }</label>
            </div>
            <div>    
                <div style={ style.tagTitle }><label>Skin Color:</label></div>
                <label>{ skin_color }</label>
            </div>            
        </div>
    )
  }

class SwPersonsList extends React.Component {

    constructor(props){
        super(props)

        this.state={
            list_persons: []
        }
    }

    componentDidMount(){

        const { onGetList } = this.props
        onGetList()
            .then(()=>{
                
                this.setState({
                    ...this.state, 
                    list_persons: this.props.list.results
                })
                console.log( this.props.list.results )
                
            })
            .catch((err)=>{
                console.log( err )
            })
        
    }
    render(){
        return (
            <div>
                <Header
                    onChange={(e)=> {
                        debugger
                        let list_persons = this.props.list.results.filter(function (item) {
                            return item.name.toLowerCase().search(
                                e.target.value.toLowerCase()) !== -1;
                        })
                        this.setState({list_persons: list_persons})                            
                    }}
                />
                { this.state.list_persons.map((element, i) =>{
                    return <ListView key={i} element={ 
                        <Card
                            name={element.name} 
                            height={element.height} 
                            mass={element.mass} 
                            hair_color={element.hair_color} 
                            birth_year={element.birth_year} 
                            skin_color={element.skin_color}/> 
                        }/>
                }) }
            </div>    
        )
    }
} 

const style = {
    tagStyle: { 
        borderBottom:'solid 0.05em', 
        width:'95%', 
        fontWeight:'bold', 
        fontSize:'18px'         
    },
    tagTitle: { 
        fontWeight:'bold', 
        paddingRight:'5px', 
        paddingTop:'6px', 
        display: 'inline-block' 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SwPersonsList));