import { HomePost } from "../../typings";
import { motion } from "framer-motion";
import { Carousel } from "flowbite-react";
import { YoutubeClip } from "./youtubeClip";
import { urlFor } from "../../sanity";
import Image from "next/image";

const youtubeClipData = [
    {
        videoId: "KgCwYmhFXpo",
        playOnReady: true
    },
    {
        videoId: "QaU29GGFg1A",
        playOnReady: false
    }
]


export function HomeIntroSection(props: { homePosts: [HomePost] }) {
    return <div id="intropart"
        className="flex flex-col xl:flex-row 2xl:justify-between h-auto xl:h-[50rem] 2xl:h-[50rem] w-full items-center 2xl:items-start ">
        <div id="leftcol"
            className="flex flex-col w-5/6 xl:w-3/5 m-2 text-center h-1/2 xl:h-[90%] justify-between text-4xl md:text-5xl mt-0">
            <motion.h1 initial={{ marginLeft: -2000, opacity: 0 }} animate={{ marginLeft: 0, opacity: 1 }}
                exit={{ marginLeft: -2000, opacity: 0 }} transition={{ type: "spring", stiffness: 50, delay: .4 }}
                className=" font-Julius mb-3">Holistic Health
            </motion.h1>
            <motion.h1 initial={{ marginLeft: -2000, opacity: 0 }} animate={{ marginLeft: 0, opacity: 1 }}
                exit={{ marginLeft: -2000, opacity: 0 }} transition={{ type: "spring", stiffness: 50, delay: .4 }}
                className=" font-Julius">&
            </motion.h1>
            <motion.h1 initial={{ marginRight: -2000, opacity: 0 }} animate={{ marginRight: 0, opacity: 1 }}
                exit={{ marginRight: -2000, opacity: 0 }} transition={{ type: "spring", stiffness: 50, delay: .8 }}
                className=" font-Julius mt-3">Fitness Coach
            </motion.h1>
            {/* The Carousel container height should be set according to youtube clip component return height*/}
            <div className={"max-h-full flex flex-col h-[500px] w-[380px] mx-auto "}>
                <Carousel slideInterval={40000}>
                    {youtubeClipData.map(({ videoId, playOnReady }) => {
                        return (<div className={"w-auto h-full rounded-xl  overflow-hidden"}>
                            <YoutubeClip videoId={videoId} playOnReady={playOnReady} />
                        </div>)
                    })}
                </Carousel>
            </div>
        </div>

        <div id="rightcol" className="xl:grid xl:grid-cols-2 w-full mx-auto hidden my-0">
            <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="rounded-full self-center justify-self-end h-[8vw] w-[8vw] shadow-inner shadow-gray-800 bg-secondary">
            </motion.div>
            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className=" rounded-full self-end justify-self-start ml-20 h-[13vw] w-[13vw] shadow-inner shadow-gray-800 bg-secondary">
            </motion.div>
            <div
                className="flex col-span-2 relative h-[28vw] w-[28vw] justify-self-start mx-auto rounded-full shadow-inner shadow-gray-800 bg-secondary overflow-visible">
                <Image layout={'fill'} height={500} width={280} className={'scale-105'} src={urlFor(props.homePosts[0].rightImage).url()!} alt={"Yoga Pose Image"} />
            </div>
        </div>
    </div>;
}