// import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// import React from 'react';
// import { useState } from "react";
// import { NavLink, useNavigation } from "react-router-dom";
// import { auth } from "../../../../firebase_init";
// import Navbar from "../../Shares/Navbar";


// const Signin = () => {
//     // const navigation = useNavigation();
//     const [user, setUser] = useState({});
//     const provider = new GoogleAuthProvider();

//     const handleGoogleButton = () => {
//         signInWithPopup(auth, provider)
//             .then((result) => {
//                 const user = result.user;
//                 setUser(user);
//                 console.log(user);
//                 // ...
//             }).catch((error) => {
//                 const errorMessage = error.message;
//                 console.log('error', error);

//             });


//     }

//     return (
//         <div class="hero min-h-screen -mt-16 login-container ">
//             <div class="hero-content flex-col lg:flex-row">

//                 <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                     <div class="card-body">
//                         <div class="form-control">
//                             <label class="label">
//                                 <span class="label-text">Email</span>
//                             </label>
//                             <input type="text" placeholder="email" class="input input-bordered" />
//                         </div>
//                         <div class="form-control">
//                             <label class="label">
//                                 <span class="label-text">Password</span>
//                             </label>
//                             <input type="text" placeholder="password" class="input input-bordered" />
//                             <label class="label">
//                                 <span class="label-text">Confirm Password</span>
//                             </label>
//                             <input type="text" placeholder="password" class="input input-bordered" />

//                         </div>
//                         <div>
//                             <label class="label">
//                                 <p class="label-text-alt link link-hover text-center"> Already have an account?
//                                     <NavLink to='/login' class="label-text-alt link link-hover text-primary"> Login</NavLink>
//                                 </p>
//                             </label>
//                         </div>
//                         <div class="form-control mt-6">
//                             <button class="btn btn-primary">Sign Up</button>
//                         </div>
//                         <div class="divider">OR</div>
//                         <div class="form-control mt-6">
//                             <button onClick={handleGoogleButton} class="btn btn-primary">Sign in with Google</button>
//                         </div>
//                         {/* {
//                             user.map(users => <Navbar users={users}></Navbar>)
//                         } */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signin;
import { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../../../firebase_init";
import './../Login/Login.css';

const Signup = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });

    const [showPass, setShowPass] = useState(false);

    const [createUserWithEmailAndPassword, user, loading, hookError] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }

        // setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };

    const handleConfirmPasswordChange = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Password's don't match" });
            setUserInfo({ ...userInfo, confirmPass: "" });
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(userInfo);
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    };

    useEffect(() => {
        if (hookError) {
            switch (hookError?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;
                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!");
                    break;
                default:
                    toast("something went wrong");
            }
        }
    }, [hookError]);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);

    return (
        <div className="login-container">
            <div className="login-title">Sign up</div>
            <form className="login-form" onSubmit={handleLogin}>
                <input type="text" placeholder="Your Email" onChange={handleEmailChange} />
                {errors?.email && <p className="error-message">{errors.email}</p>}
                <div className="relative">
                    <input type={showPass ? "text" : "password"} placeholder="password" onChange={handlePasswordChange} />
                    {errors?.password && <p className="error-message">{errors.password}</p>}
                    <p className="absolute top-3 right-5" onClick={() => setShowPass(!showPass)}>🔥</p>
                </div>
                <input
                    type="password"
                    placeholder="confirm password"
                    onChange={handleConfirmPasswordChange}
                />

                <button>Sign up</button>

                {/* {error && <p className="error-message">{error}</p> } */}
                {/* {hookError && <p className="error-message">{hookError?.message}</p>} */}
                <ToastContainer />
            </form>
        </div>
    );
};

export default Signup;


