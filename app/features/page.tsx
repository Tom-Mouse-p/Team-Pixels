import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    Card,
} from "@/components/ui/card";

export default function Component() {
    return (
        <>
            <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-6">
                        <div className="space-y-2 mx-auto max-w-[700px]">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                Platform Features
                            </div>
                            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                                The Modern Way to Make an Impact
                            </h2>
                            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Empower your cause with our platform's advanced
                                features. From seamless communication to
                                insightful analytics, we've got you covered.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                        <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle>Verification System</CardTitle>
                                <CardDescription>
                                    Detailed explanation of the document
                                    verification process ensuring NGO and user
                                    legitimacy.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 grid gap-4">
                                <div className="flex items-center gap-4">
                                    {/* <img
                                        alt="Image"
                                        className="rounded-lg"
                                        height="100"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "100/100",
                                            objectFit: "cover",
                                        }}
                                        width="100"
                                    /> */}
                                    <span className="material-symbols-outlined">
                                        domain_verification
                                    </span>
                                    <div className="prose">
                                        <h3 className="font-semibold">
                                            Secure Document Upload
                                        </h3>
                                        <p>
                                            Users can securely upload their
                                            documents through our encrypted
                                            system, ensuring that their personal
                                            information is safe and only
                                            accessible to authorized personnel.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    {/* <img
                                        alt="Image"
                                        className="rounded-lg"
                                        height="100"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "100/100",
                                            objectFit: "cover",
                                        }}
                                        width="100"
                                    /> */}
                                    <span className="material-symbols-outlined">
                                        workspace_premium
                                    </span>
                                    <div className="prose">
                                        <h3 className="font-semibold">
                                            NGO Verification Process
                                        </h3>
                                        <p>
                                            Our team carefully verifies the
                                            documents submitted by NGOs to
                                            confirm their legitimacy. We follow
                                            a rigorous process to ensure that
                                            only genuine organizations are
                                            approved to receive donations.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle>Messaging System</CardTitle>
                                <CardDescription>
                                    Elaborate on the functionality of the
                                    integrated messaging system enabling
                                    real-time communication among users, NGOs,
                                    and agents.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 grid gap-4">
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined">
                                        mail
                                    </span>
                                    {/* <img
                                        alt="Image"
                                        className="rounded-lg"
                                        height="100"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "100/100",
                                            objectFit: "cover",
                                        }}
                                        width="100"
                                    /> */}
                                    <div className="prose">
                                        <h3 className="font-semibold">
                                            Real-time Communication
                                        </h3>
                                        <p>
                                            Our messaging system allows users,
                                            NGOs, and agents to communicate in
                                            real time, facilitating quick
                                            responses and seamless interaction.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined">
                                        lock
                                    </span>
                                    {/* <img
                                        alt="Image"
                                        className="rounded-lg"
                                        height="100"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "100/100",
                                            objectFit: "cover",
                                        }}
                                        width="100"
                                    /> */}
                                    <div className="prose">
                                        <h3 className="font-semibold">
                                            Privacy and Security
                                        </h3>
                                        <p>
                                            We prioritize user privacy and data
                                            security. Messages are encrypted,
                                            and users have control over their
                                            communication preferences.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle>User Ratings and Reviews</CardTitle>
                                <CardDescription>
                                    Showcase the user-friendly interface for
                                    rating and reviewing NGOs and agents.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 grid gap-4">
                                <div className="flex items-center gap-4">
                                    {/* <img
                                        alt="Image"
                                        className="rounded-lg"
                                        height="100"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "100/100",
                                            objectFit: "cover",
                                        }}
                                        width="100"
                                    /> */}
                                    <span className="material-symbols-outlined">
                                        thumb_up
                                    </span>
                                    <div className="prose">
                                        <h3 className="font-semibold">
                                            Seamless Rating System
                                        </h3>
                                        <p>
                                            Users can easily rate NGOs and
                                            agents based on their experiences,
                                            providing valuable feedback to the
                                            community.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    {/* <img
                                        alt="Image"
                                        className="rounded-lg"
                                        height="100"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "100/100",
                                            objectFit: "cover",
                                        }}
                                        width="100"
                                    /> */}
                                    <span className="material-symbols-outlined">
                                        reviews
                                    </span>
                                    <div className="prose">
                                        <h3 className="font-semibold">
                                            Moderated Reviews
                                        </h3>
                                        <p>
                                            Our platform features a robust
                                            review moderation system to ensure
                                            that all ratings and reviews are
                                            authentic and constructive.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle>Analytics Dashboard</CardTitle>
                                <CardDescription>
                                    Visual representation of the analytics
                                    dashboard displaying donation history and
                                    impact metrics through graphs and charts.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 grid gap-4">
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined">
                                        dashboard_customize
                                    </span>
                                    {/* <img
                                        alt="Image"
                                        className="rounded-lg"
                                        height="100"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "100/100",
                                            objectFit: "cover",
                                        }}
                                        width="100"
                                    /> */}
                                    <div className="prose">
                                        <h3 className="font-semibold">
                                            Customizable Analytics
                                        </h3>
                                        <p>
                                            Users and NGOs can customize their
                                            analytics view, choosing the metrics
                                            and time frames that matter most to
                                            them.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    {/* <img
                                        alt="Image"
                                        className="rounded-lg"
                                        height="100"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "100/100",
                                            objectFit: "cover",
                                        }}
                                        width="100"
                                    /> */}
                                    <span className="material-symbols-outlined">
                                        bar_chart_4_bars
                                    </span>
                                    <div className="prose">
                                        <h3 className="font-semibold">
                                            Impact Visualization
                                        </h3>
                                        <p>
                                            Our dashboard provides clear
                                            visualizations of the impact of
                                            donations, allowing users to see the
                                            difference they're making.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle>
                                    Integration with Social Media
                                </CardTitle>
                                <CardDescription>
                                    Explain the seamless sharing functionality
                                    for donation activities on various social
                                    media platforms.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 grid gap-4">
                                <div className="flex items-center gap-4">
                                    {/* <img
                                        alt="Image"
                                        className="rounded-lg"
                                        height="100"
                                        src="/placeholder.svg"
                                        style={{
                                            aspectRatio: "100/100",
                                            objectFit: "cover",
                                        }}
                                        width="100"
                                    /> */}
                                    <span className="material-symbols-outlined">
                                        share
                                    </span>
                                    <div className="prose">
                                        <h3 className="font-semibold">
                                            One-click Sharing
                                        </h3>
                                        <p>
                                            Users can share their donation
                                            activities with friends and
                                            followers on social media with a
                                            single click, spreading the word
                                            about their contributions.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
}
