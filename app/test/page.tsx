// page.tsx
"use client";
import { useState, useEffect } from "react";
import { db } from "../util/firebase";
import { collection, getDocs, query } from "firebase/firestore/lite";

interface Listing {
    // Define the properties expected in your listings data
    // For example:
    id: string;
    name: string;
    // ... other properties
}

const Page = () => {
    const [items, setItems] = useState<Listing[]>([]); // Use the defined interface
    const [isLoading, setIsLoading] = useState(true); // Add loading state
    const [error, setError] = useState(null); // Track errors

    async function getDataFromFirestore(
        collectionName: string,
        queryOptions?: any
    ): Promise<Listing[]> {
        try {
            // Build the query with optional constraints
            const q = query(collection(db, collectionName), queryOptions);

            // Fetch data from the specified collection
            const querySnapshot = await getDocs(q);

            // Extract data from each document
            return querySnapshot.docs.map((doc) => doc.data() as Listing);
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle errors gracefully, potentially returning an empty array or throwing a specific error
            throw error; // Throw an error depending on your application's needs
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: Listing[] = await getDataFromFirestore("users");
                setItems(data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <p className="p-6">
            {isLoading ? (
                // Display loading indicator while data is being fetched
                <p>Loading listings...</p>
            ) : error ? (
                // Display error message if there is an error
                <p>Error fetching listings: {error.message}</p>
            ) : (
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {/* Replace placeholders with actual data properties */}
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </p>
    );
};

export default Page;
