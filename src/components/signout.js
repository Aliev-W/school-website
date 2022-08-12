import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import { useRouter } from 'vue-router';

const isLoggedIn = ref(false);
const router = useRouter();

let auth;
onMounted(() =>{
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user){
      isLoggedIn.value = true;
	  console.log("Kirdi");
    }
    else {
      isLoggedIn.value = false;
	  console.log("Chiqdi");
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/")
  });
};
