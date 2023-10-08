import Image from "next/image";

const services = [
  {
    title: "Live TV Channels",
    description:
      "Dive into a world of diverse channels, including live sports, premium movies, international news, and entertainment. Experience global content like never before.",
    image: "/images/services/1.svg",
    alt: "Service description",
  },
  {
    title: "High-Quality 4K Streaming",
    description:
      "Indulge in mesmerizing 4K clarity. Our IPTV service brings you ultra-high-definition streaming, ensuring your favorite shows, movies, and sports dazzle with vivid detail and vibrant colors.",
    image: "/images/services/2.svg",
    alt: "Service description",
  },
  {
    title: "Multi-Device Compatibility",
    description:
      "Stream your favorites anywhere, anytime, on any device. Our IPTV service works with smart TVs, streaming boxes, phones, and more, making access effortless at home or on the go.",
    image: "/images/services/3.svg",
    alt: "Service description",
  },
  {
    title: "Regular Content Updates",
    description:
      "We keep you current with the latest shows, movies, and live events. Our IPTV service guarantees regular content updates, so you're always in the know. Explore new releases, binge-watch your favorites, and never miss the hottest programs.",
    image: "/images/services/4.svg",
    alt: "Service description",
  },
  {
    title: "Exceptional Customer Support",
    description:
      "We prioritize our customers and provide top-notch support. Our friendly, knowledgeable team is ready to assist with any questions, technical matters, or account issues. Count on us to ensure your IPTV experience is seamless and enjoyable.",
    image: "/images/services/5.svg",
    alt: "Service description",
  },
  {
    title: "Privacy And Security",
    description:
      "We take your privacy and security seriously. Our IPTV service is dedicated to safeguarding your data and viewing habits with robust security measures. Enjoy encrypted connections and secure payment gateways, ensuring your information stays protected and giving you peace of mind.",
    image: "/images/services/6.svg",
    alt: "Service description",
  },
];
export function Services() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">What is TOP IPTV?</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        Top IPTV, or Internet Protocol Television, is a cutting-edge digital television service that offers an extensive range of TV channels and content via internet networks.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {services.map(({ title, description, image, alt }) => (
          <div key={title}>
            <div className="h-32 w-32 flex justify-center mx-auto">
              <Image
                src={image}
                alt={alt}
                width={130}
                height={130}
                quality={75}
                sizes="100vw"
                priority
              />
            </div>
            <h2 className="font-bold text-lg text-center">{title}</h2>
            <p className="pt-2 text-base text-center dark:text-neutral-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
