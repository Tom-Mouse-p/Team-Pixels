import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Component() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="mx-auto max-w-sm space-y-6">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Sign Up</h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Enter your information to create an account
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Jane Doe" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            placeholder="m@example.com"
                            required
                            type="email"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" required type="password" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="dob">Date of birth</Label>
                        <Input id="dob" required type="date" />
                    </div>
                    <div className="space-y-2">
                        <Checkbox id="terms" />
                        <Label className="ml-2 leading-none" htmlFor="terms">
                            I agree to the
                            <Link className="underline" href="#">
                                terms and conditions
                            </Link>
                        </Label>
                    </div>
                    <div className="space-y-2">
                        <Checkbox id="subscribe" />
                        <Label
                            className="ml-2 leading-none"
                            htmlFor="subscribe"
                        >
                            Subscribe to newsletter
                        </Label>
                    </div>
                    <Button className="w-full">Sign Up</Button>
                </div>
            </div>
        </div>
    );
}
