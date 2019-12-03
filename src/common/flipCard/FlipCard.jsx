import React, { Component } from "react";

import Front from "./common/Front";
import Back from "./common/Back";

import style from "./FlipCard.module.scss";

export default class FlipCard extends Component {
  static Front = Front;
  static Back = Back;
  constructor(props) {
    super(props);

    this.state = {
      flipped: false
    };
  }

  render() {
    const { flipped } = this.state;
    const { children } = this.props;

    return (
      <div
        className={style.flipperContainer}
        onMouseEnter={() => this.setState({ flipped: !flipped })}
        onMouseLeave={() => this.setState({ flipped: !flipped })}
      >
        <div className={style.flipper}>
          {React.Children.map(children, child => {
            if (!flipped && child.type.displayName === "front") {
              return React.cloneElement(child, { ...child.props });
            }
            if (flipped && child.type.displayName === "back") {
              return React.cloneElement(child, { ...child.props });
            }
          })}
        </div>
      </div>
    );
  }
}

// const FlipCard = ({ children }) => {
//   let front = Front;
//   let back = Back;

//   const [flipped, setFlipped] = useState(false);

//   return (
//     <div
//       className={style.flipperContainer}
//       onClick={() => setFlipped(!flipped)}
//     >
//       <div className={style.flipper}>
//         {React.Children.map(children, child => {
//           console.log("CHILDREN: ", children);
//           if (!flipped && child.type.displayName === "front") {
//             return React.cloneElement(child, { ...child.props });
//           }
//           if (flipped && child.type.displayName === "back") {
//             return React.cloneElement(child, { ...child.props });
//           }
//         })}
//       </div>
//     </div>
//   );
// };

// export default FlipCard;
