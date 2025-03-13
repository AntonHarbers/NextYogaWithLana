import Link from "next/link";
import { motion } from "framer-motion";
import NavbarItem from "./navbar/NavbarItem";
import NavbarLinkIcon from "./navbar/NavbarLinkIcon";

function Header() {

  const firstRow: string[][] = [["Home", "/"], ["Coaching", "/guidance"], ["Fitness", "/fitness"], ["Yoga", "/yoga"]]
  const secondRow: string[][] = [["Health", "/reiki"], ["Recipes", "/recipes"], ["Gallery", "/gallery"], ["About", "/about"]]

  return (
    <div className="flex flex-col justify-center xl:flex-row w-full h-auto bg-primary">
      <div className=" h-36 w-auto xl:w-36 mx-auto xl:mx-5 mt-5 flex flex-row">
        <Link href={"/"}>
          <motion.img
            initial={{ marginLeft: 300, opacity: 0 }}
            animate={{ marginLeft: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 2 }}
            className="cursor-pointer select-none h-[130px] w-[130px] "
            src="/Logo.png"
            alt="Yoga"
            width={130}
            height={100}
          />
        </Link>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 2 }}
          className="flex flex-row justify-center gap-2 items-center mb-5 xl:mb-0 "
        >
          <NavbarLinkIcon href={"https://www.instagram.com/lana_harbers/"} imgSrc={"https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-square2-512.png"} name={"Instagram"} />
          <NavbarLinkIcon href={"https://www.youtube.com/@lanaharbers"} imgSrc={"https://seeklogo.com/images/Y/youtube-square-logo-3F9D037665-seeklogo.com.png"} name={'Youtube'} />
        </motion.div>
      </div>

      <div className=" flex flex-col lg:flex-row mx-auto items-center mb-4 xl:mb-0 xl:mr-10 ">
        <div className="flex">
          {firstRow.map(([name, link]: string[]) => {
            return (
              <NavbarItem key={name} name={name} link={link} />
            )
          })}
        </div>
        <div className="flex mt-6 lg:mt-0 lg:mb-0">
          {secondRow.map(([name, link]: string[]) => {
            return (
              <NavbarItem key={name} name={name} link={link} />
            )
          })}
        </div>
      </div>
    </div>
  );
}
export default Header;
