export default function HomeLoader() {
    return (
        <div className="bg-[#2A2D3A] flex items-center justify-center h-screen">
            <div className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full">
                <div className="rounded-full h-full w-full bg-[#2A2D3A] background-blur-md"></div>
            </div>
        </div>
    );
}
