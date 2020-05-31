import React, { Component } from 'react';
import { Button } from 'antd';

const PhoneW = (props : any) => {
  console.log(props);
  const params = new URLSearchParams(props.location.search); 
  console.log(params.get("name"));
  console.log(params.get("age"));
  return(
    <div>
      Homework
      <Button type='primary' onClick={() => {
        props.history.replace('/video');
      }}>
        返回视频
      </Button>
    </div>
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