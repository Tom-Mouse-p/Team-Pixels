// YourComponent.tsx
"use client";

import { useState } from "react";
import { storeInfo, retrieveInfo, deleteInfo } from "../util/firebaseFunctions";

const YourComponent = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [idToDelete, setIdToDelete] = useState("");
    const [responseData, setResponseData] = useState<any>(null);

    const showAlert = (message: string, isError: boolean = false) => {
        if (isError) {
            alert(`Error: ${message}`);
        } else {
            alert(message);
        }
    };

    const handleStoreData = async () => {
        try {
            const data = { name, email };
            const docId = await storeInfo(data);
            showAlert(`Data stored with ID: ${docId}`);
        } catch (error) {
            showAlert("Error storing data", true);
            console.error("Error storing data:", error);
        }
    };

    const handleRetrieveData = async () => {
        try {
            const result = await retrieveInfo("email", email);
            setResponseData(result);
            showAlert("Data retrieved successfully");
        } catch (error) {
            showAlert("Error retrieving data", true);
            console.error("Error retrieving data:", error);
        }
    };

    const handleDeleteData = async () => {
        try {
            await deleteInfo(idToDelete);
            showAlert("Data deleted successfully");
        } catch (error) {
            showAlert("Error deleting data", true);
            console.error("Error deleting data:", error);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your Component</h1>

            {/* Store Data Form */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleStoreData();
                }}
            >
                <label className="block mb-2">
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border p-1"
                    />
                </label>
                <label className="block mb-2">
                    Email:
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-1"
                    />
                </label>
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Store Data
                </button>
            </form>

            {/* Retrieve Data Form */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleRetrieveData();
                }}
                className="mt-4"
            >
                <label className="block mb-2">
                    Email to Retrieve:
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-1"
                    />
                </label>
                <button
                    type="submit"
                    className="bg-green-500 text-white p-2 rounded"
                >
                    Retrieve Data
                </button>
            </form>

            {/* Display Retrieved Data */}
            {responseData && (
                <div className="mt-4">
                    <h2 className="text-xl font-bold mb-2">Retrieved Data:</h2>
                    <pre className="bg-gray-200 p-2 rounded">
                        {JSON.stringify(responseData, null, 2)}
                    </pre>
                </div>
            )}

            {/* Delete Data Form */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleDeleteData();
                }}
                className="mt-4"
            >
                <label className="block mb-2">
                    ID to Delete:
                    <input
                        type="text"
                        value={idToDelete}
                        onChange={(e) => setIdToDelete(e.target.value)}
                        className="border p-1"
                    />
                </label>
                <button
                    type="submit"
                    className="bg-red-500 text-white p-2 rounded"
                >
                    Delete Data
                </button>
            </form>
        </div>
    );
};

export default YourComponent;
