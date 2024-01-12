<template>
    <div class="contenidototal">
    <div class="bodyfalso">
      <main>
        <div class="contenedor__todo">
          <div class="caja__trasera">
            <div class="caja__trasera-login">
              <h3>¿Ya tienes una cuenta?</h3>
              <p>Inicia sesión para entrar en la página</p>
              <button id="btn__iniciar-sesion">Iniciar Sesión</button>
            </div>
            <div class="caja__trasera-register">
              <h3>¿Aún no tienes una cuenta?</h3>
              <p>Regístrate para que puedas iniciar sesión</p>
              <button id="btn__registrarse" class="btnregistrarse">Regístrarse</button>
            </div>
          </div>
  
          <!-- Formulario de Login y registro -->
          <div class="contenedor__login-register">
            <!-- Login -->
            <form action="" class="formulario__login" v-on:submit.prevent="login">
              <h2>Iniciar Sesión</h2>
              <input type="text" id="username" placeholder="Usuario" v-model="username">
              <input type="password" id="password"  placeholder="Contraseña" v-model="password">
              <button  class="btnentrar">Entrar</button>
            </form>
  
            <!-- Register -->
            <form action="" class="formulario__register">
              <h2>Regístrarse</h2>
              <input type="text" placeholder="Nombre completo">
              <input type="text" placeholder="Correo Electronico">
              <input type="text" placeholder="Usuario">
              <input type="password" placeholder="Contraseña">
              <button>Regístrarse</button>
            </form>
          </div>
        </div>
      </main>
    </div>
</div>
  </template>
  
  <script>
 import axios from 'axios'; 
 import Swal from 'sweetalert2';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
    
  },



  mounted() {
    document.getElementById("btn__iniciar-sesion").addEventListener("click", this.iniciarSesion);
    document.getElementById("btn__registrarse").addEventListener("click", this.register);
    window.addEventListener("resize", this.anchoPage);
    this.anchoPage();
  

  },
  methods: {
      login() {
      const formData = {
        documento_id: this.username,
        correo: this.password,
      };

      axios.post("http://127.0.0.1:8000/api/usuario/", formData)
        .then(response => {
          // Aquí puedes manejar la respuesta de la API después de iniciar sesión exitosamente
          console.log(response.data);
        })
        .catch(error => {
          // Aquí puedes manejar cualquier error de inicio de sesión
          console.log(error);
        });
    },






    anchoPage() {
      const formulario_login = document.querySelector(".formulario__login");
      const formulario_register = document.querySelector(".formulario__register");
      const contenedor_login_register = document.querySelector(".contenedor__login-register");
      const caja_trasera_login = document.querySelector(".caja__trasera-login");
      const caja_trasera_register = document.querySelector(".caja__trasera-register");

      if (window.innerWidth > 850) {
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
      } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
      }
    },
    iniciarSesion() {
      const formulario_login = document.querySelector(".formulario__login");
      const contenedor_login_register = document.querySelector(".contenedor__login-register");
      const formulario_register = document.querySelector(".formulario__register");
      const caja_trasera_register = document.querySelector(".caja__trasera-register");
      const caja_trasera_login = document.querySelector(".caja__trasera-login");

      if (window.innerWidth > 850) {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
      } else {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
      }
    },
    register() {
      const formulario_register = document.querySelector(".formulario__register");
      const contenedor_login_register = document.querySelector(".contenedor__login-register");
      const formulario_login = document.querySelector(".formulario__login");
      const caja_trasera_register = document.querySelector(".caja__trasera-register");
      const caja_trasera_login = document.querySelector(".caja__trasera-login");

      if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
      } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
      }
    }
  }
};
</script>

  
  <style scoped>


body {
  width: 100%;
  background-image: url('../assets/login1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* Otros estilos adicionales */
}
.bodyfalso {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;

}
.btnentrar{
    margin-top: 20px;
}
.btnregistrarse{
    margin-top: 20px;
}
main{
    
    width: 100%;
    padding: 20px;
    margin: auto;
    margin-top: 200px;
}
.contenedor__todo {
    
    width: 100%;
    max-width: 800px;
    margin: auto;
    position: relative;
}

.caja__trasera {
    width: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(16, 16, 156, 0.671);
    border-radius: 20px;
}

.caja__trasera div {
    margin: 100px 40px;
    color: white;
    transition: all 500ms;
}

.caja__trasera div p,
.caja__trasera button {
    margin-top: 30px;
}

.caja__trasera div h3 {
    font-weight: 400;
    font-size: 26px;
}

.caja__trasera div p {
    font-size: 16px;
    font-weight: 300;
}

.caja__trasera button {
    padding: 10px 40px;
    border: 2px solid #fff;
    font-size: 14px;
    background: transparent;
    font-weight: 600;
    cursor: pointer;
    color: white;
    outline: none;
    transition: all 300ms;
    margin: 0 auto;
  display: block;
}

.caja__trasera button:hover {
    background: #fff;
    color: #5048c0;
}

.contenedor__login-register {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 380px;
    position: relative;
    top: -185px;
    left: 10px;
    transition: left 500ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
    
}

.contenedor__login-register form {
    width: 100%;
    padding: 80px 20px;
    background: white;
    position: absolute;
    border-radius: 20px;
}

.contenedor__login-register form h2 {
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
    color: #0f74da;
}

.contenedor__login-register form input {
    width: 100%;
    margin-top: 40px;
    padding: 10px;
    border: none;
    background: #F2F2F2;
    font-size: 16px;
    outline: none;
}

.contenedor__login-register form button {
    padding: 10px 40px;
    margin-top: 40px;
    border: none;
    font-size: 14px;
    background: #5048c0;
    font-weight: 600;
    cursor: pointer;
    color: white;
    outline: none;
    margin: 0 auto;
  display: block;
}

.formulario__login {
    opacity: 1;
    display: block;
    margin-bottom: 30px;
    border:2px solid ;
    border-color: black;
   
    
}
.formulario__login input[type="password"] {
  margin-bottom: 20px;
}
.formulario__register input[type="password"] {
  margin-bottom: 20px;
}


.formulario__register {
    display: none;
    border-color: red;
    margin-top:100px ;
}

@media screen and (max-width: 850px) {
    .caja__trasera {
        max-width: 350px;
        height: 300px;
        flex-direction: column;
        margin: auto;
        border-radius: 10px;
        
    }

    .caja__trasera div {
        margin: 0px;
        position: absolute;
        border-radius: 10px;
    }

    .contenedor__login-register {
        top: -10px;
        left: -5px;
        margin: auto;
    }

    .contenedor__login-register form {
        position: relative;
    }

    

}
</style>



