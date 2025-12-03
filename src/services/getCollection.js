import {firestoreDatabase} from "./firestore";

export async function getCollection(collection){
    if (!firestoreDatabase) return [];
    const result=await firestoreDatabase.collection(collection).get();
    if (result.empty) return [];

    return result.docs.map(doc=>({...doc.data()}));
}