<template>
  <header class="header">
    <div class="loginBox">
      <div class="box-1">
        <div class="line" :class="{ error: errMsg }"></div>
        <img class="logo" src="../assets/logo.png" alt="Logo">
        <p class="logo-text">Denov tumani 4-son Kasb-hunar maktabi</p>
      </div>
      <div class="box-2">
          <input class="" type="text" v-model="login" placeholder="Loginni kiriting">
          <input type="password" v-model="password" placeholder="Parolni kiriting">
      </div>
      <div class="box-3">
        <p class="error-msg" v-if="errMsg">{{ errMsg }}</p>
        <router-link to="/">Orqaga</router-link>
        <button @click="register">Kirish</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router'

const login = ref("");
const password = ref("");
const errMsg = ref("");
const router = useRouter();

const register = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, login.value, password.value)
  .then((data) => {
    router.push('/edit');
  })
  .catch((error) => {
    switch(error.code) {
      case "auth/invalid-email":
        errMsg.value = "Invalid Email";
        break;
      case "auth/user-not-found":
        errMsg.value = "No account with that email was found";
        break;
      case "auth/wrong-password":
        errMsg.value = "Incorrect password";
        break;
      default:
        errMsg.value = "Email or Password was incorrect";
        break;
      
    }
  })
};
</script>

<style scoped lang="scss">
  .header {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background: #E5E5E5;
    display: flex;
    justify-content: center;
    align-items: center;

    .loginBox {
      width: 420px;
      height: 355px;
      background: #fff;

        // Box-1 
      .box-1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 40px;

        .line {
          width: 100%;
          height: 3px;
          background: rgba(17, 31, 80, 0.8);;
        }
        .error {
        background: #C10015;
        }
        .logo {
          padding: 20px 0;
          width: 85px;
        }
        .logo-text {
          font-weight: 500;
          font-size: 20px;
          text-align: center;
          color: #111F50;
        }
      }
      // Box-2 
      .box-2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        input {
          width: 95%;
          height: 35px;
          padding: 5px 10px;
          border: 2px solid #111F50;
          outline: none;
          color: #111F50;
          &::placeholder {
            color: #111F50;
          }
          &:nth-child(2) {
            margin: 10px;
          }
        }
        .error {
        border: 2px solid #C10015;
        }
      }
      // Box-3 
      .box-3 {
        .error-msg {
          padding-left: 20px;
          color: #C10015;
        }

        a, button {
          margin: 7px 0;
          // padding: 8px 35px;
          width: 120px;
          height: 35px;
          border: 1px solid #111F50 inset;
          color: #fff;
          background: #111F50;
          font-weight: 400;
          font-size: 14px;
          &:hover {
            color: #111F50;
            border: 1px solid #111F50;
            background: #fff;
          } 
        }

        a {
          padding: 8px 36px;
          text-decoration: none;
          margin: 0 100px 0 40px;
          border: 1px solid #111F50;
        }

        button {
          border: none;
        }
      }
    }
  }
</style>>