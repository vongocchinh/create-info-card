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
import { IoLocationOutline } from "react-icons/io5";
import Switch from "@material-ui/core/Switch";
import { GrView } from "react-icons/gr";

function App() {
  const [name, setName] = useState("Võ Ngọc Chính");
  const [qr, setQr] = useState("https://linktr.ee/vongocchinh?");
  const [picture, setPicture] = useState(null);
  const [picture2, setPicture2] = useState(null);
  const [color, setColor] = useState("#FFFFFF");
  const [size, setSize] = useState(90);
  const [sizeText, setSizeText] = useState(28);
  const [fontText, setFontText] = useState("Arial, Helvetica, sans-serif");
  const [bgColor, setBgColor] = useState("#000");
  const [bgColorQr, setBgColorQr] = useState("#FFF");
  const [bgqr, setqr] = useState("#FFF");
  const [showImg, setShowImg] = useState(true);
  const [widthImg, setWidthImg] = useState(true);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPicture(URL.createObjectURL(event.target.files[0]));
    }
  };

  const onImageChange2 = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPicture2(URL.createObjectURL(event.target.files[0]));
    }
  };

  const onChangeBg = (e) => {
    if (e.target.value) {
      var key = e.target.value;
      switch (key) {
        case "1":
          setBgColor("#212121");
          setBgColorQr("#FFF");
          setColor("#FFF");
          setqr("#FFF");
          break;
        case "2":
          setBgColor("#F6EAFE");
          setBgColorQr("#000");
          setColor("#000");
          setqr("#FFF");
          break;
        case "3":
          setBgColor("#9D888D");
          setBgColorQr("#FFF");
          setColor("#FFF");
          setqr("#FFF");
          break;
        case "4":
          setBgColor("#AE7C2B");
          setBgColorQr("#FFF");
          setColor("#000");
          setqr("#FFF");
          break;
        case "5":
          setBgColor("#000");
          setBgColorQr("#AE7C2B");
          setColor("#AE7C2B");
          setqr("#AE7C2B");
          break;
        default:
          setBgColor("#000");
          setBgColorQr("#FFF");
          setColor("#FFF");
          break;
      }
    }
  };
  const componentRef = useRef();
  const showImages = (showImg) => {
    if (showImg) {
      return "block";
    } else {
      return "none";
    }
  };
  const showWidthImg = (show) => {
    if (show) {
      return "100%";
    } else {
      return "50%";
    }
  };
  const showDisImg = (show) => {
    if (show) {
      return "none";
    } else {
      return "block";
    }
  };
  return (
    <>
      <div className="header">
        <div>Ngọc Chính</div>
        <div>
          <GrView className="ion-icon-view" /> <span className="span">0</span>
        </div>
      </div>
      <div className="App">
        <div className="img-side">
          <div
            style={{ backgroundColor: bgColor }}
            className="bg"
            ref={componentRef}
          >
            <div className="img" >
              <div className="icon">
                <FaFacebook style={{ color: color }} className="ion-icon" />
                <FaInstagram style={{ color: color }} className="ion-icon" />
                <SiTiktok style={{ color: color }} className="ion-icon" />
                <FaYoutube style={{ color: color }} className="ion-icon" />
                <IoLocationOutline
                  style={{ color: color }}
                  className="ion-icon"
                />
              </div>
              <p
                style={{
                  fontSize: sizeText + "px",
                  fontFamily: fontText,
                  color: color,
                }}
                className="label"
              >
                {name}
              </p>
              <div
                style={{ backgroundColor: bgColorQr }}
                className="container-qr"
              >
                <QRCode
                  bgColor={bgqr}
                  size={size}
                  className="QRCode"
                  value={qr}
                />
              </div>
              <div className="img-layout">
                <img
                  style={{
                    display: showImages(showImg),
                    width: showWidthImg(widthImg),
                  }}
                  alt=""
                  src={picture ? picture : Default}
                />
                <img
                  style={{ display: showDisImg(widthImg), width: "50%" }}
                  alt=""
                  src={picture2 ? picture2 : Default}
                />
              </div>
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
                className="span"
                onClick={() => {
                  setSize(size - 5);
                }}
              >
                -Thu nhỏ
              </span>
              <span
                className="span"
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
              <p>Đổi logo (Ảnh PNG trong suốt, size lớn hơn 1000px x 1000px)</p>
            </div>
            <div className="item-option">
              <input
                accept="image/*"
                onChange={onImageChange}
                className="input-file"
                type="file"
              />
            </div>
            <div className="item-option">
              <p>Chiều dài:50%</p>
              <Switch
                onClick={() => {
                  setWidthImg(!widthImg);
                }}
                name="checkedB"
                color="primary"
              />
            </div>
            {widthImg ? (
              <></>
            ) : (
              <>
                <div className="item-option">
                  <p>
                    Hình nền 2 (Ảnh PNG trong suốt, size lớn hơn 1000px x
                    1000px)
                  </p>
                </div>
                <div className="item-option">
                  <input
                    accept="image/*"
                    onChange={onImageChange2}
                    className="input-file"
                    type="file"
                  />
                </div>
              </>
            )}
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
                <option value="'Courier New', Courier, monospace">
                  Courier
                </option>
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
                className="span"
                onClick={() => {
                  setSizeText(sizeText - 2);
                }}
              >
                -Thu nhỏ
              </span>
              <span
                className="span"
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
                <strong>5.Màu nền thẻ </strong>
              </p>
            </div>
            <div className="item-option">
              <select className="select" onChange={onChangeBg}>
                <option value="1">Màu Đen</option>
                <option value="2">Màu Bạc</option>
                <option value="3">Màu Hường</option>
                <option value="4">Màu Vàng</option>
                <option value="5">Màu Đen 2</option>
              </select>

              <button
                onClick={() => {
                  setShowImg(!showImg);
                }}
              >
                {showImg ? "Ẩn" : "Hiện"}
              </button>
              <p>Màu chữ , icon </p>
              <select
                value={color}
                className="select-1"
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              >
                <option value="#000000">Màu Đen</option>
                <option value="#FFFFFF">Màu Trắng</option>
              </select>
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
