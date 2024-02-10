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
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function comp1() {
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
                        <Input id="name" placeholder="Enter product name" />
                    </div>
                    <div>
                        <Label className="form-label" htmlFor="description">
                            Description
                        </Label>
                        <Textarea
                            className="min-h-[100px]"
                            id="description"
                            placeholder="Enter product description"
                        />
                    </div>
                    <div>
                        <Label className="form-label" htmlFor="quantity">
                            Quantity
                        </Label>
                        <Input
                            id="quantity"
                            placeholder="Enter quantity"
                            type="number"
                        />
                    </div>
                    <div>
                        <Label className="form-label" htmlFor="category">
                            Category
                        </Label>
                        <select
                            defaultValue="clothing"
                            className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300"
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
                <Button>Submit</Button>
            </CardFooter>
        </Card>
    );
}
