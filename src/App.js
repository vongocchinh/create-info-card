import React, { useState, useRef } from "react";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";

import Default from "./asset/sss.jpg";
import "./styles.css";
import QRCode from "react-qr-code";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { FcNfcSign } from "react-icons/fc";

import {GrView} from 'react-icons/gr'

function App() {
  const [name, setName] = useState("Võ Ngọc Chính");
  const [qr, setQr] = useState("https://linktr.ee/vongocchinh?");
  const [picture, setPicture] = useState(null);
  const [color, setColor] = useState("#FFFFFF");
  const [size, setSize] = useState(80);
  const [sizeText, setSizeText] = useState(28);
  const [fontText, setFontText] = useState("Arial, Helvetica, sans-serif");

  // const readFile = file => {
  //   return new Promise((resolve, reject) => {
  //     const fr = new FileReader();
  //     fr.onerror = reject;
  //     fr.onload = function() {
  //     resolve(fr.result);
  // };
  //   fr.readAsDataURL(file);
  // });
  // };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPicture(URL.createObjectURL(event.target.files[0]));
    }
  };

  const componentRef = useRef();

  return (
    <>
      <div className="header">
        <div>
          Ngọc Chính
        </div>
        <div>
          <GrView   className="ion-icon-view" /> <span>0</span>
        </div>
      </div>
      <div className="App">
      <div className="img-side">
        <div className="bg" ref={componentRef}>
          <div className="img">
            <div className="icon">
              <FcNfcSign className="ion-icon" />
              <FaFacebook className="ion-icon" />
              <FaInstagram className="ion-icon" />
              <SiTiktok className="ion-icon" />
              <FaYoutube className="ion-icon" />
            </div>
            <p
              style={{ fontSize: sizeText + "px", fontFamily: fontText ,color:color}}
              className="label"
            >
              {name}
            </p>
            <div className="container-qr">
              <QRCode size={size} className="QRCode" value={qr} />
            </div>
            <img alt="" src={picture ? picture : Default} />
          </div>
        </div>
      </div>
      <div className="option-left">
        <div className="options">
          <div className="item-option">
            <p>
              <strong>1.QR Code</strong>
            </p>
          </div>
          <div className="item-option">
            <p>Nhập link linktr.ee khi đã đăng ký thông tin :</p>
          </div>
          <div className="item-option">
            <input
              onChange={(e) => {
                setQr(e.target.value);
              }}
              value={qr}
              className="input-file"
              type="text"
            />
          </div>
          <div className="item-option">
            <span
              onClick={() => {
                setSize(size - 5);
              }}
            >
              -Thu nhỏ
            </span>
            <span
              onClick={() => {
                setSize(size + 5);
              }}
            >
              +Phóng to
            </span>
          </div>
        </div>

        <div className="options">
          <div className="item-option">
            <p>
              <strong>2.Hình nền</strong>
            </p>
          </div>
          <div className="item-option">
            <p>Đổi logo (Ảnh PNG trong suốt, size lớn hơn 1000px)</p>
          </div>
          <div className="item-option">
            <input
              accept="image/*"
              onChange={onImageChange}
              className="input-file"
              type="file"
            />
          </div>
        </div>
        <div className="options">
          <div className="item-option">
            <p>
              <strong>3.Thông tin thẻ</strong>
            </p>
          </div>
          <div className="item-option">
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
            <select
              onChange={(e) => {
                setFontText(e.target.value);
              }}
              value={fontText}
            >
              <option value="Arial, Helvetica, sans-serif">Sans-serif</option>
              <option value="'Courier New', Courier, monospace">Courier</option>
              <option value="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
                Franklin{" "}
              </option>
              <option value="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif">
                Times New Roman
              </option>
              <option value="cursive">Cursive</option>
              <option value="'Roboto', sans-serif">Roboto</option>
              <option value="'Qahiri', sans-serif">Qahiri</option>
            </select>
            <select
              onChange={(e) => {
                setColor(e.target.value);
              }}
              value={color}
            >
              <option value="#FFFFFF">White</option>
              <option value="#000000">Black</option>
              <option value="#065DF5">Blue</option>
              <option value="#DF3737">Red</option>
              <option value="#26BE96">Blue 1</option>
            </select>
          </div>
          <div className="item-option">
            <span
              onClick={() => {
                setSizeText(sizeText - 2);
              }}
            >
              -Thu nhỏ
            </span>
            <span
              onClick={() => {
                setSizeText(sizeText + 2);
              }}
            >
              +Phóng to
            </span>
          </div>
        </div>
        <div className="options">
          <div className="item-option">
            <p>
              <strong>4.In Thông tin thẻ</strong>
            </p>
          </div>
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
        <div className="options">
          <div className="item-option">
            <p>
              <strong>
                5.Truy cập{" "}
                <a
                  rel="noreferrer"
                  href="https://linktr.ee/register"
                  target="_blank"
                >
                  https://linktr.ee/register
                </a>{" "}
                để đăng ký thông tin
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
