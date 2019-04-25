import * as React from "react";

interface BoardCockpitProps {
  desc: string;
  name: string;
}

interface IState {
  number: number;
  text: string;
}

class BoardCockpit extends React.PureComponent<BoardCockpitProps, IState> {
  state: IState = {
      text: 'xD',
      number: 0
  };

  render() {
    return <h3>BoardCockpit</h3>;
  }
}

export default BoardCockpit;
