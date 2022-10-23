import React, {Component} from 'react';
import "./card.css"

export class Card extends Component {
     constructor() {
         super();
         this.state = {
             deleted : false,
         }
     }

    deleteCard = () =>{
      this.setState(({deleted}) => {
          return {
              deleted: !deleted,
          }
      })
    }

    render(){
        const {title, deg} = this.props;
        return (
            this.state.deleted ? null :
            <div className="card-container">
                       <div className="card-title">{title}</div>
                       <div className="card-temperature">{deg}°C</div>
                     <button onClick={this.deleteCard} type="submit">DELETE</button>
            </div>
        )
    }
}


// export const Card = (props) => (
//     <div className="card-container">
//           <div className="card-title">{props.title}</div>
//           <div className="card-temperature">{props.deg}°C</div>
//         <button type="submit">DELETE</button>
//     </div>
// );

