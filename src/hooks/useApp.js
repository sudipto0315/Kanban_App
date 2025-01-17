import {
    collection,
    addDoc,
    serverTimestamp,
    getDocs,
} from "firebase/firestore";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";
import useStore from "../store";

const useApp = () => {
    const {
        currentUser: { uid },
    } = getAuth();
    const boardsColRef = collection(db, `users/${uid}/boards`);
    const {setBoards}=useStore()
    const createBoard = async ({ name, color }) => {
        try {
            await addDoc(boardsColRef, {
                name,
                color,
                createdAt: serverTimestamp(),
            });
        } catch (err) {
            // TODO: showing the msg in a toaster
            console.log(err);
            throw err;
        }
    };

    const fetchBoards = async () => {
        try {
            const querySnapshot = await getDocs(boardsColRef);
            const boards = querySnapshot.docs.map(doc =>({
                ...doc.data(),
                id: doc.id,
            }));
            setBoards(boards);
        } catch (err) {
            // TODO: showing the msg in a toaster
            console.log(err);
            throw err;
        }
    };

    return { createBoard, fetchBoards };
};

export default useApp;
