import React from 'react';

class SwPersonsList extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            showButton: false
        }
    }
    
    componentDidMount(){
        setTimeout(()=>this.setState({...this.state, showButton: true}), 1000)
    }



    render(){
        console.log(this.state.showButton)
        return (
            <div className="starwars-demo">
                <img 
                    src="//cssanimation.rocks/demo/starwars/images/star.svg" 
                    alt="Star" 
                    className="star"/>
                <img 
                    src="//cssanimation.rocks/demo/starwars/images/wars.svg" 
                    alt="Wars" 
                    className="wars"/>
                <h2 className="byline" id="byline">The Force Awakens</h2>
                {this.state.showButton && 
                    <button>Start</button>
                }
                                
            </div>
        )
    }
} 

export default SwPersonsList

//https://www.telerik.com/blogs/5-star-wars-resources-for-developers