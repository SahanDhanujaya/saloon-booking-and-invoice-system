import Link from "next/link";

const DefaultNavbar = () => {
    return (
        <nav className="flex h-16 w-full items-center justify-between px-3 sm:px-4">
            <ul className="flex gap-4">
                <li><Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link></li>
                <li><Link href="/services" className="text-gray-700 hover:text-blue-500">Services</Link></li>
                <li><Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link></li>
                <li><Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link></li>
            </ul>
            <div className="flex items-center">
                <Link href="/auth/signin" className="text-gray-700 hover:text-white hover:bg-blue-500/40 rounded px-3 py-2 bg-blue-300/40 backdrop-blur-2xl">Sign In</Link>
            </div>
        </nav>
    );
};

export default DefaultNavbar;