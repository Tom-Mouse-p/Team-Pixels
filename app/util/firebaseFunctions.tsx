// firebaseFunctions.ts

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    query,
    where,
    deleteDoc,
    doc,
    CollectionReference,
    DocumentData,
} from "firebase/firestore";
import firebaseApp from "./firebase";

const db = getFirestore(firebaseApp);

export const storeInfo = async (data: any) => {
    try {
        const collectionRef: CollectionReference<DocumentData> = collection(
            db,
            "users"
        );
        const docRef = await addDoc(collectionRef, data);
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error adding document: ", error);
        throw error;
    }
};

export const retrieveInfo = async (fieldName: string, value: any) => {
    const q = query(collection(db, "users"), where(fieldName, "==", value));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => doc.data());
};

export const deleteInfo = async (docId: string) => {
    await deleteDoc(doc(docId));
    console.log("Document successfully deleted!");
};
