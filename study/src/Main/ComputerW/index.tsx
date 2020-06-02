import React, { Component } from 'react';
import { Button } from 'antd';

class ComputerW extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.uploadWallPaper}>上传壁纸</Button>
      </div>
    );
  }

  private uploadWallPaper = () => {
    const PicUploader = document.createElement("input");
    PicUploader.type = 'file';
    PicUploader.onchange = (e: any) => {
      const fr = new FileReader();
      const name = e.target.files[0].name;
      fr.readAsArrayBuffer(e.target.files[0]);
      fr.onload = r => {
        const result: ArrayBuffer = r.target?.result as ArrayBuffer;
        const dataUint8Array = new Uint8Array(result);

        // fetch(

        // ).then(res => res.json())
        // .then(data => {
        //   if (data) {
        //     const img = 'data:img/png;base64,' + data.content;
        //   }
        // })

      }
    }
  }
}

export default ComputerW;