"use client";
import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    CardFooter,
    Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select"; // Ensure SelectProps is imported
import { Button } from "@/components/ui/button";
import { listings } from "../testdb/db";
import { useState } from "react";
import Link from "next/link";

interface FormState {
    name: string;
    description: string;
    quantity: string;
    category: string;
}

export default function comp1() {
    const [formData, setFormData] = useState<FormState>({
        name: "",
        description: "",
        quantity: "",
        category: "clothing",
    });

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = () => {
        // Add your logic to update the 'listings' array with the form data
        const updatedListings = [
            ...listings,
            {
                id: listings.length + 1, // Replace with a unique identifier logic
                ...formData,
            },
        ];

        // Log the updated listings array (replace with actual logic)
        console.log("Updated Listings:", updatedListings);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>List Your Donations</CardTitle>
                <CardDescription>
                    Add the products you want to donate to the list
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                    <div>
                        <Label className="form-label" htmlFor="name">
                            Name
                        </Label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter product name"
                        />
                    </div>
                    <div>
                        <Label className="form-label" htmlFor="description">
                            Description
                        </Label>
                        <Textarea
                            className="min-h-[100px]"
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Enter product description"
                        />
                    </div>
                    <div>
                        <Label className="form-label" htmlFor="quantity">
                            Quantity
                        </Label>
                        <Input
                            id="quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleInputChange}
                            placeholder="Enter quantity"
                            type="number"
                        />
                    </div>
                    <div>
                        <Label className="form-label" htmlFor="category">
                            Category
                        </Label>
                        <select
                            id="category"
                            name="category"
                            className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300"
                            value={formData.category}
                            onChange={handleInputChange}
                        >
                            <option value="clothing">Clothing</option>
                            <option value="electronics">Electronics</option>
                            <option value="books">Books</option>
                            <option value="toys">Toys</option>
                        </select>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                {/* <Button onClick={handleFormSubmit}>Submit</Button> */}
                <Link href={"/"}>
                    <Button>Submit</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
