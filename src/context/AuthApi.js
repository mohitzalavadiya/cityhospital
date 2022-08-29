import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { history } from "../History";

export const AuthApiSignup = (data) => {
    console.log("AuthApi", data);

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
          .then((userCredential) => {
           
            const user = userCredential.user;
    
            onAuthStateChanged(auth, (user) => {
                if (user) {
                
                  
                  sendEmailVerification(auth.currentUser)
                  .then(() => {
                  
                    resolve("Email verification sent!");
                  });
                } else {
                 
                }
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
               reject('email is already register');
            }
          });
      });
}

export const AuthApiLogin = (data) => {
  console.log("Login", data);

  return new Promise( (resolve, reject) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (!user.emailVerified) {
        reject("Please verify your email");
      } else {
        resolve(user);
        history("/")
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode.localeCompare("auth/wrong-password") === 0 || errorCode.localeCompare("auth/user-not-found") === 0) {
        reject("password or Email is Incorrect");
      } else{
        reject("invalid")
      }
    });
  })
}