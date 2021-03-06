import React, { useState, useRef } from "react";
import {
  exportComponentAsJPEG,
  // exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";
// import { jsPDF } from "jspdf";
import Default1 from "./asset/1.webp";
import Default2 from "./asset/2.jpg";
import Default3 from "./asset/3.webp";
import Default4 from "./asset/4.jpg";
import Default5 from "./asset/5.jpg";
import Default6 from "./asset/6.jpg";
import Default7 from "./asset/7.webp";
import Default8 from "./asset/8.webp";
import Default9 from "./asset/9.jpg";
import Default10 from "./asset/10.jpg";
import Default11 from "./asset/11.webp";
// import domtoimage from 'dom-to-image';
import Default from "./asset/5.jpg";
import "./styles.css";
import QRCode from "react-qr-code";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { IoLocationOutline } from "react-icons/io5";
import Switch from "@material-ui/core/Switch";
// import { GrView } from "react-icons/gr";
const arr = [
  Default1,
  Default2,
  Default3,
  Default4,
  Default5,
  Default6,
  Default7,
  Default8,
  Default9,
  Default10,
  Default11,
  Default,
];
function App() {
  const [name, setName] = useState("Võ Ngọc Chính");
  const [qr, setQr] = useState("https://linktr.ee/vongocchinh?");
  const [picture, setPicture] = useState(null);
  const [picture2, setPicture2] = useState(null);
  const [color, setColor] = useState("#FFFFFF");
  const [size, setSize] = useState(60);
  const [sizeText, setSizeText] = useState(20);
  const [fontText, setFontText] = useState("Arial, Helvetica, sans-serif");
  const [bgColor, setBgColor] = useState("#000000");
  const [bgColorQr, setBgColorQr] = useState("#FFFFFF");
  const [bgqr, setqr] = useState("#FFFFFF");
  const [showImg, setShowImg] = useState(true);
  const [widthImg, setWidthImg] = useState(true);
  const [DesignTwo, setDesignTwo] = useState(true);
  const [arrImg, setArrImg] = useState(arr);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPicture(URL.createObjectURL(event.target.files[0]));
      arr.push(URL.createObjectURL(event.target.files[0]));
      setArrImg(arr);
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
  const showItemImg = (arr) => {
    var html = null;
    html = arr.map((item, key) => {
      return (
        <img
          key={key}
          onClick={() => {
            setPicture(item);
          }}
          className="item-img"
          alt=" "
          src={item}
        />
      );
    });
    return html;
  };

  // const exportPDF= async ()=>{
  //     const dataUrl = await domtoimage.toPng(document.querySelector("#card"));

  //     const img = new Image();
  //     img.src = dataUrl;

  //     const doc = new jsPDF();
  //     const RATIO = 1.02;
  //     const WIDTH = 85.5 * RATIO;
  //     const HEIGHT = 54 * RATIO;
  //     doc.addImage(img, "JPEG", 15, 15, WIDTH, HEIGHT);
  //     doc.addImage(img, "JPEG", 15, 90, WIDTH, HEIGHT);

  //     // doc.setFontSize(16);
  //     // doc.setFont("courier", "bold");
  //     // doc.text(`Chon "Fit to Paper" khi in nhe :3.`, 15, 160);

  //     doc.setLineWidth(3);
  //     doc.line(0, 0, 210, 0);
  //     doc.line(0, 0, 0, 297);
  //     doc.line(210, 0, 210, 297);
  //     doc.line(0, 297, 210, 297);
  //     doc.save("taothe.pdf");
  // }
  // exportPDF();
  const activeClass = () => {
    const ActiveImg = document.querySelectorAll(".item-img");
    ActiveImg.forEach((res) =>
      res.addEventListener("click", () => {
        var j = 0;
        while (j < ActiveImg.length) {
          ActiveImg[j].className = "item-img";
          j++;
        }
        res.className = "item-img active";
      })
    );
  };
  activeClass();
  return (
    <>
      <div className="header">
        <div>By Ngọc Chính .Liên hệ : ngocchinh1410@gmail.com</div>
        <div>{/* <span className="span">0</span> */}</div>
      </div>
      <div className="App">
        <div className="img-side">
          <h3>Kích thước: 85.5 × 54mm.</h3>
          <div
            style={{ backgroundColor: bgColor }}
            className="bg"
            ref={componentRef}
            id="card"
          >
            <div className={DesignTwo ? "img" : "img"}>
              <div className={DesignTwo ? "icon" : "icon-2"}>
                <FaFacebook style={{ color: color }} className="ion-icon" />
                <FaInstagram style={{ color: color }} className="ion-icon" />
                <SiTiktok style={{ color: color }} className="ion-icon" />
                <FaYoutube style={{ color: color }} className="ion-icon" />
                <IoLocationOutline
                  style={{ color: color }}
                  className="ion-icon"
                />
              </div>
              <div className={DesignTwo ? "div-label" : "div-label-2"}>
              <p
                style={{
                  fontSize: sizeText + "px",
                  fontFamily: fontText,
                  color: color,
                }}
                className={DesignTwo ? "label" : "label-2"}
              >
                {name}
              </p>
              </div>
              <div className={DesignTwo ? "div-qr" : "div-qr-2"}>
              <div
                style={{ backgroundColor: bgColorQr }}
                className={DesignTwo ? "container-qr" : "container-qr-2"}
              >
                <QRCode
                  bgColor={bgqr}
                  size={size}
                  className="QRCode"
                  value={qr}
                />
              </div>
              </div>

              <div className="img-layout">
                <img
                  style={{
                    display: showImages(showImg),
                    width: showWidthImg(widthImg),
                  }}
                  alt=""
                  src={picture ? picture : arrImg[0]}
                />
                <img
                  style={{ display: showDisImg(widthImg), width: "50%" }}
                  alt=""
                  src={picture2 ? picture2 : arrImg[1]}
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
              &nbsp;
              <p>Màu chữ , icon </p>
              <select
                value={bgColorQr}
                className="select-1"
                onChange={(e) => {
                  setBgColorQr(e.target.value);
                  setqr(e.target.value);
                }}
              >
                <option value="#000000">Màu Đen</option>
                <option value="#FFFFFF">Màu Trắng</option>
                <option value="#AE7C2B">Màu Vàng</option>
              </select>
            </div>
            <div className="item-option">
              <button
                className="span"
                onClick={() => {
                  setSize(size - 5);
                }}
              >
                -Thu nhỏ
              </button>
              <button
                className="span"
                onClick={() => {
                  setSize(size + 5);
                }}
              >
                +Phóng to
              </button>
            </div>
          </div>

          <div className="options">
            <div className="item-option">
              <p>
                <strong>2.Hình nền</strong>
              </p>
            </div>
            <div className="item-option">
              <p>Đổi ảnh (Ảnh PNG trong suốt, size lớn hơn 1000px x 1000px)</p>
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
            <div className="item-option">
              <div className="layout-item-img">{showItemImg(arrImg)}</div>
            </div>
          </div>
          <div className="options">
            <div className="item-option">
              <p>
                <strong>2.Desgin thẻ</strong>
              </p>
            </div>
            <div className="item-option">
              <Switch
                onClick={() => {
                  setDesignTwo(!DesignTwo);
                }}
                name="checkedB"
                color="primary"
              />
            </div>
          </div>
          <div className="options">
            <div className="item-option">
              <p>
                <strong>4.Thông tin thẻ</strong>
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
                <option value="#AE7C2B">Màu Vàng</option>
              </select>
            </div>
            <div className="item-option">
              <button
                className="span"
                onClick={() => {
                  setSizeText(sizeText - 2);
                }}
              >
                -Thu nhỏ
              </button>
              <button
                className="span"
                onClick={() => {
                  setSizeText(sizeText + 2);
                }}
              >
                +Phóng to
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
                {/* <option value="2">Màu Bạc</option> */}
                <option value="3">Màu Hường</option>
                <option value="4">Màu Vàng</option>
                <option value="5">Màu Đen color vàng</option>
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
                  setBgColorQr(e.target.value);
                  setqr(e.target.value);
                }}
              >
                <option value="#000000">Màu Đen</option>
                <option value="#FFFFFF">Màu Trắng</option>
                <option value="#AE7C2B">Màu Vàng</option>
              </select>
            </div>
          </div>
          <div className="options">
            <div className="item-option">
              <p>
                <strong>6.In Thông tin thẻ</strong>
              </p>
            </div>
            <div className="item-option">
              <button onClick={() => exportComponentAsJPEG(componentRef,{fileName:"design-images"})}>
                Export As JPEG
              </button>
              {/* <button onClick={() => exportComponentAsPDF(componentRef)}>
                Export As PDF
              </button> */}
              <button onClick={() => exportComponentAsPNG(componentRef)}>
                Export As PNG
              </button>
              {/* <button onClick={exportPDF}>
                PDF
              </button> */}
            </div>
          </div>
          <div className="options">
            <div className="item-option">
              <p>
                <strong>
                  7.Truy cập{" "}
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
