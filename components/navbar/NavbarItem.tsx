import Link from "next/link"
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

export default function NavbarItem(props: any) {

    const router = useRouter()

    return (
        <div className="justify-center">
            <Link href={props.link}>
                {router.pathname == props.link ? (
                    <a className=" select-none mx-0 md:mx-5 px-4 py-2 text-md text-secondary border-secondary font-medium cursor-pointer border-b-2 border-transparent hover:border-secondary transition duration-500 ease-in-out focus:outline-none"
                        onClick={() => {
                            props.changeActiveTab(props.name)
                            props.changeActive("empty")
                        }}>
                        {props.name}
                    </a>
                ) : (
                    <a className=" select-none mx-0 md:mx-5 px-4 py-2 text-md font-medium text-text cursor-pointer border-b-2 border-transparent hover:border-secondary transition duration-500 ease-in-out focus:outline-none"
                        onClick={() => {
                            props.changeActiveTab(props.name)
                            props.changeActive("empty")
                        }}>
                        {props.name}
                    </a>
                )}
            </Link>
        </div>
    )
}

