import React from "react"
import styled from "styled-components";

const C = styled.div`
  background-color: #D1D1D1;
`

type IProps = {

}

interface IState {

}

class Home extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};

  }

  render() {
    return (
      <C>
        qqqq
      </C>
    );
  }
}

export default Home;