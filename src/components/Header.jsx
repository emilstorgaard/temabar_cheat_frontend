import Link from "next/link";

export default function Header() {
    return (
<header className="shadow-lg">
    <nav className="bg-customGreen flex justify-center">
        <div>
            <Link href="/" className="flex items-center">
                <img src="../favicon.ico" className="mr-1 h-20" alt="logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-yellow-600 font-extrabold">Temabar Cheat</span>
            </Link>
        </div>
    </nav>
</header>
    );
}