import * as React from "react";
import "./index.css";

interface ISquareProps {
  value: any;
  onClickHandler: Function;
  squareNumber?: number;
}

class Square extends React.Component<ISquareProps, {}> {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClickHandler(this.props.squareNumber)}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Square;
