import { GuidancePost } from "../../typings";
import { motion } from "framer-motion";
import PortableText from "react-portable-text";
import { urlFor } from "../../sanity";

export default function GuidanceSection(props: {
    guidancePosts: [GuidancePost],
    h1: (props: any) => JSX.Element,
    normal: (props: any) => JSX.Element,
    h2: (props: any) => JSX.Element,
    normal1: (props: any) => JSX.Element
}) {
    return <div id="guidance section" className=" h-auto bg-secondary flex flex-col">
        <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeInOut", duration: 2 }}
            id="headerText"
            className="mx-auto max-w-[90%] mt-10 mx:my-10 text-4xl xl:text-8xl font-bold text-greens font-Corinthia text-center "
        >
            {props.guidancePosts[0].title}
        </motion.div>


        <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeInOut", duration: 2.5 }}
            id="leftSide"
            className=" w-[90%] mx-auto flex flex-col justify-center my-2 mx:my-10"
        >

            <PortableText
                className="w-full rounded-lg py-10 bg-greens xl:mr-10 p-4 mx:p-10 text-center"
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                content={props.guidancePosts[0].headerText}
                serializers={{
                    h1: props.h1,
                    normal: props.normal,
                    h2: props.h2,
                }}
            />
            <div className="w-full flex flex-wrap my-2 xl:my-10">
                <motion.div
                    initial={{ x: 1000 }}
                    animate={{ x: 0 }}
                    transition={{ ease: "easeInOut", duration: 2.5 }}
                    className=" w-[250px] mx-auto xl:w-[400px] flex items-center justify-center"
                >
                    <img
                        className=" relative w-full my-2 xl:my-0  h-auto border-2 border-greens rounded-sm"
                        src={urlFor(props.guidancePosts[0].tertiaryImage).url()!}
                        alt=""
                    />
                </motion.div>
                <motion.div
                    initial={{ x: 1000 }}
                    animate={{ x: 0 }}
                    transition={{ ease: "easeInOut", duration: 2.5 }}
                    className=" w-[250px] mx-auto xl:w-[400px] flex items-center justify-center"
                >
                    <img
                        className=" relative w-full my-2 xl:my-0 h-auto border-2 border-greens rounded-sm"
                        src={urlFor(props.guidancePosts[0].secondaryImage).url()!}
                        alt=""
                    />
                </motion.div>
                <motion.div
                    initial={{ x: 1000 }}
                    animate={{ x: 0 }}
                    transition={{ ease: "easeInOut", duration: 2.5 }}
                    className=" w-[200px]  mx-auto xl:w-[400px] xl:mx-0 flex items-center justify-center"
                >
                    <img
                        className=" relative w-full xl:w-[300px] h-auto border-2 border-greens rounded-sm"
                        src={urlFor(props.guidancePosts[0].mainImage).url()!}
                        alt=""
                    />
                </motion.div>

            </div>
            <PortableText
                className="w-full rounded-lg py-10 bg-greens xl:mr-10 p-4 mx:p-10 text-center leading-8 font-julius text-white text-lg"
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                content={props.guidancePosts[0].body}
                serializers={{
                    h1: props.h1,
                    normal: props.normal1,
                    h2: props.h2,
                }}
            />

        </motion.div>


    </div>;
}