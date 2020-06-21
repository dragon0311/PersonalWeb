import React, { Component } from 'react';
import { Button } from 'antd';
import qs from 'querystring';
import {v1} from 'uuid'
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
      const type = e.target.files[0].type;
      const name = e.target.files[0].name;
      fr.readAsArrayBuffer(e.target.files[0]);
      fr.onload = r => {
        const result: ArrayBuffer = r.target?.result as ArrayBuffer;
        const dataUint8Array = new Uint8Array(result);
        const pic = this.arrayBufferToBase64(dataUint8Array);
        const ID = v1();

        fetch('/wallpaper/upload-pic', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({
            ID,
            PicName: name,
            content: pic,
          })
        }).then(res => {
          return res.json()
        })
        .then(data => {
          if (data) {
            
          }
        })

      }
    }
    PicUploader.click();
  }

  private arrayBufferToBase64 = (buffer: Uint8Array) => {
    let binary = '';
    const len = buffer.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(buffer[i]);
    }
    return btoa(binary);
  }
}

export default ComputerW;