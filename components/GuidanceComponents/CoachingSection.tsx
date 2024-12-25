import {CoachingPost} from "../../typings";
import {motion} from "framer-motion";
import PortableText from "react-portable-text";
import {urlFor} from "../../sanity";

export default function CoachingSection(props: {
    coachingPosts: [CoachingPost],
    h1: (props: any) => JSX.Element,
    normal: (props: any) => JSX.Element,
    h2: (props: any) => JSX.Element,
    normal1: (props: any) => JSX.Element,
    h: (props: any) => JSX.Element,
    onClick: () => void,
    normal2: (props: any) => JSX.Element,
    h3: (props: any) => JSX.Element,
    normal3: (props: any) => JSX.Element,
    h4: (props: any) => JSX.Element
}) {
    return <div id="coaching section" className=" h-auto flex flex-col">
        <motion.div
            id="titletext"
            className=" text-center xl:text-start mx-auto w-5/6 text-4xl 2xl:text-5xl mb-10 font-Julius mt-20"
            initial={{opacity: 0, x: -1000}}
            animate={{opacity: 1, x: 0}}
            transition={{ease: "easeInOut", duration: 2}}
        >
            {props.coachingPosts[0].title}
        </motion.div>
        <motion.div
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 1, ease: "easeInOut", duration: 2}}
            id="headerText"
            className=""
        >
            <PortableText
                className="flex flex-col text-center mx-auto w-5/6 my-10 text-4xl xl:text-6xl text-greens font-Corinthia"
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                content={props.coachingPosts[0].headerText}
                serializers={{
                    h1: props.h1,
                    normal: props.normal,
                    h2: props.h2,
                }}
            />
        </motion.div>
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1, duration: 2, ease: "easeInOut"}}
            id="bodyContent"
            className="flex flex-col-reverse xl:flex-row w-5/6 justify-between mx-auto my-10"
        >
            <PortableText
                className="my-auto w-full xl:w-3/4"
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                content={props.coachingPosts[0].body}
                serializers={{
                    h1: props.h1,
                    normal: props.normal1,
                    h2: props.h,
                }}
            />
            <motion.img
                initial={{opacity: 0, x: 1000}}
                animate={{opacity: 1, x: 0}}
                transition={{ease: "easeInOut", duration: 2}}
                className=" mb-10 xl:mb-0 mx-auto xl:mx-0 h-[20rem] xl:h-[27rem] w-auto border-r-4 border-t-4 border-greens border-opacity-50 rounded-sm"
                src={urlFor(props.coachingPosts[0].mainImage).url()!}
                alt=""
            />
        </motion.div>
        <button
            onClick={props.onClick}
            className=" my-10 text-2xl bg-greens w-[20rem] py-5 px-10 mx-auto rounded-full text-white shadow-xl shadow-gray-600 hover:bg-opacity-80 active:shadow-lg active:bg-opacity-60 active:shadow-gray-500 transition duration-300 ease-in-out "
        >
            Sign up here
        </button>
        <div
            id="bottomContenct"
            className="flex flex-col-reverse xl:flex-row w-5/6 mx-auto justify-between my-20"
        >
            <PortableText
                className=" w-full xl:w-2/4 bg-greensLite rounded-lg mb-10 xl:mb-0 mr-0 xl:mr-10 text-center xl:text-left"
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                content={props.coachingPosts[0].themes}
                serializers={{
                    h1: props.h1,
                    normal: props.normal2,
                    h2: props.h3,
                }}
            />
            <PortableText
                className="w-full xl:w-2/4 rounded-lg flex flex-col justify-center mb-20 px-5 xl:pl-10"
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                content={props.coachingPosts[0].format}
                serializers={{
                    h1: props.h1,
                    normal: props.normal3,
                    h2: props.h4,
                }}
            />
        </div>
    </div>;
}