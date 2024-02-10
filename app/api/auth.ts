import { NextApiRequest, NextApiResponse } from "next";
import firebase from "../firebase/firebase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { email, password } = req.body;
        const userCredential = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
        res.status(200).json({ user: userCredential.user });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred." });
        }
    }
};
