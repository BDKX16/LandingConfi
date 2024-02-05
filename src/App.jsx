/* eslint-disable react/no-unknown-property */
import { Suspense, useState,useRef,useEffect } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Loader from "./components/Loader";
import CuatroPorCuatro from "./components/models/modelCuatroPorCuatro";
import { OrbitControls } from "@react-three/drei";
import WebImage from "./assets/screenCaptureConfiPLantWeb.png";
import MobileImage from "./assets/screenCaptureMobileApp.jpg";
import MobileImage2 from "./assets/screenCaptureMobileApp2.jpg";
import PlayStore from "./assets/playstore.png";
import RHT from "./assets/rhandt.JPG";
import Soil from "./assets/soil.JPG";
import Logo from "./assets/logo-new.png";
import { Link } from "react-router-dom";
import Card from "./components/Card";

function App() {
  const [dolarHoy, setDolar] = useState(0);
  const [activeScreen, setActive] = useState(0);
  const [prevValue, setPrevValue] = useState(0);
  const timeoutRef = useRef(null);

  const screens = [0, 1, 2, 3, 4];


  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>{
        setPrevValue(activeScreen);
        setActive((prevIndex) =>
          prevIndex === screens.length - 1 ? 0 : prevIndex + 1
        )},
      4000
    );

    return () => {
      resetTimeout();
    };
  }, [activeScreen]);



  const adjustForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [-56.205, -30, -12.454];
    let rotation = [-1.444, 1.207, -2];

    if (window.innerWidth < 768) {
      screenScale = [0.8, 0.8, 0.8];
    } else {
      screenScale = [0.9, 0.9, 0.9];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [modelScale, modelPosition, rotation] = adjustForScreenSize();

  fetch("https://dolarapi.com/v1/dolares/blue")
    .then((response) => response.json())
    .then((data) => setDolar(data.venta));

  return (
    <>
      <nav className="nav-bar">
        <div className="logo-new">
          <img src={Logo} alt="Confi Plant"></img>
        </div>
        <div className="navigate-tabs">
          <a href="#webapp">Inicio</a>
          <a href="#mobileapp">Aplicacion</a>
          <a href="#ordernow">Auto Kit</a>
          <a href="#opciones">Tienda</a>
        </div>
        <div className="go-app-button">
          <a href="https://confiplant.cloud">Ir a la app</a>
        </div>
      </nav>

      <label id="webapp" style={{ color: "transparent" }}></label>
      <div className="initialPageContainer"
      >
        <div className="video-presentacion">
          <svg
            id="visual"
            viewBox="0 100 900 600"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <rect x="0" y="0" width="900" height="600" fill="#80E17D"></rect>
            <path
              d="M0 255L12.5 243C25 231 50 207 75 186.8C100 166.7 125 150.3 150 142.5C175 134.7 200 135.3 225 150.2C250 165 275 194 300 194.3C325 194.7 350 166.3 375 146.7C400 127 425 116 450 124.3C475 132.7 500 160.3 525 177C550 193.7 575 199.3 600 205.3C625 211.3 650 217.7 675 217.7C700 217.7 725 211.3 750 214.5C775 217.7 800 230.3 825 230.2C850 230 875 217 887.5 210.5L900 204L900 601L887.5 601C875 601 850 601 825 601C800 601 775 601 750 601C725 601 700 601 675 601C650 601 625 601 600 601C575 601 550 601 525 601C500 601 475 601 450 601C425 601 400 601 375 601C350 601 325 601 300 601C275 601 250 601 225 601C200 601 175 601 150 601C125 601 100 601 75 601C50 601 25 601 12.5 601L0 601Z"
              fill="#48d480"
            ></path>
            <path
              d="M0 217L12.5 213.8C25 210.7 50 204.3 75 199.5C100 194.7 125 191.3 150 207.2C175 223 200 258 225 264.8C250 271.7 275 250.3 300 250.2C325 250 350 271 375 261.5C400 252 425 212 450 199.3C475 186.7 500 201.3 525 227.2C550 253 575 290 600 298.7C625 307.3 650 287.7 675 262.5C700 237.3 725 206.7 750 197.5C775 188.3 800 200.7 825 207.2C850 213.7 875 214.3 887.5 214.7L900 215L900 601L887.5 601C875 601 850 601 825 601C800 601 775 601 750 601C725 601 700 601 675 601C650 601 625 601 600 601C575 601 550 601 525 601C500 601 475 601 450 601C425 601 400 601 375 601C350 601 325 601 300 601C275 601 250 601 225 601C200 601 175 601 150 601C125 601 100 601 75 601C50 601 25 601 12.5 601L0 601Z"
              fill="#41c870"
            ></path>
            <path
              d="M0 281L12.5 277C25 273 50 265 75 269C100 273 125 289 150 292.3C175 295.7 200 286.3 225 289.8C250 293.3 275 309.7 300 321C325 332.3 350 338.7 375 343.7C400 348.7 425 352.3 450 340.2C475 328 500 300 525 294.2C550 288.3 575 304.7 600 308.3C625 312 650 303 675 294.2C700 285.3 725 276.7 750 276C775 275.3 800 282.7 825 301C850 319.3 875 348.7 887.5 363.3L900 378L900 601L887.5 601C875 601 850 601 825 601C800 601 775 601 750 601C725 601 700 601 675 601C650 601 625 601 600 601C575 601 550 601 525 601C500 601 475 601 450 601C425 601 400 601 375 601C350 601 325 601 300 601C275 601 250 601 225 601C200 601 175 601 150 601C125 601 100 601 75 601C50 601 25 601 12.5 601L0 601Z"
              fill="#39bc5f"
            ></path>
            <path
              d="M0 404L12.5 410.5C25 417 50 430 75 419.7C100 409.3 125 375.7 150 373.3C175 371 200 400 225 408.5C250 417 275 405 300 400.7C325 396.3 350 399.7 375 395.3C400 391 425 379 450 369.5C475 360 500 353 525 361.8C550 370.7 575 395.3 600 409.5C625 423.7 650 427.3 675 419C700 410.7 725 390.3 750 382.3C775 374.3 800 378.7 825 384C850 389.3 875 395.7 887.5 398.8L900 402L900 601L887.5 601C875 601 850 601 825 601C800 601 775 601 750 601C725 601 700 601 675 601C650 601 625 601 600 601C575 601 550 601 525 601C500 601 475 601 450 601C425 601 400 601 375 601C350 601 325 601 300 601C275 601 250 601 225 601C200 601 175 601 150 601C125 601 100 601 75 601C50 601 25 601 12.5 601L0 601Z"
              fill="#33b04f"
            ></path>
            <path
              d="M0 495L12.5 495.5C25 496 50 497 75 491.2C100 485.3 125 472.7 150 458.7C175 444.7 200 429.3 225 432.5C250 435.7 275 457.3 300 462.3C325 467.3 350 455.7 375 453.2C400 450.7 425 457.3 450 457.3C475 457.3 500 450.7 525 452C550 453.3 575 462.7 600 457.3C625 452 650 432 675 425.8C700 419.7 725 427.3 750 427.8C775 428.3 800 421.7 825 426.3C850 431 875 447 887.5 455L900 463L900 601L887.5 601C875 601 850 601 825 601C800 601 775 601 750 601C725 601 700 601 675 601C650 601 625 601 600 601C575 601 550 601 525 601C500 601 475 601 450 601C425 601 400 601 375 601C350 601 325 601 300 601C275 601 250 601 225 601C200 601 175 601 150 601C125 601 100 601 75 601C50 601 25 601 12.5 601L0 601Z"
              fill="#2ca53e"
            ></path>
            <path
              d="M0 526L12.5 527.5C25 529 50 532 75 528.7C100 525.3 125 515.7 150 508.7C175 501.7 200 497.3 225 497C250 496.7 275 500.3 300 509.8C325 519.3 350 534.7 375 535.3C400 536 425 522 450 511.5C475 501 500 494 525 498.2C550 502.3 575 517.7 600 524.8C625 532 650 531 675 521.7C700 512.3 725 494.7 750 497C775 499.3 800 521.7 825 526.7C850 531.7 875 519.3 887.5 513.2L900 507L900 601L887.5 601C875 601 850 601 825 601C800 601 775 601 750 601C725 601 700 601 675 601C650 601 625 601 600 601C575 601 550 601 525 601C500 601 475 601 450 601C425 601 400 601 375 601C350 601 325 601 300 601C275 601 250 601 225 601C200 601 175 601 150 601C125 601 100 601 75 601C50 601 25 601 12.5 601L0 601Z"
              fill="#25992c"
            ></path>
          </svg>
        </div>

        <div className="titles-container">
          <h3>Empezá a cultivar</h3>
          <h1>ConfiPlant</h1>
          

          <h2>LLeva tu cultivo al siguiente nivel!</h2>

          {/* <h4>Cambiamos la wea del cultivo de indoor Cambiamos la wea del cultivo de indoor Cambiamos la wea del cultivo de indoor, aca te mostramos como..</h4>*/}
          <a className='boton-mira-como' href="#ordernow"><p>Mira como</p></a>
        </div>
        <div className="image-container">
          <img src={WebImage} alt="Confi Plant main dashboard"></img>
        </div>
        
      </div>

      <label id="mobileapp" style={{ color: "transparent" }}></label>
      <div
        style={{
          backgroundColor: "#48d480",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div className="video-presentacion" style={{ marginTop: 0 }}>
          <svg
            id="visual"
            viewBox="0 80 900 600"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <rect x="0" y="0" width="900" height="600" fill="#25992C"></rect>
            <path
              d="M0 255L12.5 243C25 231 50 207 75 186.8C100 166.7 125 150.3 150 142.5C175 134.7 200 135.3 225 150.2C250 165 275 194 300 194.3C325 194.7 350 166.3 375 146.7C400 127 425 116 450 124.3C475 132.7 500 160.3 525 177C550 193.7 575 199.3 600 205.3C625 211.3 650 217.7 675 217.7C700 217.7 725 211.3 750 214.5C775 217.7 800 230.3 825 230.2C850 230 875 217 887.5 210.5L900 204L900 601L887.5 601C875 601 850 601 825 601C800 601 775 601 750 601C725 601 700 601 675 601C650 601 625 601 600 601C575 601 550 601 525 601C500 601 475 601 450 601C425 601 400 601 375 601C350 601 325 601 300 601C275 601 250 601 225 601C200 601 175 601 150 601C125 601 100 601 75 601C50 601 25 601 12.5 601L0 601Z"
              fill="#2aa533"
            ></path>
            <path
              d="M0 217L12.5 213.8C25 210.7 50 204.3 75 199.5C100 194.7 125 191.3 150 207.2C175 223 200 258 225 264.8C250 271.7 275 250.3 300 250.2C325 250 350 271 375 261.5C400 252 425 212 450 199.3C475 186.7 500 201.3 525 227.2C550 253 575 290 600 298.7C625 307.3 650 287.7 675 262.5C700 237.3 725 206.7 750 197.5C775 188.3 800 200.7 825 207.2C850 213.7 875 214.3 887.5 214.7L900 215L900 601L887.5 601C875 601 850 601 825 601C800 601 775 601 750 601C725 601 700 601 675 601C650 601 625 601 600 601C575 601 550 601 525 601C500 601 475 601 450 601C425 601 400 601 375 601C350 601 325 601 300 601C275 601 250 601 225 601C200 601 175 601 150 601C125 601 100 601 75 601C50 601 25 601 12.5 601L0 601Z"
              fill="#2fae44"
            ></path>
            <path
              d="M0 281L12.5 277C25 273 50 265 75 269C100 273 125 289 150 292.3C175 295.7 200 286.3 225 289.8C250 293.3 275 309.7 300 321C325 332.3 350 338.7 375 343.7C400 348.7 425 352.3 450 340.2C475 328 500 300 525 294.2C550 288.3 575 304.7 600 308.3C625 312 650 303 675 294.2C700 285.3 725 276.7 750 276C775 275.3 800 282.7 825 301C850 319.3 875 348.7 887.5 363.3L900 378L900 601L887.5 601C875 601 850 601 825 601C800 601 775 601 750 601C725 601 700 601 675 601C650 601 625 601 600 601C575 601 550 601 525 601C500 601 475 601 450 601C425 601 400 601 375 601C350 601 325 601 300 601C275 601 250 601 225 601C200 601 175 601 150 601C125 601 100 601 75 601C50 601 25 601 12.5 601L0 601Z"
              fill="#35b753"
            ></path>
            <path
              d="M0 404L12.5 410.5C25 417 50 430 75 419.7C100 409.3 125 375.7 150 373.3C175 371 200 400 225 408.5C250 417 275 405 300 400.7C325 396.3 350 399.7 375 395.3C400 391 425 379 450 369.5C475 360 500 353 525 361.8C550 370.7 575 395.3 600 409.5C625 423.7 650 427.3 675 419C700 410.7 725 390.3 750 382.3C775 374.3 800 378.7 825 384C850 389.3 875 395.7 887.5 398.8L900 402L900 601L887.5 601C875 601 850 601 825 601C800 601 775 601 750 601C725 601 700 601 675 601C650 601 625 601 600 601C575 601 550 601 525 601C500 601 475 601 450 601C425 601 400 601 375 601C350 601 325 601 300 601C275 601 250 601 225 601C200 601 175 601 150 601C125 601 100 601 75 601C50 601 25 601 12.5 601L0 601Z"
              fill="#3bc162"
            ></path>
            <path
              d="M0 495L12.5 495.5C25 496 50 497 75 491.2C100 485.3 125 472.7 150 458.7C175 444.7 200 429.3 225 432.5C250 435.7 275 457.3 300 462.3C325 467.3 350 455.7 375 453.2C400 450.7 425 457.3 450 457.3C475 457.3 500 450.7 525 452C550 453.3 575 462.7 600 457.3C625 452 650 432 675 425.8C700 419.7 725 427.3 750 427.8C775 428.3 800 421.7 825 426.3C850 431 875 447 887.5 455L900 463L900 601L887.5 601C875 601 850 601 825 601C800 601 775 601 750 601C725 601 700 601 675 601C650 601 625 601 600 601C575 601 550 601 525 601C500 601 475 601 450 601C425 601 400 601 375 601C350 601 325 601 300 601C275 601 250 601 225 601C200 601 175 601 150 601C125 601 100 601 75 601C50 601 25 601 12.5 601L0 601Z"
              fill="#48d480"
            ></path>
            <path
              d="M0 526L12.5 527.5C25 529 50 532 75 528.7C100 525.3 125 515.7 150 508.7C175 501.7 200 497.3 225 497C250 496.7 275 500.3 300 509.8C325 519.3 350 534.7 375 535.3C400 536 425 522 450 511.5C475 501 500 494 525 498.2C550 502.3 575 517.7 600 524.8C625 532 650 531 675 521.7C700 512.3 725 494.7 750 497C775 499.3 800 521.7 825 526.7C850 531.7 875 519.3 887.5 513.2L900 507L900 601L887.5 601C875 601 850 601 825 601C800 601 775 601 750 601C725 601 700 601 675 601C650 601 625 601 600 601C575 601 550 601 525 601C500 601 475 601 450 601C425 601 400 601 375 601C350 601 325 601 300 601C275 601 250 601 225 601C200 601 175 601 150 601C125 601 100 601 75 601C50 601 25 601 12.5 601L0 601Z"
              fill="#48d480"
            ></path>
          </svg>
        </div>
        <div className="second-page-container">
          <div className="mobile-images-container">
            <div className="mobile-image-container">
              <img src={MobileImage} alt="Confi Plant App"></img>
            </div>
            <div className="mobile2-image-container">
              <img src={MobileImage2} alt="Confi Plant App timers"></img>
            </div>
          </div>
          <div className="mobile-text-container">
            <p className="text-white">CONFI PLANT</p>
            <p>
              te permite controlar y cuidar tus plantas desde tu celular, cuando y
              donde quieras!.
            </p>
          </div>
        </div>
        
      </div>
      <label id="ordernow" style={{ color: "transparent" }}></label>
      <div
        style={{
          backgroundColor: "#25992c",
          height: "100vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div className="video-presentacion">
          <svg
            id="visual"
            viewBox="0 50 900 500"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <rect x="0" y="0" width="900" height="600" fill="#48D480"></rect>
            <path
              d="M0 171L21.5 167.7C43 164.3 86 157.7 128.8 156.3C171.7 155 214.3 159 257.2 145.2C300 131.3 343 99.7 385.8 84C428.7 68.3 471.3 68.7 514.2 72.2C557 75.7 600 82.3 642.8 110.3C685.7 138.3 728.3 187.7 771.2 186C814 184.3 857 131.7 878.5 105.3L900 79L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              fill="#2ec55c"
            ></path>
            <path
              d="M0 178L21.5 202.8C43 227.7 86 277.3 128.8 291.7C171.7 306 214.3 285 257.2 271.3C300 257.7 343 251.3 385.8 255.8C428.7 260.3 471.3 275.7 514.2 266.8C557 258 600 225 642.8 211.2C685.7 197.3 728.3 202.7 771.2 217C814 231.3 857 254.7 878.5 266.3L900 278L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              fill="#2cba50"
            ></path>
            <path
              d="M0 279L21.5 286.5C43 294 86 309 128.8 326.7C171.7 344.3 214.3 364.7 257.2 364.7C300 364.7 343 344.3 385.8 333.5C428.7 322.7 471.3 321.3 514.2 327.5C557 333.7 600 347.3 642.8 355.2C685.7 363 728.3 365 771.2 360.8C814 356.7 857 346.3 878.5 341.2L900 336L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              fill="#2aaf44"
            ></path>
            <path
              d="M0 398L21.5 397.8C43 397.7 86 397.3 128.8 399.5C171.7 401.7 214.3 406.3 257.2 401.8C300 397.3 343 383.7 385.8 373C428.7 362.3 471.3 354.7 514.2 370.7C557 386.7 600 426.3 642.8 426.2C685.7 426 728.3 386 771.2 378.3C814 370.7 857 395.3 878.5 407.7L900 420L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              fill="#25992c"
            ></path>
            <path
              d="M0 531L21.5 521.3C43 511.7 86 492.3 128.8 485C171.7 477.7 214.3 482.3 257.2 480C300 477.7 343 468.3 385.8 479.5C428.7 490.7 471.3 522.3 514.2 539C557 555.7 600 557.3 642.8 546.8C685.7 536.3 728.3 513.7 771.2 494C814 474.3 857 457.7 878.5 449.3L900 441L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              fill="#25992c"
            ></path>
          </svg>
        </div>
        <div className="device-title">
          <h2>AutoKit 4x4</h2>
          <p>
            Desde AR${" "}
            {(72.35 * dolarHoy).toLocaleString("es-ES", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
        <div className="info-text-container">
        <h3 style={{fontSize: 27, textAlign: "start", marginLeft: 20}}>Medicion ambiental</h3>
          <div className="green-bubble left-bubble">
            
            <img style={{transform: "scale(1.1)", zIndex: 1}} src={RHT} alt="RHT"></img>
          </div>
          <p>
            Nuestro equipo de medicion cuenta con un sensor de temperatura y
            humedad relativa del ambiente, que te permite conocer y regular las
            condiciones climáticas dentro de tu indoor. Así, podrás brindarle a
            tus plantas el ambiente óptimo para su desarrollo y evitar problemas
            como el moho, los hongos o el estrés térmico.
          </p>
        </div>

        <Canvas
          className="w-full h-screen bg-transparent"
          style={{ height: "100vh", position: "absolute", zIndex: 4 }}
          camera={{ near: 0.1, far: 1000, position: [150, 150, 150] }}
        >
          <Suspense fallback={<Loader />}>
            <OrbitControls
              enableZoom={false}
              rotateSpeed={1}
              autoRotate={true}
              autoRotateSpeed={3}
              enablePan={false}
              enableRotate={true}
            />
            <directionalLight position={[1, 1, 1]} intensity={0.3} />
            <directionalLight position={[-1, -1, -1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <hemisphereLight
              intensity={2}
              skyColor="#b1e1ff"
              groundColor="#000000"
            />

            <CuatroPorCuatro
              position={modelPosition}
              scale={modelScale}
              rotation={rotation}
            />
          </Suspense>
        </Canvas>
        <div className="info-text-container">
          <p style={{marginRight: 20}} >
            {" "}
            Confi Plant tiene sensores de suelo de tipo capacitivos, que miden
            la humedad del sustrato de forma precisa y sin dañarlo. Estos
            sensores te ayudan a saber cuándo y cuánto regar tus plantas,
            evitando el exceso o la falta de agua que pueden afectar su
            crecimiento y rendimiento.
          </p>
          <div className="green-bubble right-bubble">
            <img style={{transform: "scale(1.12)", zIndex: 1}} src={Soil} alt="Download"></img>
          </div>
          <h3 style={{fontSize: 27, textAlign: "end", marginRight: 30}}>Medicion de suelo</h3>
        </div>
        <div className="call-to-action">
          <Link to="/order">
            <button className="btn-comprar">Encargá ahora</button>
          </Link>
        </div>
      </div>
      <label id="opciones" style={{ color: "transparent" }}></label>
      <div
        style={{
          backgroundColor: "#3fc66c",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div className="video-presentacion">
          <svg
            id="visual"
            viewBox="0 00 900 480"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <rect x="0" y="0" width="900" height="600" fill="#25992C"></rect>
            <path
              d="M0 171L21.5 167.7C43 164.3 86 157.7 128.8 156.3C171.7 155 214.3 159 257.2 145.2C300 131.3 343 99.7 385.8 84C428.7 68.3 471.3 68.7 514.2 72.2C557 75.7 600 82.3 642.8 110.3C685.7 138.3 728.3 187.7 771.2 186C814 184.3 857 131.7 878.5 105.3L900 79L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              fill="#269d2e"
            ></path>
            <path
              d="M0 178L21.5 202.8C43 227.7 86 277.3 128.8 291.7C171.7 306 214.3 285 257.2 271.3C300 257.7 343 251.3 385.8 255.8C428.7 260.3 471.3 275.7 514.2 266.8C557 258 600 225 642.8 211.2C685.7 197.3 728.3 202.7 771.2 217C814 231.3 857 254.7 878.5 266.3L900 278L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              fill="#2eaa44"
            ></path>
            <path
              d="M0 279L21.5 286.5C43 294 86 309 128.8 326.7C171.7 344.3 214.3 364.7 257.2 364.7C300 364.7 343 344.3 385.8 333.5C428.7 322.7 471.3 321.3 514.2 327.5C557 333.7 600 347.3 642.8 355.2C685.7 363 728.3 365 771.2 360.8C814 356.7 857 346.3 878.5 341.2L900 336L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              fill="#36b858"
            ></path>
            <path
              d="M0 398L21.5 397.8C43 397.7 86 397.3 128.8 399.5C171.7 401.7 214.3 406.3 257.2 401.8C300 397.3 343 383.7 385.8 373C428.7 362.3 471.3 354.7 514.2 370.7C557 386.7 600 426.3 642.8 426.2C685.7 426 728.3 386 771.2 378.3C814 370.7 857 395.3 878.5 407.7L900 420L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              fill="#3fc66c"
            ></path>
            <path
              d="M0 531L21.5 521.3C43 511.7 86 492.3 128.8 485C171.7 477.7 214.3 482.3 257.2 480C300 477.7 343 468.3 385.8 479.5C428.7 490.7 471.3 522.3 514.2 539C557 555.7 600 557.3 642.8 546.8C685.7 536.3 728.3 513.7 771.2 494C814 474.3 857 457.7 878.5 449.3L900 441L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              fill="#3fc66c"
            ></path>
          </svg>
        </div>
        <div className="opciones-compra">
          <div className="opcion-compra version1">
            <h1>Starter Kit</h1>
            <ul>
              <li>Dos enchufes</li>
              <li>Sensores de ambiente</li>
              <li>Sensor testigo de humedad en tierra</li>
              <li>Acceso apps web y mobile</li>
              <li>Notificaciones al celular</li>
            </ul>

            <Link to="/orderv1">
              Desde AR${" "}
              {(57.35 * dolarHoy).toLocaleString("es-ES", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Link>
          </div>
          <div className="opcion-compra selected version2">
            <h1>Amateur Kit</h1>
            <ul>
              <li>Cuatro enchufes</li>
              <li>Sensores de ambiente</li>
              <li>Sensor testigo de humedad en tierra</li>
              <li>Acceso apps web y mobile</li>
              <li>Notificaciones al celular</li>
            </ul>

            <Link to="/order">
              Desde AR${" "}
              {(72.35 * dolarHoy).toLocaleString("es-ES", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Link>
          </div>
          <a className="opcion-compra version3">
            <h1>Pro Kit</h1>
            <ul>
              <li>Cuatro enchufes</li>
              <li>Sensores de ambiente</li>
              <li>Dos sensores testigo de humedad en tierra</li>
              <li>Acceso apps web y mobile</li>
              <li>Riego con regulacion de ph</li>
            </ul>

            <Link to="/orderv1">
              Desde AR${" "}
              {(199.35 * dolarHoy).toLocaleString("es-ES", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Link>
          </a>
        </div>
      </div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          position: "relative",
          width: "100%",
          backgroundColor: "#25992c",
        }}
      >
        <div className="video-presentacion">
          <svg
            id="visual"
            viewBox="0 0 900 560"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <rect x="0" y="0" width="900" height="600" fill="#3fc66c"></rect>
            <path
              d="M0 208L11.5 188.8C23 169.7 46 131.3 69 138.7C92 146 115 199 138.2 200.8C161.3 202.7 184.7 153.3 207.8 137C231 120.7 254 137.3 277 151C300 164.7 323 175.3 346 173.5C369 171.7 392 157.3 415.2 156.8C438.3 156.3 461.7 169.7 484.8 185C508 200.3 531 217.7 554 233.2C577 248.7 600 262.3 623 236.8C646 211.3 669 146.7 692.2 128.8C715.3 111 738.7 140 761.8 166C785 192 808 215 831 213.7C854 212.3 877 186.7 888.5 173.8L900 161L900 601L888.5 601C877 601 854 601 831 601C808 601 785 601 761.8 601C738.7 601 715.3 601 692.2 601C669 601 646 601 623 601C600 601 577 601 554 601C531 601 508 601 484.8 601C461.7 601 438.3 601 415.2 601C392 601 369 601 346 601C323 601 300 601 277 601C254 601 231 601 207.8 601C184.7 601 161.3 601 138.2 601C115 601 92 601 69 601C46 601 23 601 11.5 601L0 601Z"
              fill="#2ecf6e"
            ></path>
            <path
              d="M0 214L11.5 223.8C23 233.7 46 253.3 69 265.8C92 278.3 115 283.7 138.2 275.3C161.3 267 184.7 245 207.8 240.7C231 236.3 254 249.7 277 257.3C300 265 323 267 346 257C369 247 392 225 415.2 230.8C438.3 236.7 461.7 270.3 484.8 262C508 253.7 531 203.3 554 180C577 156.7 600 160.3 623 176.2C646 192 669 220 692.2 249.2C715.3 278.3 738.7 308.7 761.8 318.8C785 329 808 319 831 304.5C854 290 877 271 888.5 261.5L900 252L900 601L888.5 601C877 601 854 601 831 601C808 601 785 601 761.8 601C738.7 601 715.3 601 692.2 601C669 601 646 601 623 601C600 601 577 601 554 601C531 601 508 601 484.8 601C461.7 601 438.3 601 415.2 601C392 601 369 601 346 601C323 601 300 601 277 601C254 601 231 601 207.8 601C184.7 601 161.3 601 138.2 601C115 601 92 601 69 601C46 601 23 601 11.5 601L0 601Z"
              fill="#2dc663"
            ></path>
            <path
              d="M0 256L11.5 271.2C23 286.3 46 316.7 69 333.5C92 350.3 115 353.7 138.2 349.5C161.3 345.3 184.7 333.7 207.8 323C231 312.3 254 302.7 277 293.7C300 284.7 323 276.3 346 274.2C369 272 392 276 415.2 278.5C438.3 281 461.7 282 484.8 289.7C508 297.3 531 311.7 554 309C577 306.3 600 286.7 623 281C646 275.3 669 283.7 692.2 289.3C715.3 295 738.7 298 761.8 305C785 312 808 323 831 335.2C854 347.3 877 360.7 888.5 367.3L900 374L900 601L888.5 601C877 601 854 601 831 601C808 601 785 601 761.8 601C738.7 601 715.3 601 692.2 601C669 601 646 601 623 601C600 601 577 601 554 601C531 601 508 601 484.8 601C461.7 601 438.3 601 415.2 601C392 601 369 601 346 601C323 601 300 601 277 601C254 601 231 601 207.8 601C184.7 601 161.3 601 138.2 601C115 601 92 601 69 601C46 601 23 601 11.5 601L0 601Z"
              fill="#2cbd58"
            ></path>
            <path
              d="M0 402L11.5 391.7C23 381.3 46 360.7 69 353.5C92 346.3 115 352.7 138.2 354.2C161.3 355.7 184.7 352.3 207.8 362.5C231 372.7 254 396.3 277 401.7C300 407 323 394 346 386.3C369 378.7 392 376.3 415.2 375.8C438.3 375.3 461.7 376.7 484.8 361.7C508 346.7 531 315.3 554 317.3C577 319.3 600 354.7 623 364.7C646 374.7 669 359.3 692.2 359.3C715.3 359.3 738.7 374.7 761.8 376C785 377.3 808 364.7 831 349.5C854 334.3 877 316.7 888.5 307.8L900 299L900 601L888.5 601C877 601 854 601 831 601C808 601 785 601 761.8 601C738.7 601 715.3 601 692.2 601C669 601 646 601 623 601C600 601 577 601 554 601C531 601 508 601 484.8 601C461.7 601 438.3 601 415.2 601C392 601 369 601 346 601C323 601 300 601 277 601C254 601 231 601 207.8 601C184.7 601 161.3 601 138.2 601C115 601 92 601 69 601C46 601 23 601 11.5 601L0 601Z"
              fill="#2bb44d"
            ></path>
            <path
              d="M0 468L11.5 451.7C23 435.3 46 402.7 69 390.7C92 378.7 115 387.3 138.2 396.2C161.3 405 184.7 414 207.8 405.8C231 397.7 254 372.3 277 379.5C300 386.7 323 426.3 346 429.7C369 433 392 400 415.2 389.7C438.3 379.3 461.7 391.7 484.8 395.7C508 399.7 531 395.3 554 389.8C577 384.3 600 377.7 623 381C646 384.3 669 397.7 692.2 402C715.3 406.3 738.7 401.7 761.8 407C785 412.3 808 427.7 831 439.3C854 451 877 459 888.5 463L900 467L900 601L888.5 601C877 601 854 601 831 601C808 601 785 601 761.8 601C738.7 601 715.3 601 692.2 601C669 601 646 601 623 601C600 601 577 601 554 601C531 601 508 601 484.8 601C461.7 601 438.3 601 415.2 601C392 601 369 601 346 601C323 601 300 601 277 601C254 601 231 601 207.8 601C184.7 601 161.3 601 138.2 601C115 601 92 601 69 601C46 601 23 601 11.5 601L0 601Z"
              fill="#29ab42"
            ></path>
            <path
              d="M0 522L11.5 513.3C23 504.7 46 487.3 69 473.3C92 459.3 115 448.7 138.2 439.7C161.3 430.7 184.7 423.3 207.8 437.7C231 452 254 488 277 501C300 514 323 504 346 497C369 490 392 486 415.2 473.8C438.3 461.7 461.7 441.3 484.8 447.2C508 453 531 485 554 495.8C577 506.7 600 496.3 623 494.5C646 492.7 669 499.3 692.2 494.2C715.3 489 738.7 472 761.8 473.5C785 475 808 495 831 496.8C854 498.7 877 482.3 888.5 474.2L900 466L900 601L888.5 601C877 601 854 601 831 601C808 601 785 601 761.8 601C738.7 601 715.3 601 692.2 601C669 601 646 601 623 601C600 601 577 601 554 601C531 601 508 601 484.8 601C461.7 601 438.3 601 415.2 601C392 601 369 601 346 601C323 601 300 601 277 601C254 601 231 601 207.8 601C184.7 601 161.3 601 138.2 601C115 601 92 601 69 601C46 601 23 601 11.5 601L0 601Z"
              fill="#27a237"
            ></path>
            <path
              d="M0 493L11.5 498.8C23 504.7 46 516.3 69 526.7C92 537 115 546 138.2 544.5C161.3 543 184.7 531 207.8 520C231 509 254 499 277 492.5C300 486 323 483 346 485.8C369 488.7 392 497.3 415.2 505C438.3 512.7 461.7 519.3 484.8 529.2C508 539 531 552 554 552.5C577 553 600 541 623 533.5C646 526 669 523 692.2 528.5C715.3 534 738.7 548 761.8 547.3C785 546.7 808 531.3 831 520.2C854 509 877 502 888.5 498.5L900 495L900 601L888.5 601C877 601 854 601 831 601C808 601 785 601 761.8 601C738.7 601 715.3 601 692.2 601C669 601 646 601 623 601C600 601 577 601 554 601C531 601 508 601 484.8 601C461.7 601 438.3 601 415.2 601C392 601 369 601 346 601C323 601 300 601 277 601C254 601 231 601 207.8 601C184.7 601 161.3 601 138.2 601C115 601 92 601 69 601C46 601 23 601 11.5 601L0 601Z"
              fill="#25992c"
            ></path>
          </svg>
        </div>
        <div className="mobile-images-showup" >
          <div className="textos-app">
            <div className="texto-description" style={{marginLeft:40}}>
              <p>
                Confi Plant tiene <strong>sensores de suelo</strong> de tipo
                capacitivos, que miden la humedad del sustrato de forma precisa
                y sin dañarlo. Estos sensores te ayudan a saber cuándo y cuánto
                regar tus plantas, evitando el exceso o la falta de agua que
                pueden afectar su crecimiento y rendimiento.
              </p>
            </div>
            <div className="texto-description left" style={{marginRight:10}}>
            <svg className="yellow" fill="rgb(251, 255, 0)" width="80px" height="80px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                <path d="M960 0c529.355 0 960 430.645 960 960s-430.645 960-960 960S0 1489.355 0 960c0-172.687 46.419-341.986 134.174-489.6l97.017 57.713C153.826 658.22 112.94 807.529 112.94 960c0 467.125 379.934 847.059 847.059 847.059 467.125 0 847.059-379.934 847.059-847.059 0-448.038-349.779-816-790.588-845.139v223.963H903.529V0ZM322.334 242.372l482.259 482.372c44.612-29.704 97.92-47.097 155.407-47.097 155.633 0 282.353 126.72 282.353 282.353S1115.633 1242.353 960 1242.353 677.647 1115.633 677.647 960c0-57.487 17.393-110.795 47.097-155.407L242.372 322.334l79.962-79.962ZM960 790.588c-93.402 0-169.412 76.01-169.412 169.412s76.01 169.412 169.412 169.412 169.412-76.01 169.412-169.412S1053.402 790.588 960 790.588Z" fill-rule="evenodd"/>
            </svg>
              <p>
                El dispositivo también incluye <strong>timers</strong>{" "}
                integrados que te permiten apagar y prender las luces para
                controlar el <strong>fotoperiodo</strong> de tus plantas. El
                fotoperiodo es la cantidad de horas de luz y oscuridad que
                reciben las plantas, y que influye en su{" "}
                <strong>ciclo de vida</strong> y en la producción de flores y
                frutos. Con Confi Plant, podrás programar el fotoperiodo
                adecuado para cada etapa de tu cultivo, sin tener que estar
                pendiente de encender o apagar las luces manualmente. En caso de
                apagon de luz recuerda los horarios por lo que minimiza el
                estres que recibirian
              </p>
            </div>

            <div className="texto-description" style={{marginLeft:20}}>
              <p>
                Nuestro equipo de medicion cuenta con un sensor de{" "}
                <strong>temperatura y humedad relativa</strong> del ambiente,
                que te permite conocer y regular las condiciones climáticas
                dentro de tu indoor. Así, podrás brindarle a tus plantas el
                ambiente óptimo para su desarrollo y evitar problemas como el
                moho, los hongos, pestes o el estrés térmico.
              </p>
            </div>
          </div>

          <div className="imagenes-container">

          <div className="imagenes">
            

            {screens.map((index) => {
              return (
                <Card
                  key={index}
                  index={index}
                  isPrev={prevValue > activeScreen && activeScreen == index}
                  isNext={prevValue < activeScreen && activeScreen == index}
                  isSelected={activeScreen === index}
                  isPrevValue={prevValue === index}
                ></Card>
              );
            })}
          </div>
          <div className="slider-controls">
          
            <button
              onClick={() => {
                setPrevValue(activeScreen);
                if (activeScreen > 0) {                  
                  setActive(activeScreen - 1);
                }else{
                  setActive(screens.length-1);                  
                }

              }}
            >
              <svg style={{transform:"rotate(180deg)"}}width="20px" height="20px" viewBox="0 0 24 24" id="meteor-icon-kit__solid-chevron-circle-right" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM9.43934 14.9393C8.85355 15.5251 8.85355 16.4749 9.43934 17.0607C10.0251 17.6464 10.9749 17.6464 11.5607 17.0607L15.5607 13.0607C16.1464 12.4749 16.1464 11.5251 15.5607 10.9393L11.5607 6.93934C10.9749 6.35355 10.0251 6.35355 9.43934 6.93934C8.85355 7.52513 8.85355 8.47487 9.43934 9.06066L12.3787 12L9.43934 14.9393Z" fill="#bbeebe"/></svg>
            </button>
            {screens.map((index)=>{
              return (<a key={index} className='dot' onClick={()=>{               
                  setPrevValue(activeScreen);
                  setActive(index)
                }} style={{backgroundColor:index===activeScreen?"#bbeebe":"#71dd77"}}></a>)
            })}
            <button
              onClick={() => {
                setPrevValue(activeScreen);
                if (activeScreen < (screens.length -1)) {
                  setActive(activeScreen + 1);
                }else{
                  setActive(0);
                }
              }}
            >
              <svg width="20px" height="20px" viewBox="0 0 24 24" id="meteor-icon-kit__solid-chevron-circle-right" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM9.43934 14.9393C8.85355 15.5251 8.85355 16.4749 9.43934 17.0607C10.0251 17.6464 10.9749 17.6464 11.5607 17.0607L15.5607 13.0607C16.1464 12.4749 16.1464 11.5251 15.5607 10.9393L11.5607 6.93934C10.9749 6.35355 10.0251 6.35355 9.43934 6.93934C8.85355 7.52513 8.85355 8.47487 9.43934 9.06066L12.3787 12L9.43934 14.9393Z" fill="#bbeebe"/></svg>
            </button>
          </div>
          
          </div>


          <div className="textos-app">
            <div className="texto-description right" style={{marginRight:30}}>
            <svg className="blue" fill="rgb(55, 30, 196)" width="70px" height="70px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="invisible_box" data-name="invisible box">
                      <rect width="48" height="48" fill="none"/>
                    </g>
                    <g id="Layer_6" data-name="Layer 6">
                      <path d="M25.2,2A21.8,21.8,0,0,0,8.9,8,21.6,21.6,0,0,0,2,24,22.1,22.1,0,0,0,22.9,46H23a3.2,3.2,0,0,0,2.1-.8A3.1,3.1,0,0,0,26,43V33.8a9.8,9.8,0,0,0,8-9.6V20a2.1,2.1,0,0,0-2-2H30V12.9a2,2,0,1,0-4,0V18H22V12.9a2,2,0,1,0-4,0V18H16a2,2,0,0,0-2,2v4.1a10,10,0,0,0,2.8,7A10.1,10.1,0,0,0,22,33.8v8.1a18,18,0,0,1-10.4-31A18.3,18.3,0,0,1,25,6,18.3,18.3,0,0,1,42,24.2a17.4,17.4,0,0,1-5.3,12.5,2.1,2.1,0,0,0,2.9,2.9A21.7,21.7,0,0,0,46,24.2,22.2,22.2,0,0,0,25.2,2ZM18,24.1V22H30v2.2A5.8,5.8,0,0,1,24.3,30h-.6a5.6,5.6,0,0,1-4-1.7A5.9,5.9,0,0,1,18,24.1Z"/>
                    </g>
                  </g>
                </svg>
              <p>
                Con Confi Plant podes elegir entre{" "}
                <strong>2 y 4 enchufes</strong>(**Revisar opciones de compra)
                para que <strong>controles</strong> todos tus equipos de control
                de ambiente, como humidificadores, calentadores, ventiladores,
                extractores, etc. Así, vas a poder conectar y manejar todos los
                elementos que necesites para crear el{" "}
                <strong>clima ideal</strong> para tus plantas, y{" "}
                <strong>optimizar</strong> el uso de la energía eléctrica.
              </p>
            </div>

            <div className="texto-description" style={{marginLeft:10}}>
              <p>
                La estuctura cuenta con fuentes aisladas para proteger el
                dispositivo de <strong>sobretensiones</strong>. Las
                sobretensiones son picos de voltaje que pueden dañar el aparato
                y los demás equipos eléctricos que tengas conectados. Con las
                fuentes aisladas, el aparato se mantiene seguro y estable, y
                evita que se produzcan cualquier incidente.
              </p>
            </div>

            <div className="texto-description right" style={{marginRight:40}}>
              <svg className="orange" fill="rgb(228, 148, 0)" width="60px" height="60px" viewBox="0 0 36 36" version="1.1"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>notification-outline-badged</title>
                <path class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M18,34.28A2.67,2.67,0,0,0,20.58,32H15.32A2.67,2.67,0,0,0,18,34.28Z"></path><path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M32.51,27.83A14.4,14.4,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15a10.92,10.92,0,0,0-.16-1.79,7.44,7.44,0,0,1-2.24-.84,8.89,8.89,0,0,1,.4,2.64v4.94a14.24,14.24,0,0,0,1.65,5.85,16.17,16.17,0,0,0,2.44,3H5.13a16.17,16.17,0,0,0,2.44-3,14.24,14.24,0,0,0,1.65-5.85V15.15A8.8,8.8,0,0,1,18,6.31a8.61,8.61,0,0,1,4.76,1.44A7.49,7.49,0,0,1,22.5,6c0-.21,0-.42,0-.63a10.58,10.58,0,0,0-3.32-1V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93,1,1,0,0,0-.34.75v1.36a1,1,0,0,0,1,1h27.8a1,1,0,0,0,1-1V28.58A1,1,0,0,0,32.51,27.83Z"></path><circle class="clr-i-outline--badged clr-i-outline-path-1--badged clr-i-badge" cx="30" cy="6" r="5"></circle>
                <rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
            </svg>
              <p>
                Con Confi Plant podes configurar{" "}
                <strong>alertas y notificaciones</strong> a{" "}
                <strong>tiempo real</strong> para saber si se sobrepasa algun
                parametro de tu cultivo, como humedad, temperatura incluso la
                humedad del suelo, todas configurables desde la aplicacion de la
                play store.
              </p>
            </div>
          </div>

          
        </div>
      </div>
      <div className="footer">
        <div className="firstTable">
          <h4>Nuestros productos:</h4>
          <Link to="/orderv1">
            <label
              className="firstTableText"
              style={{
                fontSize: "1.7rem",
                textShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
              }}
            >
              Autokit V1
            </label>
          </Link>
          <Link to="/order">
            <label
              className="firstTableText"
              style={{
                fontSize: "1.7rem",
                textShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
              }}
            >
              Autokit V2
            </label>
          </Link>
        </div>
        <div className="secondTable">
          <h4>Datos de contacto:</h4>
          <label>Instagram: @confi.plant</label>
          <label>Cel: +5492236344785</label>
          <label>email: confiplant@gmail.com</label>
        </div>
        <div className="tercerTable">
          <label>Proba nuestra aplicacion: </label>
          <a href="https://play.google.com/store/apps/details?id=com.xavigmp.confiplant&hl=es_CO&gl=US">
            <img src={PlayStore} alt="Download"></img>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
