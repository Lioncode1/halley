import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";

const contents = [
  {
    title: "Diverse Channel Selection",
    description:
      "Delve into a captivating world of entertainment with our diverse channel selection. We pride ourselves on offering a wide array of international channels that traverse languages and cultures, ensuring that there's always something intriguing to explore. Whether you're seeking global news, regional gems, or specialized content, our extensive channel lineup guarantees a rich and immersive viewing experience.",
    features: [
      "Explore global channels with diverse content.",
      "Discover captivating international shows.",
      "Multicultural viewing at your fingertips.",
    ],
    image: "/images/features/dashboard.png",
    order: false,
  },
  {
    title: "Extensive Movie Library",
    description:
      "Embark on a cinematic journey like never before with our vast movie library. From thrilling action blockbusters to heartwarming classics and intellectually stimulating dramas, our collection caters to a spectrum of cinematic preferences. Our user-friendly interface simplifies the process of selecting and enjoying movies, making it effortless to plan memorable movie nights in the comfort of your home.",
    features: [
      "Cinematic paradise with all genres",
      "Blockbusters to classics for movie nights",
      "Effortless home entertainment choices",
    ],
    image: "/images/features/product.png",
    order: true,
  },
  {
    title: "Real-Time Sports Action",
    description:
      "For avid sports aficionados, Top IPTV Service brings the thrill of live sports action with minimal delay. Our comprehensive sports coverage encompasses global tournaments, league matches, and even niche sporting events. To elevate your sports-watching experience, we provide insightful post-game analysis, expert commentary, and exhilarating highlights. With us, you're guaranteed to savor every pulse-pounding moment of the game.",
    features: [
      "Live sports with minimal delay",
      "Global tournaments and niche sports",
      "Expert insights for thrilling viewing",
    ],
    image: "/images/features/inventory.png",
    order: false,
  },
];

export function Features() {
  return (
    <div className="bg-white dark:bg-neutral-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-16 pb-16">
        <h2 className="text-4xl font-bold text-center">Features</h2>
        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          Halley nunc pulvinar lobortis duis. Leo mollis neque ullamcorper
          aliquam sem nullam, elementum vestibulum augue placerat.
        </p>

        {contents.map((content) => (
          <div
            key={content.title}
            className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-28 items-center"
          >
            <div
              className={`pt-8 md:pt-16 ${
                content.order ? "order-1 md:order-2" : "order-1"
              }`}
            >
              <h1 className="text-2xl font-bold">{content.title}</h1>
              <p className="pt-6 pb-6 text-base dark:text-neutral-400">
                {content.description}
              </p>

              <ul className="font-medium space-y-1 flex-1">
                {content.features.map((feature) => (
                  <li key={feature} className="leading-6 flex">
                    <CheckIcon className="mt-2 w-3 h-3 text-rose-500 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`order-1 pt-8 md:pt-16 ${
                content.order ? "ml-0 2xl:-ml-40" : "mr-0 2xl:-mr-40"
              }`}
            >
              <div className="flex items-center">
                <Image
                  src={content.image}
                  alt="Image description"
                  width={1920}
                  height={1080}
                  quality={75}
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
