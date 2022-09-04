import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
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

export const logOutUser = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => {
        resolve({ payload: "LOGOUT SUCCESSFULLY" });
      })
      .catch((error) => {
        reject(error.code);
      });
  });
};
export const googleNewUser = () => {
  return new Promise((resolve, reject) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        resolve({ payload: user });
      })
      .catch((error) => {
        const errorCode = error.code;
        reject(errorCode);
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  });
};

export const resetPassword = ({email}) => {
  return new Promise((resolve, reject) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        resolve({payload:"Password reset link successfully set on email"})
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        if (errorCode.localeCompare("auth/invalid-value-(email),-starting-an-object-on-a-scalar-field") === 0) {
          reject("Please enter registred email")
        } else {
          reject(errorCode)
        }
      });
  });
};