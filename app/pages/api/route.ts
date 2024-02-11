// /api/get.ts
import { NextApiRequest, NextApiResponse } from "next";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../util/firebase";

// Get a list of listings from your database
// async function getListings() {
//     const listings = collection(db, "listings");
//     const listingsSnapshot = await getDocs(listings);
//     const listingsList = listingsSnapshot.docs.map((doc) => doc.data());
//     return listingsList;
// }

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//     try {
//         const listingsList = await getListings();
//         console.log(listingsList); // Log the result of the function

//         res.status(200).json(listingsList);
//     } catch (error) {
//         console.error("Error fetching listings:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ text: "Hello" });
}
