import Link from "next/link"
import { motion, AnimatePresence } from 'framer-motion'
import {useRouter} from 'next/router'

export default function NavbarItem(props: any) {

    const router = useRouter()

    return (
        <div className="justify-center">
            {props.array[1] == undefined ?
                (
                    <Link href={props.link}>
                        {router.pathname == props.link ? (
                            <a className="mx-0 md:mx-5 px-4 py-2 text-md text-secondary border-secondary font-medium cursor-pointer border-b-2 border-transparent hover:border-secondary transition duration-500 ease-in-out focus:outline-none" 
                            onClick={() => {
                                props.changeActiveTab(props.name)
                                props.changeActive("empty")}}>
                                {props.name}
                            </a>
                        ) : (
                            <a className="mx-0 md:mx-5 px-4 py-2 text-md font-medium text-text cursor-pointer border-b-2 border-transparent hover:border-secondary transition duration-500 ease-in-out focus:outline-none" 
                            onClick={() => {
                                props.changeActiveTab(props.name)
                                props.changeActive("empty")}}>
                                {props.name}
                            </a>
                        )}
                    </Link>
                )
                :
                props.activetab == props.name ?
                    (
                        <a onClick={() => {
                            props.changeActive(props.name)
                        }} className="mx-0 md:mx-5 px-4 py-2 text-md font-medium text-secondary cursor-pointer border-b-2 border-transparent hover:border-secondary transition duration-500 ease-in-out focus:outline-none">
                            {props.name} 
                        </a>
                    ) : (
                        <a onClick={() => {
                            props.changeActive(props.name)
                        }} className="mx-0 md:mx-5 px-4 py-2 text-md font-medium text-text cursor-pointer border-b-2 border-transparent hover:border-secondary transition duration-500 ease-in-out focus:outline-none">
                            {props.name} 
                        </a>
                    )
            }
            <AnimatePresence>
                {props.active == props.name && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{
                            duration: 2,
                            type: 'spring',
                            stiffness: 100,
                            damping: 30
                        }}
                        className="absolute top-[20rem] xl:top-28 w-[7rem] xl:w-[7rem] text-right flex flex-col">
                        {props.array.map((item: any, index: number) => (
                            <button key={index} onClick={() => { props.changeActive(props.link); props.changeActiveTab(props.name) }} className=" py-1 hover:bg-secondary transition duration-500 ease-in-out">
                                <Link href={item.link}>
                                    <a>{item.name}</a>
                                </Link>
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

