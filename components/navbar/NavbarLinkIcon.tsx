import Link from "next/link";

export default function NavbarLinkIcon({ href, imgSrc, name} : { href: string, imgSrc: string; name: string }) {
    return(
        <Link href={href} target={"_blank"} rel="noopener noreferrer">
            <a target={"_blank"} className="flex flex-col items-center justify-center hover:scale-110 transition-all ">
                <img
                    src={imgSrc}
                    alt={name}
                    className="h-8 w-8 rounded-md my-1 mx-1"
                />
                <div className="text-sm">
                    {name}
                </div>
            </a>
        </Link>
    )
}