import { DollarSign } from "lucide-react";

export default function PricingLoader() {
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div
                    className="loader border-t-2 rounded-full border-yellow-500 bg-yellow-300 animate-spin
aspect-square w-20 flex justify-center items-center text-yellow-700">
                    <DollarSign size={48} />
                </div>
            </div>
        </>
    );
}
