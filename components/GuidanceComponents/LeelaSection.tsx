import {LeelaPost} from "../../typings";
import {urlFor} from "../../sanity";
import PortableText from "react-portable-text";
import {motion} from "framer-motion";

export default function LeelaSection(props: {
    leelaPosts: [LeelaPost],
    h1: (props: any) => JSX.Element,
    normal: (props: any) => JSX.Element,
    h2: (props: any) => JSX.Element,
    onClick: () => void,
    h: (props: any) => JSX.Element,
    normal1: (props: any) => JSX.Element,
    h3: (props: any) => JSX.Element,
    elements: JSX.Element[]
}) {
    return <div id="leela section" className=" h-auto bg-greensLite flex flex-col ">
        <h1 className="text-center my-20 mx-10 xl:m-20 text-6xl font-Julius">
            LEELA - THE GAME OF SELF-KNOWLEDGE
        </h1>
        <div
            id="leelaGameContent"
            className="flex flex-col xl:flex-row w-5/6 items-center justify-between mx-auto"
        >
            <div className="w-full xl:w-3/4 flex items-center justify-between">
                <img
                    className="w-full h-auto border-r-4 border-t-4 border-greens border-opacity-50 rounded-sm"
                    src={urlFor(props.leelaPosts[0].backgroundImage).url()!}
                    alt=""
                />
            </div>
            <div className="w-full xl:w-2/4 flex flex-col items-center justify-between text-center">
                <PortableText
                    className="w-full xl:w-2/4"
                    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                    content={props.leelaPosts[0].body}
                    serializers={{
                        h1: props.h1,
                        normal: props.normal,
                        h2: props.h2,
                    }}
                />
                <button
                    onClick={props.onClick}
                    className=" mt-5 mb-0 xl:my-10 text-2xl bg-greens w-[20rem] py-5 px-10 mx-auto rounded-full text-white shadow-xl shadow-gray-600 hover:bg-opacity-80 active:shadow-lg active:bg-opacity-60 active:shadow-gray-500 transition duration-300 ease-in-out "
                >
                    Sign up to Play
                </button>
            </div>
        </div>
        <div
            id="testimonialsAndCertificate"
            className=" w-5/6 flex flex-col justify-between mx-auto"
        >
            <div
                id="top"
                className="flex flex-col-reverse xl:flex-row justify-center mt-20 mb-10 xl:my-32"
            >
                <div
                    id="left"
                    className="w-full xl:w-1/3 h-auto flex flex-col justify-center bg-greens bg-opacity-10 hover:bg-opacity-20 transition duration-300 ease-in-out rounded-lg"
                >
                    <motion.h1
                        animate={{y: [0, 10, 0]}}
                        transition={{repeat: Infinity, duration: 2}}
                        className="text-6xl font-serif w-2/3 mx-auto"
                    >
                        "
                    </motion.h1>
                    <PortableText
                        className="w-2/3 mx-auto"
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                        content={props.leelaPosts[0].firstTestimonial}
                        serializers={{
                            h1: props.h,
                            normal: props.normal1,
                            h2: props.h3,
                        }}
                    />
                    <motion.h1
                        animate={{y: [0, -10, 0]}}
                        transition={{repeat: Infinity, duration: 2}}
                        className=" text-6xl font-serif w-2/3 mx-auto text-right"
                    >
                        "
                    </motion.h1>
                </div>
                <div id="right" className="w-full xl:w-2/3 flex flex-col">
                    <div className="my-10 xl:my-0">
                        <img
                            className="w-full h-auto mx-0 xl:mx-10 border-b-4 border-l-4 border-greens border-opacity-50"
                            src={urlFor(props.leelaPosts[0].certImage).url()!}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div id="bot">
                {props.elements}
            </div>
        </div>
    </div>;
}