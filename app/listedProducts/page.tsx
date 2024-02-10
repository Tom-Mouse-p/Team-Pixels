import Link from "next/link";
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
import { JSX, SVGProps } from "react";

export default function listProducts() {
    return (
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-[60px] items-center border-b px-6">
                        <Link
                            className="flex items-center gap-2 font-semibold"
                            href="#"
                        >
                            <Package2Icon className="h-6 w-6" />
                            <span className="">Acme Inc</span>
                        </Link>
                        <Button
                            className="ml-auto h-8 w-8"
                            size="icon"
                            variant="outline"
                        >
                            <BellIcon className="h-4 w-4" />
                            <span className="sr-only">
                                Toggle notifications
                            </span>
                        </Button>
                    </div>
                    <div className="flex-1 overflow-auto py-2">
                        <nav className="grid items-start px-4 text-sm font-medium">
                            <Link
                                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                                href="#"
                            >
                                <HomeIcon className="h-4 w-4" />
                                Home
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="#"
                            >
                                <PackageIcon className="h-4 w-4" />
                                Products
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="#"
                            >
                                <PlusSquareIcon className="h-4 w-4" />
                                Add Product
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="#"
                            >
                                <SettingsIcon className="h-4 w-4" />
                                Settings
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
                    <Link className="lg:hidden" href="#">
                        <Package2Icon className="h-6 w-6" />
                        <span className="sr-only">Home</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-4 text-sm font-medium lg:ml-4 lg:gap-6">
                        <Link className="font-medium" href="#">
                            Dashboard
                        </Link>
                        <Link className="font-medium text-gray-900" href="#">
                            Products
                        </Link>
                        <Link className="font-medium" href="#">
                            Add Product
                        </Link>
                        <Link className="font-medium" href="#">
                            Settings
                        </Link>
                    </nav>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800 dark:border-gray-800"
                                size="icon"
                                variant="ghost"
                            >
                                <img
                                    alt="Avatar"
                                    className="rounded-full"
                                    height="32"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "32/32",
                                        objectFit: "cover",
                                    }}
                                    width="32"
                                />
                                <span className="sr-only">
                                    Toggle user menu
                                </span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
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
                                <TableRow>
                                    <TableCell>
                                        <img
                                            alt="Product image"
                                            className="aspect-square rounded-md object-cover"
                                            height="40"
                                            src="/placeholder.svg"
                                            width="40"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        Glimmer Lamps
                                    </TableCell>
                                    <TableCell>Lighting</TableCell>
                                    <TableCell>500</TableCell>
                                    <TableCell className="flex justify-end gap-2">
                                        <Button size="icon" variant="ghost">
                                            <FileEditIcon className="w-4 h-4" />
                                            <span className="sr-only">
                                                Edit
                                            </span>
                                        </Button>
                                        <Button size="icon" variant="ghost">
                                            <TrashIcon className="w-4 h-4" />
                                            <span className="sr-only">
                                                Delete
                                            </span>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <img
                                            alt="Product image"
                                            className="aspect-square rounded-md object-cover"
                                            height="40"
                                            src="/placeholder.svg"
                                            width="40"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        Aqua Filters
                                    </TableCell>
                                    <TableCell>Water</TableCell>
                                    <TableCell>750</TableCell>
                                    <TableCell className="flex justify-end gap-2">
                                        <Button size="icon" variant="ghost">
                                            <FileEditIcon className="w-4 h-4" />
                                            <span className="sr-only">
                                                Edit
                                            </span>
                                        </Button>
                                        <Button size="icon" variant="ghost">
                                            <TrashIcon className="w-4 h-4" />
                                            <span className="sr-only">
                                                Delete
                                            </span>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <img
                                            alt="Product image"
                                            className="aspect-square rounded-md object-cover"
                                            height="40"
                                            src="/placeholder.svg"
                                            width="40"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        Eco Planters
                                    </TableCell>
                                    <TableCell>Garden</TableCell>
                                    <TableCell>300</TableCell>
                                    <TableCell className="flex justify-end gap-2">
                                        <Button size="icon" variant="ghost">
                                            <FileEditIcon className="w-4 h-4" />
                                            <span className="sr-only">
                                                Edit
                                            </span>
                                        </Button>
                                        <Button size="icon" variant="ghost">
                                            <TrashIcon className="w-4 h-4" />
                                            <span className="sr-only">
                                                Delete
                                            </span>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <img
                                            alt="Product image"
                                            className="aspect-square rounded-md object-cover"
                                            height="40"
                                            src="/placeholder.svg"
                                            width="40"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        Zest Juicers
                                    </TableCell>
                                    <TableCell>Kitchen</TableCell>
                                    <TableCell>1000</TableCell>
                                    <TableCell className="flex justify-end gap-2">
                                        <Button size="icon" variant="ghost">
                                            <FileEditIcon className="w-4 h-4" />
                                            <span className="sr-only">
                                                Edit
                                            </span>
                                        </Button>
                                        <Button size="icon" variant="ghost">
                                            <TrashIcon className="w-4 h-4" />
                                            <span className="sr-only">
                                                Delete
                                            </span>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <img
                                            alt="Product image"
                                            className="aspect-square rounded-md object-cover"
                                            height="40"
                                            src="/placeholder.svg"
                                            width="40"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        Flexi Wearables
                                    </TableCell>
                                    <TableCell>Fitness</TableCell>
                                    <TableCell>200</TableCell>
                                    <TableCell className="flex justify-end gap-2">
                                        <Button size="icon" variant="ghost">
                                            <FileEditIcon className="w-4 h-4" />
                                            <span className="sr-only">
                                                Edit
                                            </span>
                                        </Button>
                                        <Button size="icon" variant="ghost">
                                            <TrashIcon className="w-4 h-4" />
                                            <span className="sr-only">
                                                Delete
                                            </span>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </main>
            </div>
        </div>
    );
}

function Package2Icon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 9h18v10a2 2 0 1-2 2H5a2 1-2-2V9Z" />
            <path d="m3 9 2.45-4.9A2 2 0 1 7.24 3h9.52a2 1.8 1.1L21" />
            <path d="M12 3v6" />
        </svg>
    );
}

function BellIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 8a6 6 0 1 12 0c0 7 3 9 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 3.4" />
        </svg>
    );
}

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-7 7v11a2 2 0 1-2 2H5a2 1-2-2z" />
            <polyline points="9 22 12 15" />
        </svg>
    );
}

function PackageIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m7.5 4.27 9 5.15" />
            <path d="M21 8a2 2 0 0-1-1.73l-7-4a2 0-2 0l-7 4A2 3 8v8a2 1 1.73l7 4a2 0l7-4A2 21 16Z" />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
        </svg>
    );
}

function PlusSquareIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
        </svg>
    );
}

function SettingsIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.22 2h-.44a2 2 0 0-2 2v.18a2 1-1 1.73l-.43.25a2 1-2 0l-.15-.08a2 0-2.73.73l-.22.38a2 .73 2.73l.15.1a2 1 1.72v.51a2 1.74l-.15.09a2 0-.73 2.73l.22.38a2 2.73.73l.15-.08a2 0l.43.25a2 1.73V20a2 2h.44a2 2-2v-.18a2 1-1.73l.43-.25a2 0l.15.08a2 2.73-.73l.22-.39a2 0-.73-2.73l-.15-.08a2 1-1-1.74v-.5a2 1-1.74l.15-.09a2 .73-2.73l-.22-.38a2 0-2.73-.73l-.15.08a2 0l-.43-.25a2 1-1-1.73V4a2 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}

function FileEditIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 13.5V4a2 2 0 1 2-2h8.5L20 7.5V20a2 1-2 2h-5.5" />
            <polyline points="14 2 8 20" />
            <path d="M10.42 12.61a2.1 2.1 0 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
        </svg>
    );
}

function TrashIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2v2" />
        </svg>
    );
}
