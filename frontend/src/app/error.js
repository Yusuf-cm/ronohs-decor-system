"use client";
export default function PageError({ reset }) {
 return <section className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-[#f6f3eb] text-[#29342b]"><p className="text-xs tracking-widest mb-5">RONOH’S DECOR</p><h1 className="text-3xl font-serif">We couldn’t load this page.</h1><p className="max-w-md mt-4 text-gray-600">The service may be temporarily unavailable. Try again, or contact us for help with your order.</p><button onClick={reset} className="mt-6 px-6 py-3 bg-[#344434] text-white">Try again</button><a href="/contact" className="mt-5 underline">Contact the team</a></section>;
}
