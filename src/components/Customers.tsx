import Image from "next/image";

const customers = [
    {
        name: "google-play",
        src: "/images/customers/google-play.png",
        alt: "Google play logo",
    },
    {
        name: "github",
        src: "/images/customers/github.png",
        alt: "Github logo",
    },
    {
        name: "docker",
        src: "/images/customers/docker.png",
        alt: "Docker logo",
    },
    {
        name: "python",
        src: "/images/customers/python.png",
        alt: "Python logo",
    },
    {
        name: "slack",
        src: "/images/customers/slack.png",
        alt: "Slack logo",
    },
    {
        name: "discord",
        src: "/images/customers/discord.png",
        alt: "Discord logo",
    }
];

export default function Customers() {
    return (
        <div className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16" id="faq">
            <h2 className="text-4xl font-bold text-center">
                Happy Customers
            </h2>

            <p className="pt-6 pb-8 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
            Join our community of "Happy Customers" and experience top-notch service.
            </p>
            <div className="mx-auto w-full max-w-4xl bg-white dark:bg-transparent">
                <div className="text-center justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
                    {customers.map((item) => (
                        <div key={item.name}>
                            <Image
                                className="h-64 w-auto mt-6 justify-center text-center mx-auto hover:scale-110 transition"
                                src={item.src}
                                alt={item.alt}
                                width={200}
                                height={200}
                                quality={100} // Increased quality value for clearer images
                                sizes="100vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
