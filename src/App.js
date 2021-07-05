import React, { useState , useRef } from 'react';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';

import Default from './asset/dd.jpg';
import './styles.css';
import QRCode from "react-qr-code";
import { FaFacebook ,FaInstagram,FaYoutube} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";


// const ComponentToPrint = React.forwardRef((props, ref) => (
//   <div ref={ref}>Hello World</div>
// ));

function App() {
const [name, setName] = useState("Võ Ngọc Chính")
const [qr, setQr] = useState("https://linktr.ee/vongocchinh?")
const [picture, setPicture] = useState(null);
const [size, setSize] = useState(80);
const [sizeText, setSizeText] = useState(28);
const [fontText, setFontText] = useState("Arial, Helvetica, sans-serif");




// const readFile = file => {
// return new Promise((resolve, reject) => {
// const fr = new FileReader();
// fr.onerror = reject;
// fr.onload = function() {
// resolve(fr.result);
// };
// fr.readAsDataURL(file);
// });
// };
const componentRef = useRef();

return (
<div className="App">
    <div className="img-side">
        <div className="bg" ref={componentRef} >
            <div className="img">
              <div className="icon">
                <FaFacebook className="ion-icon" />
                <FaInstagram className="ion-icon" />
                <SiTiktok className="ion-icon" />
                <FaYoutube className="ion-icon" />
              </div>
                <p style={{fontSize:sizeText+"px",fontFamily:fontText}} className="label">
                    {name}
                </p>
                <div className="container-qr">
                    <QRCode size={size} className="QRCode" value={qr} />
                </div>
              <img alt="" src={picture?picture:Default} />
            </div>
        </div>

    </div>
        <div className="options">
            <div className="item-option">
                <p><strong>1.QR Code</strong></p>
            </div>
            <div className="item-option">
                <p>Nhập link http</p><input onChange={e=>{setQr(e.target.value)}} value={qr} className="input-file"
                type="text" />
                <span onClick={()=>{setSize(size-5)}}>-Thu nhỏ</span>
                <span onClick={()=>{setSize(size+5)}}>+Phóng to</span>
            </div>
        </div>
    <div className="options">
        <div className="item-option">
            <p><strong>2.Hình nền</strong></p>
        </div>
        <div className="item-option">
            <p>Đổi logo (Ảnh PNG trong suốt, size lớn hơn 1000px)</p><input accept="image/*"
                onChange={e=>{setPicture(e.target.files[0]);}} className="input-file" type="file" />
        </div>
    </div>
    <div className="options">
        <div className="item-option">
            <p><strong>3.Thông tin thẻ</strong></p>
        </div>
        <div className="item-option">
            <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} />
            <select onChange={e=>{setFontText(e.target.value)}} value={fontText}>
                <option value="Arial, Helvetica, sans-serif">Sans-serif</option>
                <option value="'Courier New', Courier, monospace">Courier</option>
                <option value="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">Franklin </option>
                <option value="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif">Times New Roman</option>
                <option value="cursive">Cursive</option>
                <option value="'Roboto', sans-serif">Roboto</option>
                <option value="'Qahiri', sans-serif">Qahiri</option>
            </select>
            <span onClick={()=>{setSizeText(sizeText-2)}}>-Thu nhỏ</span>
            <span onClick={()=>{setSizeText(sizeText+2)}}>+Phóng to</span>
        </div>
    </div>
    <div className="options">
      <div className="item-option">
      <button onClick={() => exportComponentAsJPEG(componentRef)}>
        Export As JPEG
      </button>
      <button onClick={() => exportComponentAsPDF(componentRef)}>
        Export As PDF
      </button>
      <button onClick={() => exportComponentAsPNG(componentRef)}>
        Export As PNG
      </button>
      </div>
    </div>
</div>




);
}

export default App;