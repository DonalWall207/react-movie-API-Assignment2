import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

export const register = async ( userName, password) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, userName, password);
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
}

export const login = async (userName, password) => {
    try {
        const user = await signInWithEmailAndPassword(auth, userName, password);
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
}

export const logout = async () => {
    await signOut(auth);
}