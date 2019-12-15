import React, { Component } from "react";
import clsx from "clsx";

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

  flip = () => {
    this.setState({ flipped: !this.state.flipped });
  };

  render() {
    const { flipped } = this.state;
    const { children } = this.props;

    return (
      <div
        className={clsx(style.cardContainer, { [style.flipped]: flipped })}
        onMouseEnter={this.flip}
        onMouseLeave={this.flip}
      >
        {React.Children.map(children, child => {
          if (child.type.displayName === "front") {
            return React.cloneElement(child, { ...child.props });
          }
          if (child.type.displayName === "back") {
            return React.cloneElement(child, { ...child.props });
          }
        })}
      </div>
    );
  }
}
