/* eslint-disable react/no-unknown-property */

import Logo from "../assets/logo-new.png"
import './pages.css'
import { Formik } from 'formik';

const ContactUs = () => {

    return (
        <><nav className="nav-bar" >
            <div className="logo-new"><img src={Logo} alt="Confi Plant"></img></div>
        </nav>
            <div className='flex' style={{flexDirection: "column",justifyContent: "center", alignContent:"center", paddingTop: 80}}>
                <h1>HOLAAAA</h1>
                <p>Contactanos para encargarnos un ConfiKit V3</p>
                <p>Contactanos para encargarnos un ConfiKit V3</p>

                <Formik
          initialValues={{
            email: "",
           mensaje:"",
           modelo: "", 
           numero: "",
          }}
          onSubmit={async (values) => {
            let emailCorregido = values.email.toLowerCase();
            const toSend = {
                email: values.email,
                mensaje: values.mensaje,
                modelo: values.modelo,
                numero: values.numero
            }
            

            try {
              await axios.post("https://confiplant.cloud:3001/api/encargo",toSend)
                .then(async (response) => {                  
                    console.log("success")
                }).catch(function (error) {
                  console.log("error")
               
                });
            } catch (error) {
              console.error("ERRORs: " + error);

            }

          }}
        >
          {(props) => (

            <View>
              <View>
                <TextInput style={{ ...styles.textarea, backgroundColor: props.errors.email && props.touched.email ? "#f8ae72" : (props.touched.email ? "#b5fc94" : "white") }}
                  placeholder="email@email.com"
                  onChangeText={props.handleChange("email")}
                  onBlur={props.handleBlur("email")}
                  value={props.values.title}
                ></TextInput>
                {props.errors.email && props.touched.email && <Text style={styles.error}>{props.errors.email}</Text>}
              </View>
              <View>
                <TextInput style={{ ...styles.textarea, backgroundColor: props.errors.password && props.touched.password ? "#f8ae72" : (props.touched.password ? "#b5fc94" : "white") }}
                  placeholder="contraseña"
                  onChangeText={props.handleChange("password")}
                  onBlur={props.handleBlur("password")}
                  value={props.values.password}
                  secureTextEntry={true}
                ></TextInput>
                
                {props.errors.password && props.touched.password && <Text style={styles.error}>{props.errors.password}</Text>}
              </View>
              
              <View >
                <Pressable><Text style={{color: "blue", alignSelf: "center", marginTop: 19, fontSize:16, fontWeight: 300}} onPress={()=>navigation.navigate('Forgot Password')} >Olvidaste tu contraseña?</Text></Pressable>
              </View>

              <View style={{position:"relative"}}>
                <Text style={{...styles.error, position:"absolute", top: 45, alignSelf: "center", fontWeight: "600"}}>{error}</Text>
              </View>
              <View style={styles.boton}>
                <Button title="Login" color="#00a51c" disabled={disabledButton} onPress={props.handleSubmit}></Button>
              </View>
              <View style={styles.botonRegister}>
                <Button title="Register" color="#00cf20" onPress={()=>navigation.navigate('Register')}></Button>
              </View>
              
            </View>
          )
          }

        </Formik>


            </div>
        </>
    )
}

export default ContactUs;