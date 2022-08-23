import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase";

export const AuthApi = (data) => {
    console.log("AuthApi", data);

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
          .then((userCredential) => {
           
            const user = userCredential.user;
    
            onAuthStateChanged(auth, (user) => {
                if (user) {
                
                  const uid = user.uid;
                  sendEmailVerification(auth.currentUser)
                  .then(() => {
                  
                    console.log("Email verification sent!");
                  });
                } else {
                 
                }
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                console.log('email is already register');
            }
          });
      });
}