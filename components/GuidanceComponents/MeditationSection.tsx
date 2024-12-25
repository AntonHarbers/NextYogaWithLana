import {MeditationPost} from "../../typings";
import PortableText from "react-portable-text";
import {AnimatePresence, motion} from "framer-motion";
import {urlFor} from "../../sanity";

export default function MeditationSection(props: {
    meditationPosts: [MeditationPost],
    h1: (props: any) => JSX.Element,
    normal: (props: any) => JSX.Element,
    h2: (props: any) => JSX.Element,
    onClick: () => void
}) {
    return <div
        id="meditation section"
        className=" h-auto bg-secondary flex flex-col"
    >
        <div
            id="headerText"
            className="mx-auto my-20 text-6xl text-center font-Julius"
        >
            {props.meditationPosts[0].header}
        </div>
        <div
            id="content"
            className="flex flex-col-reverse xl:flex-row w-5/6 mx-auto"
        >
            <div
                id="leftSide"
                className=" w-full xl:w-1/2 flex flex-col justify-center mb-10 xl:mb-0"
            >
                <PortableText
                    className="w-full rounded-lg py-10"
                    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                    content={props.meditationPosts[0].body}
                    serializers={{
                        h1: props.h1,
                        normal: props.normal,
                        h2: props.h2,
                    }}
                />
                <button
                    onClick={props.onClick}
                    className=" my-10 text-2xl bg-primary w-[20rem] py-5 px-10 mx-auto rounded-full text-text shadow-xl shadow-gray-600 hover:bg-opacity-80 active:shadow-lg active:bg-opacity-60 active:shadow-gray-500 transition duration-300 ease-in-out "
                >
                    Sign up here
                </button>
            </div>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 2, ease: "easeInOut"}}
                className=" w-full xl:w-1/2 flex justify-end"
            >
                <AnimatePresence>
                    <motion.img
                        animate={{top: [-10, 10, -10]}}
                        transition={{repeat: Infinity, duration: 3}}
                        className=" relative w-auto h-5/6"
                        src={urlFor(props.meditationPosts[0].mainImage).url()!}
                        alt=""
                    />
                </AnimatePresence>
            </motion.div>
        </div>
    </div>;
}