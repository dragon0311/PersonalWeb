import React, { Component } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const C = styled.div`
  background-color: #D1D1D1;
`

const PhoneW = (props : any) => {
  console.log(props);
  const params = new URLSearchParams(props.location.search); 
  console.log(params.get("name"));
  console.log(params.get("age"));
  return(
    <C>
      Homework
      <Button type='primary' onClick={() => {
        props.history.replace('/video');
      }}>
        返回视频
      </Button>
    </C>
  )
}

// class Homework extends Component {
//   render() {
//     return (
//       <div>
//         Homework
//       </div>
//     );
//   }
// }

export default PhoneW;