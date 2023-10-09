import Link from "next/link";

export default function Prefooter() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-20 pb-10">
        <h1 className="text-4xl font-bold text-center">
          Instant Assistance, Anytime, Anywhere
        </h1>
      </div>

      <div className="text-center pb-20">
        <Link href="https://whatsform.com/BKwfbM" target="_blank">
          <button className="whatsapp-button rounded-full px-6 p-3 font-medium">
            Contact Us on WhatsApp
          </button>
        </Link>
      </div>
      
      <style jsx>{`
        .whatsapp-button {
          background-color: #25d366; /* WhatsApp green color */
          color: #ffffff; /* White text color */
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }

        .whatsapp-button:hover {
          background-color: #128c7e; /* Darker shade of green on hover */
        }
      `}</style>
    </div>
  );
}

