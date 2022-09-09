import React, { createRef } from "react";
import './cards.css';


class Card extends React.Component {
    ref = createRef();
    componentDidMount(){
        /**
         * @type {HTMLElement}
         */
        const cardElt = this.ref.current;
        const imgUrl = this.props.bgImage;
        cardElt.style.backgroundImage = imgUrl;
    }

    render() {

        return (
            <div ref={this.ref} className="card-container" style={this.props.style}>
                <button className="upper-btn">{this.props.button}</button>
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
                <button>{this.props.more}</button>
                
            </div>
        )
    }
}

export default Card;