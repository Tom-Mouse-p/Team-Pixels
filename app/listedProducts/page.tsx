"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
    TableHead,
    TableRow,
    TableHeader,
    TableCell,
    TableBody,
    Table,
} from "@/components/ui/table";
import { listings, removeListing } from "../testdb/db"; // Replace with the correct path
import { JSX } from "react";

export default function ListProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(listings.value);
    }, [listings.value]);

    const handleRemoveListing = (listingToRemove: any) => {
        removeListing(listingToRemove);
    };

    return (
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                <div className="flex items-center">
                    <h1 className="font-semibold text-lg md:text-2xl">
                        Products
                    </h1>
                    <Button className="ml-auto" size="sm">
                        Add product
                    </Button>
                </div>
                <div className="border shadow-sm rounded-lg">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[80px]">
                                    Image
                                </TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Quantity</TableHead>
                                <TableHead className="w-[100px]">
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>
                                        <img
                                            alt="Product image"
                                            className="aspect-square rounded-md object-cover"
                                            height="40"
                                            src={product.image}
                                            width="40"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        {product.name}
                                    </TableCell>
                                    <TableCell>{product.category}</TableCell>
                                    <TableCell>{product.quantity}</TableCell>
                                    <TableCell className="flex justify-end gap-2">
                                        <Button size="icon" variant="ghost">
                                            <span className="material-icons-outlined">
                                                edit
                                            </span>
                                            <span className="sr-only">
                                                Edit
                                            </span>
                                        </Button>
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            onClick={() =>
                                                handleRemoveListing(product)
                                            }
                                        >
                                            <span className="material-icons-outlined">
                                                delete
                                            </span>
                                            <span className="sr-only">
                                                Delete
                                            </span>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </main>
        </div>
    );
}
