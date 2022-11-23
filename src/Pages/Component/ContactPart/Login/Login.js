// import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// import React from 'react';
// import { useState } from "react";
// import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
// import { NavLink, useNavigation } from "react-router-dom";
// import { auth } from "../../../../firebase_init";
// import Navbar from "../../Shares/Navbar";


// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [
//         signInWithEmail,
//         user,
//         loading,
//         hookError,
//     ] = useSignInWithEmailAndPassword(auth);


//     //google sign in
//     // const [user, setUser] = useState({});
//     const provider = new GoogleAuthProvider();

//     //Google Sign In
//     const handleGoogleButton = () => {
//         signInWithPopup(auth, provider)
//             .then((result) => {
//                 const user = result.user;
//                 // setUser(user);
//                 console.log(user);
//                 // ...
//             }).catch((error) => {
//                 const errorMessage = error.message;
//                 console.log('error', error);

//             });
//     }


//     //Email and password login
//     //Email Check
//     const validEmailCheck = event => {
//         const emailRegex = /^\S+@\S+\.\S+/;
//         const vaildEmail = emailRegex.test(event.target.value);
//         console.log(vaildEmail)
//         if (vaildEmail) {
//             setEmail(event.target.value)
//         }
//         else {
//             setError('Invaild Email')
//         }
//     }

//     const loginButtonHandle = event => {
//         event.preventDefault();
//         signInWithEmail(email, password);
//     }


//     return (
//         <div class="hero min-h-screen -mt-16 login-container">
//             <div class="hero-content flex-col lg:flex-row">

//                 <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                     <form onSubmit={loginButtonHandle} class="card-body">
//                         <div class="form-control">
//                             <label class="label">
//                                 <span class="label-text">Email</span>
//                             </label>
//                             <input type="text" placeholder="email" class="input input-bordered" onChange={validEmailCheck} value={email} />

//                         </div>
//                         {/* {error && <p className="text-red-600">{error}</p>} */}
//                         <div class="form-control">
//                             <label class="label">
//                                 <span class="label-text">Password</span>
//                             </label>
//                             <input type="text" placeholder="password" class="input input-bordered" value={password}
//                                 onChange={(e) => setPassword(e.target.value)} />
//                             <label class="label">
//                                 <NavLink to='/signin' class="label-text-alt link link-hover">Create new account?</NavLink>
//                                 <NavLink to='/signin' class="label-text-alt link link-hover"> Forgot Password?</NavLink>
//                             </label>
//                         </div>
//                         <div class="form-control mt-6">
//                             <button class="btn btn-primary">Login</button>
//                         </div>
//                         <div class="divider">OR</div>

//                         {/* Sign in with google */}
//                         <div class="form-control mt-6">
//                             <button onClick={handleGoogleButton} class="btn btn-primary">Sign in with Google</button>
//                         </div>

//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;



import { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../../../firebase_init";
import Loading from "../../Shares/Loading";
import "./Login.css";


const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })



    const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);

    // if (loading) {
    //     return (
    //         <div className='text-center mx-auto'>
    //             <Loading></Loading>
    //         </div>
    //     );
    // }
    // if (loading2) {
    //     return (
    //         <div className='text-center mx-auto'>
    //             <Loading></Loading>
    //         </div>
    //     );
    // }


    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, email: "" })
        } else {
            setErrors({ ...errors, email: "Invalid email" })
            setUserInfo({ ...userInfo, email: "" })
        }


        // setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" })
        }

    }

    const handleLogin = (e) => {
        e.preventDefault();

        console.log(userInfo)

        signInWithEmail(userInfo.email, userInfo.password);

    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/shops";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);

    useEffect(() => {
        const error = hookError || googleError;
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;

                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!")
                    break;
                default:
                    toast("something went wrong")
            }
        }
    }, [hookError, googleError])

    return (
        <div className="login-container">
            <div className="login-title">LOGIN</div>
            <form className="login-form" onSubmit={handleLogin}>
                <input type="text" placeholder="Your Email" onChange={handleEmailChange} />
                {errors?.email && <p className="error-message">{errors.email}</p>}
                <input type="password" placeholder="password" onChange={handlePasswordChange} />
                {errors?.password && <p className="error-message">{errors.password}</p>}
                <button>Login</button>

                {/* {error && <p className="error-message">{error}</p> } */}
                {/* {hookError && <p className="error-message">{hookError?.message}</p>} */}
                <ToastContainer />

                <p>Don't have an account? <Link to="/signup">Sign up first</Link> </p>
            </form>

            <button onClick={() => signInWithGoogle()}>Google</button>
        </div>
    );
};

export default Login;