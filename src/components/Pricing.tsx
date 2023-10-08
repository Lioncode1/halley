import Link from "next/link";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const products = [
  {
    title: "1 Month Subscription",
    price: 9.99,
    currency: "$",
    frecuency: "month",
    description: "Price: $9.99/month",
    features: [
      "+60,000 TV Channels",
      "+66,000 Movies & Series",
      "4K / Ultra HD Picture Quality",
      "FREE Channels & VOD Updates",
      "99.9% Server Uptime",
      "All Devices are Supported",
      "AntiFreeze Technology",
      "24/7 Technical Assistance",
    ],
    href: "https://whatsform.com/BKwfbM",
    cta: "Buy Hobby",
    mostPopular: false,
  },
  {
    title: "3 Months Subscription",
    price: 27.99,
    currency: "$",
    frecuency: "month",
    description: "Price: $27.99 (Save 10%)",
    features: [
      "+60,000 TV Channels",
      "+66,000 Movies & Series",
      "4K / Ultra HD Picture Quality",
      "FREE Channels & VOD Updates",
      "99.9% Server Uptime",
      "All Devices are Supported",
      "AntiFreeze Technology",
      "24/7 Technical Assistance",
    ],
    href: "https://whatsform.com/BKwfbM",
    cta: "Buy Hobby",
    mostPopular: false,
  },
  {
    title: "6 Months Subscription",
    price: 49.99,
    currency: "$",
    frecuency: "month",
    description: "Price: $49.99 (Save 17%)",
    features: [
      "+60,000 TV Channels",
      "+66,000 Movies & Series",
      "4K / Ultra HD Picture Quality",
      "FREE Channels & VOD Updates",
      "99.9% Server Uptime",
      "All Devices are Supported",
      "AntiFreeze Technology",
      "24/7 Technical Assistance",
    ],
    href: "https://whatsform.com/BKwfbM",
    cta: "Buy Freelancer",
    mostPopular: true,
  },
  {
    title: "12 Months Subscription",
    price: 89.99,
    currency: "$",
    frecuency: "month",
    description: "Price: $89.99 (Save 25%)",
    features: [
      "+60,000 TV Channels",
      "+66,000 Movies & Series",
      "4K / Ultra HD Picture Quality",
      "FREE Channels & VOD Updates",
      "99.9% Server Uptime",
      "All Devices are Supported",
      "AntiFreeze Technology",
      "24/7 Technical Assistance",
    ],
    href: "https://whatsform.com/BKwfbM",
    cta: "Buy Freelancer",
    mostPopular: false,
  },
];

type BillingInterval = "month";

export default function Pricing() {
  const [billingInterval] = useState<BillingInterval>("month");
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-4xl font-bold text-center">Pricing</h2>

        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          Discover the ideal product for your business needs. Choose the option that aligns perfectly with your requirements.
        </p>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 sm:flex sm:flex-col sm:align-center">
        <div className="relative self-center text-base font-semibold mt-6 bg-neutral-200  dark:bg-neutral-800 rounded-lg flex sm:mt-8">
          <button
            onClick={() => {}}
            type="button"
            className={`${
              billingInterval === "month"
                ? "relative w-1/2 bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                : "ml-0.5 relative w-1/2 text-neutral-900 dark:text-neutral-400"
            } rounded-md m-1 py-2 whitespace-nowrap sm:w-auto sm:px-8`}
          >
            Monthly billing
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
        {products.map(
          ({
            title,
            mostPopular,
            description,
            currency,
            price,
            frecuency,
            cta,
            features,
            href,
          }) => {
            return (
              <>
                {billingInterval === frecuency ? (
                  <div
                    key={title}
                    className={`rounded-lg py-8 relative flex flex-col ${
                      mostPopular
                        ? "border-rose-300 border-2 border-solid dark:border-rose-500"
                        : "border-neutral-300 border dark:border-neutral-600"
                    }`}
                  >
                    <h3 className="px-6 text-lg font-semibold leading-5">
                      {title}
                    </h3>
                    {mostPopular && (
                      <p className="mx-6 absolute top-0 px-4 py-1 -translate-y-1/2 bg-rose-100 text-rose-500  rounded-full text-sm font-semibold tracking-wide shadow-md">
                        Most popular
                      </p>
                    )}

                    <p className="px-6 mt-4 leading-6 dark:text-neutral-400">
                      {description}
                    </p>
                    <div className="mt-2 p-6 -mx-6">
                      <p className="px-6 font-medium flex place-items-end">
                        <span className="text-4xl font-bold">{currency}</span>
                        <span className="text-4xl font-bold">{price}</span>
                        <span className="ml-1.5">/{frecuency}</span>
                      </p>
                    </div>

                    {/* Call to action */}
                    <Link
                      href={href}
                      target="_blank"
                      className={`mt-4 mx-6 block px-6 py-3 font-medium leading-4 text-center rounded-lg ${
                        mostPopular
                          ? "bg-rose-500 text-white shadow-md"
                          : "bg-black text-white dark:bg-white dark:text-black"
                      }`}
                    >
                      {cta}
                    </Link>

                    {/* features */}
                    <ul className="mt-6 px-6 space-y-4 flex-1 border-t border-neutral-300 dark:border-neutral-500">
                      <p className="mt-6 font-semibold dark:text-neutral-300">
                        Package Includes
                      </p>
                      {features.map((feature) => (
                        <li key={feature} className="leading-6 flex">
                          <CheckIcon className="mt-2 w-3 h-3 text-rose-500 shrink-0" />
                          <span className="ml-3 dark:text-neutral-400">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </>
            );
          }
        )}
      </div>
    </div>
  );
}
