import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { JSX, SVGProps } from "react";

export default function landing() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32  flex justify-center">
                    <div className="container px-4 md:px-6 ">
                        <div className="grid max-w-[1300px] mx-auto items-center gap-4 px-4 sm:px-6 md:gap-10 lg:grid-cols-[400px_1fr]">
                            <div className="flex items-center justify-center rounded-lg overflow-hidden aspect-square">
                                <img
                                    alt="Image"
                                    className="rounded-lg object-cover object-center"
                                    height="400"
                                    src="https://media.istockphoto.com/id/1856956562/photo/group-of-diverse-people-in-unity-wearing-blue-t-shirt-holding-donation-box-and-donated-items.webp?b=1&s=170667a&w=0&k=20&c=gYjDqCJcmLH1Xhk0AlbZV5XY0Z4f4zEsXypd9ltz-Ew="
                                    style={{
                                        aspectRatio: "400/400",
                                        objectFit: "cover",
                                    }}
                                    width="400"
                                />
                            </div>
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Our Mission
                                </div>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Help us make the world a better place
                                </h1>
                                <div className="space-y-4">
                                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        We are committed to making a difference
                                        in the world. Your donation will help us
                                        provide food, shelter, and education to
                                        those in need.
                                    </p>
                                    <Link href={"/listProduct"}>
                                        <Button className=" w-full mt-2 p-6 text-lg">
                                            Donate any product
                                        </Button>
                                    </Link>

                                    <form className="grid grid-cols-4 gap-2 min-[400px]:flex-row w-full hidden">
                                        <Input
                                            className="max-w-md col-span-2"
                                            placeholder="Enter your email to stay informed"
                                            type="email"
                                        />
                                        <button
                                            type="submit"
                                            className="border rounded-md p-1 grid-cols-2"
                                        >
                                            Sign up for newsletter
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 border-t  flex justify-center">
                    <div className="container px-4 md:px-6 ">
                        <div className="grid max-w-5xl mx-auto items-center gap-10 lg:grid-cols-2 lg:gap-16 ">
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Impact
                                </div>
                                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    Your donation can change lives
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400">
                                    With your support, we can make a real
                                    difference in the lives of those who need it
                                    most.
                                </p>
                            </div>
                            <ul className="grid gap-6 md:grid-cols-2">
                                <li>
                                    <div className="grid gap-1">
                                        <h3 className="text-xl font-bold">
                                            Meals Provided
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Your donation can help provide
                                            nutritious meals to families in
                                            need.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="grid gap-1">
                                        <h3 className="text-xl font-bold">
                                            Shelter Provided
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Your support can help provide safe
                                            and secure shelter for those without
                                            homes.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="grid gap-1">
                                        <h3 className="text-xl font-bold">
                                            Education Supported
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Your generosity can help support
                                            education programs for children
                                            around the world.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="grid gap-1">
                                        <h3 className="text-xl font-bold">
                                            Tchnical support
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Your donation can help provide
                                            access to essential technical
                                            services for those in need.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 border-t  flex justify-center">
                    <div className="container px-4 md:px-6">
                        <div className="grid max-w-5xl mx-auto items-center gap-10 lg:grid-cols-2 lg:gap-16">
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Testimonials
                                </div>
                                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    Making a difference in the world
                                </h2>
                            </div>
                            <div className="space-y-4">
                                <div className="grid gap-2">
                                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                        Story
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        "The support we received from the
                                        community has been incredible. Thanks to
                                        your donations, we've been able to make
                                        a real difference in the lives of those
                                        in need."
                                    </p>
                                </div>
                                <div className="grid gap-2">
                                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                        Story
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        "Your generosity has helped us provide
                                        essential services to those who need it
                                        most. We are grateful for your support
                                        and will continue to work hard to make
                                        the world a better place."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 border-t  flex justify-center">
                    <div className="container px-4 md:px-6">
                        <div className="grid max-w-5xl mx-auto items-center gap-10 lg:grid-cols-2 lg:gap-16">
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Products
                                </div>
                                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    Items needed for donation
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Your donations can help provide essential
                                    items to those in need. Here are the
                                    products we are currently accepting for
                                    donation:
                                </p>
                            </div>
                            <ul className="grid gap-4 md:gap-6">
                                <li>
                                    <div className="grid gap-1">
                                        <h3 className="text-xl font-bold">
                                            Clothing
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            New or gently used clothing for men,
                                            women, and children.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="grid gap-1">
                                        <h3 className="text-xl font-bold">
                                            Food
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Non-perishable food items such as
                                            canned goods, pasta, rice, and more.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="grid gap-1">
                                        <h3 className="text-xl font-bold">
                                            Toiletries
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Hygiene products including soap,
                                            shampoo, toothpaste, and toilet
                                            paper.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="grid gap-1">
                                        <h3 className="text-xl font-bold">
                                            School Supplies
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Notebooks, pencils, pens, and other
                                            school supplies for children.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 border-t  flex justify-center">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Meet our Customers
                            </h2>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Trusted by the best NGOs in the world.
                            </p>
                        </div>
                        <div className="divide-y rounded-lg border">
                            <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
                                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                                    <img
                                        alt="Logo"
                                        className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                                        height="70"
                                        src="https://th.bing.com/th/id/R.c8bf7c087ca9793d094042845707ffac?rik=fjZN1AYH30vXIw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fgoogle%2fgoogle_PNG19635.png&ehk=ZmsumEtoeJQhKoUzQTZO2TEbYPBu0%2b7EFdjmJ3qljls%3d&risl=&pid=ImgRaw&r=0"
                                        width="140"
                                    />
                                </div>
                                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

function MountainIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
    return <h1>CareCraft</h1>;
}
