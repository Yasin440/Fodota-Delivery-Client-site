import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

;

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [orderedFoods, setOrderedFoods] = useState([]);
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isLogin, setIsLogin] = useState(false);
    const auth = getAuth();

    //Load json data from mongodb/services
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://polar-brushlands-97321.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    //fetch all ordered combo pack to manage from mongodb/ordered_food

    useEffect(() => {
        fetch('https://polar-brushlands-97321.herokuapp.com/ordered_food')
            .then(res => res.json())
            .then(data => setOrderedFoods(data))
    }, [])
    //-------------------// 
    const toggleLoginAndOut = even => {
        setIsLogin(even.target.checked);
    }
    // get email and password
    const handleGetEmail = even => {
        setEmail(even.target.value);
    }
    const handleGetPassword = even => {
        setPassword(even.target.value)
    }
    //-------------------//

    //Create new user using email/password
    const handleRegistration = (even) => {
        even.preventDefault();
        if (password.length < 6) {
            setError('Password at list 6 character');
            return;
        }
        isLogin ? loginUser(email, password) : createUser(email, password)
    }

    //------------------//
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    //login with email and password
    const loginUser = (email, password) => {
        // setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
        // .finally(() => setIsLoading(false));

    }

    //------------------//

    // sign in || login with google popup
    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        // return for redirect user after login
        return signInWithPopup(auth, googleProvider)

            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    //---------------------//

    // subscribe for user state change on browser
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //---------------------//

    //User can LogOut
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }
    //---------------------//

    return {
        user,
        error,
        services,
        isLoading,
        isLogin,
        email,
        password,
        orderedFoods,
        setOrderedFoods,
        toggleLoginAndOut,
        handleGetEmail,
        handleGetPassword,
        handleRegistration,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;