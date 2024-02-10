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

export function comp1() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Donation List</CardTitle>
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
                        <Select defaultValue="clothing" id="category">
                            <option value="clothing">Clothing</option>
                            <option value="electronics">Electronics</option>
                            <option value="books">Books</option>
                            <option value="toys">Toys</option>
                        </Select>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button>Submit</Button>
            </CardFooter>
        </Card>
    );
}
