import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { _List_StarShip } from  './sw-person-action';
import Page from 'react-page-loading';

function mapStateToProps(state) {
    const { list_star_ship, error } = state.PersonsReducer;
    return { list_star_ship, error };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetListStarShip: (url) => { 
            const promise = _List_StarShip(url);
            dispatch(promise);
            return promise;
        }
    }
}

const Card = ({
    goBack,
    starShipList, 
    name, 
    model, 
    manufacturer, 
    max_atmosphering_speed, 
    length, 
    hyperdrive_rating, 
    starship_class, 
    MGLT, 
    consumables}) =>{
    return(        
        <div>
            <div align="center" style={ style.tagStyle }>
                <label>Details</label>
            </div>
            <br/>

            { starShipList() }
            
            <br/>

            <div>
                <div style={ style.tagTitle }><label>Star Ship:</label></div>
                <label style={ style.detailColor }>{ name }</label>
            </div>
            <div>
                <div style={ style.tagTitle }><label>Model:</label></div>
                <label style={ style.detailColor }>{ model }</label>
            </div>
            <div>    
                <div style={ style.tagTitle }><label>Manufacturer:</label></div>
                <label style={ style.detailColor }>{ manufacturer }</label>
            </div>
            <div>    
                <div style={ style.tagTitle }><label>Max Atmosphering Speed:</label></div>
                <label style={ style.detailColor }>{ max_atmosphering_speed }</label>
            </div>
            <div>    
                <div style={ style.tagTitle }><label>Length:</label></div>
                <label style={ style.detailColor }>{ length }</label>
            </div>
            <div>    
                <div style={ style.tagTitle }><label>Hyperdrive Rating:</label></div>
                <label style={ style.detailColor }>{ hyperdrive_rating }</label>
            </div>
            <div>    
                <div style={ style.tagTitle }><label>Starship Class:</label></div>
                <label style={ style.detailColor }>{ starship_class }</label>
            </div>
            <div>    
                <div style={ style.tagTitle }><label>MGLT:</label></div>
                <label style={ style.detailColor }>{ MGLT }</label>
            </div>
            <div>    
                <div style={ style.tagTitle }><label>Consumables:</label></div>
                <label style={ style.detailColor }>{ consumables }</label>
            </div>

            <br/>
            <label style={ style.styleTextDecoration } onClick={ goBack  }>Go back</label>                        
        </div>
    )
  }

class SwPersonDetail extends React.Component {
    
    constructor(props){
        super(props)

        this.state={
            url_list: [],
            shipOwner: '',
            list_star_ship: {
                name:'',
                model:'',
                manufacturer:'',
                max_atmosphering_speed:'',
                length:'',
                hyperdrive_rating:'',
                starship_class:'',
                MGLT:'',
                consumables:''
            }
        }

        this.starShipList = this.starShipList.bind(this)
        this.goBack = this.goBack.bind(this)

    }

    componentDidMount(){
        debugger
        const { history } = this.props
        if(history !== undefined){
            try
            {
                const { url_list, name } = history.location.state
                debugger
                this.setState({
                    ...this.state, 
                    url_list: url_list,
                    shipOwner: name
                })
            }catch{
                this.setState({
                    ...this.state, 
                    url_list: [],
                    shipOwner: ''
                })
            }
        }
    }
    
    goBack(){
        this.props.history.push(`/sw_persons/`)
    }

    starShipList(){
        return(
            <div style={style.styleList}>
                { 
                    this.state.url_list.map((element, i)=>{
                        return( 
                            <div 
                                key={ i }
                                style={ style.styleFontSize } 
                                onClick={ ()=>{ 

                                    const { onGetListStarShip } = this.props
                                    onGetListStarShip(element)
                                        .then(()=>{
                                            const { list_star_ship } = this.props
                                            this.setState({...this.state, list_star_ship: list_star_ship})                                            
                                        })
                                }}>
                                    <label style={ style.styleTextDecoration }>{`${this.state.shipOwner} ${i+1}...`}</label>
                            </div>
                        )
                    }) 
                }              
            </div>            
        )
    }

    render(){
        const { list_star_ship } = this.state
        return (
            <div 
                className="custom_view" 
                style={ style.styleDetail }>
                    <Page loader={"bar"} color={"#A9A9A9"} size={4}>
                        <Card
                            goBack={ this.goBack }
                            starShipList={ this.starShipList }
                            name={ list_star_ship.name }
                            model={ list_star_ship.model }
                            manufacturer={ list_star_ship.manufacturer }
                            max_atmosphering_speed={ list_star_ship.max_atmosphering_speed }
                            length={ list_star_ship.length }
                            hyperdrive_rating={ list_star_ship.hyperdrive_rating }
                            starship_class={ list_star_ship.starship_class }
                            MGLT={ list_star_ship.MGLT }
                            consumables={ list_star_ship.consumables }                        
                        />
                    </Page>                    
            </div>    
        )
    }
}

const style={
    styleDetail: {  
        marginLeft:'30%', 
        height:'500px', 
        width:'500px',
        fontSize:'22px' 
    },
    tagStyle: { 
        borderBottom:'solid 0.05em', 
        width:'95%', 
        fontWeight:'bold', 
        fontSize:'25px'
    },
    tagTitle: { 
        fontWeight:'bold', 
        paddingRight:'5px', 
        paddingTop:'6px', 
        display: 'inline-block' 
    },
    detailColor: {
        color:'#CFB53B'
    },
    styleList: { 
        overflow: 'auto', 
        height:'50px', 
        width: '99%' 
    },
    styleFontSize: { 
        fontSize:'15px' 
    },
    styleTextDecoration: {
        textDecoration: 'underline',
        color:'#CFB53B',
        cursor:'pointer'
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SwPersonDetail));
