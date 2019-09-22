import React from 'react';

class SwHomePage extends React.Component {

    render(){
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
                <h2 
                    className="byline" 
                    style={style.startButton} 
                    onClick={()=>{
                        const { history } = this.props;
                        history.push(`/sw_persons/`);
                    }}>Start</h2>
                                
            </div>
        )
    }
} 

const style = {
    startButton: { 
        top:'100%', 
        cursor:'pointer' 
    }
}
export default SwHomePage

//https://www.telerik.com/blogs/5-star-wars-resources-for-developers