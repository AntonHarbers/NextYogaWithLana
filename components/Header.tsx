import Link from "next/link"
import { motion } from 'framer-motion'
import { useState } from 'react'
import NavbarItem from "./navbar/NavbarItem"


function Header() {

    const [active, setActive] = useState("empty");
    const [activeTab, setActiveTab] = useState("empty");

    const changeActiveTab = (name: string) => {
        setActiveTab(name);
    }

    const changeActive = (name: string) => {
        console.log(name)
        switch (name) {
            case "Yoga":
                if (active == "Yoga") {
                    setActive("empty")
                    console.log("work")
                } else {
                    setActive(name)
                    console.log("work")
                }
                break;
            case "Reiki":
                if (active == "Reiki") {
                    setActive("empty")
                } else {
                    setActive(name)
                }
                break;
            case "More":
                if (active == "More") {
                    setActive("empty")
                } else {
                    setActive(name)
                }
                break;
            default:
                setActive("empty")
                break;
        }
    }

    return (
        <div className="flex flex-col justify-center xl:flex-row w-full h-auto bg-primary">
            <div className=" h-36 w-36 mx-auto xl:mx-5 my-5">
                <Link href={"/"}>
                    <motion.img
                        initial={{ marginLeft: 300, opacity: 0 }}
                        animate={{ marginLeft: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 2 }}
                        onClick={() => {
                            changeActive("empty")
                            changeActiveTab("Home")
                        }}
                        className="cursor-pointer select-none" src="/Logo.png" alt="Yoga" width={200} height={200} />
                </Link>
            </div>
            <div className=" flex flex-col lg:flex-row mx-auto items-center mb-10 xl:mr-10 xl:my-10" >
                <div className="flex">
                    <NavbarItem
                        active={active}
                        changeActive={changeActive}
                        changeActiveTab={changeActiveTab}
                        activetab={activeTab}
                        name={"Home"}
                        link={"/"}
                        array={[]} />
                    <NavbarItem
                        active={active}
                        changeActive={changeActive}
                        changeActiveTab={changeActiveTab}
                        activetab={activeTab}
                        name={"Yoga"}
                        link={"/yoga"}
                        array={[]} />
                    <NavbarItem
                        active={active}
                        changeActive={changeActive}
                        changeActiveTab={changeActiveTab}
                        activetab={activeTab}
                        name={"Gallery"}
                        link={"/gallery"}
                        array={[
                        ]} />
                    <NavbarItem
                        active={active}
                        changeActive={changeActive}
                        changeActiveTab={changeActiveTab}
                        activetab={activeTab}
                        name={"Reiki"}
                        link={"/reiki"}
                        array={[
                        ]} />
                </div>
                <div className="flex mt-10 lg:mt-0 lg:mb-0">
                    <NavbarItem
                        active={active}
                        changeActive={changeActive}
                        changeActiveTab={changeActiveTab}
                        activetab={activeTab}
                        name={"Guidance"}
                        link={"/guidance"}
                        array={[]} />
                    <NavbarItem
                        active={active}
                        changeActive={changeActive}
                        changeActiveTab={changeActiveTab}
                        activetab={activeTab}
                        name={"Recipes"}
                        link={"/recipes"}
                        array={[
                        ]} />
                    <NavbarItem
                        active={active}
                        changeActive={changeActive}
                        changeActiveTab={changeActiveTab}
                        activetab={activeTab}
                        name={"About"}
                        link={"/about"}
                        array={[
                        ]} />
                </div>

            </div>
        </div>
    )
}
export default Header