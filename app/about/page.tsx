import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
export default function Component() {
    return (
        <>
            <section className="w-full py-12 md:py-24 lg:py-32  flex justify-center">
                <div className="container px-4 md:px-6 grid grid-cols-2 gap-6 w-full">
                    <div className="space-y-6 ">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                About Us
                            </div>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                                Welcome to CareCraft!
                            </h1>
                        </div>
                        <div className="max-w-3xl space-y-4 text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                            <p className="leading-loose">
                                At our NGO, our mission is to empower every
                                person we serve to lead a better life by
                                fostering holistic development, addressing
                                fundamental needs, and creating opportunities
                                for individuals to thrive. We believe that true
                                empowerment encompasses more than just meeting
                                basic requirements; it involves nurturing
                                individuals in all aspects of their lives to
                                unlock their full potential and lead fulfilling,
                                dignified lives.
                            </p>
                            <p>
                                We are dedicated to addressing fundamental
                                needs, such as access to nutritious food, clean
                                water, and essential healthcare. By meeting
                                these basic requirements, we lay the foundation
                                for individuals to thrive and pursue their
                                aspirations.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img
                            className="bg-red-200 w-full max-h-full aspect-square object-cover rounded-lg"
                            src="https://images.pexels.com/photos/6646881/pexels-photo-6646881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                    </div>
                </div>
            </section>
            <div className="w-full py-12 lg:py-16 flex justify-center">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 xl:gap-24">
                        <div className="flex flex-col gap-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    About Our Mission
                                </h1>
                                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                                    At our NGO, our mission is to empower every
                                    person we serve to lead a better life by
                                    fostering holistic development, addressing
                                    fundamental needs, and creating
                                    opportunities for individuals to thrive. We
                                    believe that true empowerment encompasses
                                    more than just meeting basic requirements;
                                    it involves nurturing individuals in all
                                    aspects of their lives to unlock their full
                                    potential and lead fulfilling, dignified
                                    lives.
                                </p>
                                <p>
                                    We are dedicated to addressing fundamental
                                    needs, such as access to nutritious food,
                                    clean water, and essential healthcare. By
                                    meeting these basic requirements, we lay the
                                    foundation for individuals to thrive and
                                    pursue their aspirations.
                                </p>
                            </div>
                            <Card>
                                <CardHeader>
                                    <div>
                                        <UsersIcon className="h-6 w-6" />
                                    </div>
                                    <div>Our Community</div>
                                    <div>
                                        Join our community of developers,
                                        creators, and innovators.
                                    </div>
                                </CardHeader>
                                <CardContent className="grid gap-4">
                                    <p className="text-sm">
                                        Access resources, participate in
                                        discussions, and connect with fellow
                                        community members.
                                    </p>
                                    <Button size="sm">
                                        Join the Community
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">
                                    Our Story
                                </h2>
                                <p className="max-w-prose text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                                    Founded in 2024, Our organization traces its
                                    roots back to a humble beginning, emerging
                                    from a tight-knit team of passionate
                                    individuals united by a singular vision: to
                                    develop a platform that illuminates the
                                    needs of marginalized communities. Our aim
                                    is to facilitate direct donations to NGOs
                                    through our website, thereby bridging the
                                    gap between those willing to contribute and
                                    the underprivileged individuals in need.
                                    With unwavering dedication, we endeavor to
                                    empower donors to make meaningful impacts,
                                    ensuring that resources reach those who need
                                    them most efficiently and effectively. This
                                    journey embodies our commitment to fostering
                                    positive change and enhancing the lives of
                                    vulnerable populations worldwide.
                                </p>
                            </div>
                            <div className="grid gap-4">
                                <div className="flex items-center gap-4">
                                    {/* <img
                                        alt="Team"
                                        className="rounded-full overflow-hidden object-cover object-center"
                                        height="100"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "100/100",
                                            objectFit: "cover",
                                        }}
                                        width="100"
                                    /> */}
                                    <div className="space-y-1">
                                        <h3 className="text-xl font-semibold tracking-tighter">
                                            Pranav Rajeevan
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Co-Founder & CEO
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    {/* <img
                                        alt="Team"
                                        className="rounded-full overflow-hidden object-cover object-center"
                                        height="100"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "100/100",
                                            objectFit: "cover",
                                        }}
                                        width="100"
                                    /> */}
                                    <div className="space-y-1">
                                        <h3 className="text-xl font-semibold tracking-tighter">
                                            Samarth Patil
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Co-Founder & CTO
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// export default function Component() {
//   return (

//   )
// }

function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}
