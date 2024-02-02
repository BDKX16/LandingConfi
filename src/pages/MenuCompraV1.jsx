/* eslint-disable react/no-unknown-property */
import { Suspense, useState } from 'react'
import { Canvas } from "@react-three/fiber";
import Loader from '../components/Loader'
import CuatroPorCuatro from '../components/models/modelCuatroPorCuatro';
import { OrbitControls } from "@react-three/drei";
import { Link } from 'react-router-dom'
import Logo from "../assets/logo-new.png"
import './pages.css'
const MenuCompraV1 = () => {
    const [exterior, setExterior] = useState(false);
    const [dolarHoy, setDolar] = useState(0);
    const adjustForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [-56.205, -30, -12.454]
        let rotation = [-1.444, 1.207, -2]

        if (window.innerWidth < 768) {
            screenScale = [0.8, 0.8, 0.8];
        } else {
            screenScale = [0.9, 0.9, 0.9];
        }
        return [screenScale, screenPosition, rotation]
    }

    const [modelScale, modelPosition, rotation] = adjustForScreenSize();

    fetch("https://dolarapi.com/v1/dolares/blue")
        .then(response => response.json())
        .then(data => setDolar(data.venta));


    return (
        <><nav className="nav-bar" >
            <div className="logo-new"><img src={Logo} alt="Confi Plant"></img></div>
        </nav>
            <div className='flex' style={{overflow: "hidden!important"}}>
                <div className="3dimage-container" style={{ width: "70%", backgroundColor: "#C0F5C3", height: "100vh", display: "flex", justifyContent: "space-between", alignItems: "center", position: "fixed" }}>

                    <Canvas className="w-full h-screen bg-transparent" style={{ height: "100vh", position: "absolute", zIndex: 4 }}
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
                            <hemisphereLight intensity={2} skyColor="#b1e1ff" groundColor="#000000" />

                            <CuatroPorCuatro position={modelPosition} scale={modelScale} rotation={rotation} />

                        </Suspense>
                    </Canvas>

                </div>
                <div className='order-menu' style={{height: (exterior ? "100vh" :"100vh") }}>
                    <h3>AutoKit Start</h3>
                    <p>Estimado de llegada: </p>
                    <button>Ingrese codigo postal (abre modal)</button>
                    <div className='features'>
                        <div className='feature'>
                            <div className="feature-quantity">
                                <h4>
                                    10</h4>
                                <p>A</p>
                            </div>
                            <p>Corriente</p>
                        </div>
                        <div className='feature'>
                            <div className="feature-quantity">
                                <h4>
                                    {exterior ? 70 : 30}</h4>
                                <p>m</p>
                            </div>


                            <p>Rango WiFi</p>
                        </div>
                        <div className='feature'>
                            <div className="feature-quantity">
                                <h4>
                                    2</h4>
                                
                            </div>
                            <p>Enchufes</p>
                        </div>
                    </div>

                    <div className='exterior-interior-container'>
                        <div className={'exterior-interior ' + (!exterior && " active")} onClick={() => setExterior(false)}>
                            <div>
                                <div className='checkbox'></div>
                                <p>Interior</p>
                            </div>
                            <p>AR$ {(48.85 * dolarHoy).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                        </div>
                        <div className={'exterior-interior ' + (exterior && "active")} onClick={() => setExterior(true)}>
                            <div>
                                <div className='checkbox'></div>
                                <p>Exterior</p>
                            </div>
                            <p>AR$ {(58.85 * dolarHoy).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                        </div>
                    </div>

                    {exterior && <div className='flex items-start flex-col' style={{ marginLeft: "20%", marginRight: "20%", marginTop: 40, marginBottom: 100 }}>
                        <p className='text-3xl mb-2'>Mejora de exterior</p>
                        <ul className='text-left list-disc ml-5'>
                            <li><p>Material PET, aguanta el sol y la temperatura</p></li>
                            <li><p>Proteccion contra la lluvia (IP53)</p></li>
                            <li><p>Cables a prueba de agua</p></li>
                            <li><p>Mayor rango de señal</p></li>
                        </ul>
                    </div>}
                  
                    <div className='order-now mt-9  '>
                        <p style={{ fontSize: 20 }}>
                            Ordena tu AutoKit 4x4
                        </p>
                        <p>
                            Estimado de llegada:
                        </p>
                        <button>Continuar</button>
                    </div>


                </div>
            </div>
        </>
    )
}

export default MenuCompraV1;