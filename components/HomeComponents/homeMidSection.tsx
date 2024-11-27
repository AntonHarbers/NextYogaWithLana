import {HomePost} from "../../typings";
import {urlFor} from "../../sanity";
import {AnimatePresence, motion} from "framer-motion";
import PortableText from "react-portable-text";

export function HomeMidSection({posts}: { posts: HomePost[] }) {
    return <div className="flex h-[40rem] 2xl:h-[60rem] w-full bg-secondary">
        <div id="leftcol" className="hidden xl:flex flex-col items-center w-3/5 mx-auto my-auto">
            <div className=" h-auto w-3/5 bg-primary shadow-inner shadow-gray-800 rounded-full p-12 2xl:py-0 my-10">
                <img src={urlFor(posts[0].leftImage).url()!} className=" scale-100" alt={'Headstand Pose Image'}/>
            </div>
        </div>

        <div id="rightcol" className="w-full hidden 2xl:grid xl:grid-cols-1">
            <div className="relative hidden 2xl:flex justify-center">
                <img className="absolute h-[75rem] w-auto mt-[-15rem]" src="/home/front.png"/>
                <AnimatePresence>
                    <motion.div
                        className="absolute px-5 py-10 h-auto w-[40rem] min-w-[20rem] bg-primary justify-center border-8 border-gray-300"
                        initial={{y: 500, opacity: 0}}
                        whileInView={{y: 100, opacity: 1}}
                        viewport={{}}
                        exit={{y: 500, opacity: 0}}
                        transition={{ease: "easeInOut", duration: 1}}
                    >
                        <PortableText
                            className="text-center "
                            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                            content={posts[0].body}
                            serializers={{
                                h1: (props: any) => (
                                    <h1 className="text-xl 2xl:text-2xl font-bold my-2" {...props} />
                                ),
                                normal: (props: any) => (
                                    <h1 className="font-extralight  2xl:text-sm my-2" {...props} />
                                ),
                                h2: (props: any) => (
                                    <h1 className=' text-sm 2xl:text-xl font-bold my-2' {...props} />
                                ),
                            }
                            }
                        />
                    </motion.div>
                </AnimatePresence>
                <img className="absolute h-[75rem]  w-auto mt-[-15rem]" src="/home/back.png"/>
            </div>
        </div>
        <div id="rightcol" className="flex 2xl:hidden mx-5 flex-col w-full justify-center">
            <div
                className="flex px-5 my-10 w-full bg-primary justify-center border-8 py-10 border-gray-300"
            >
                <PortableText
                    className="flex flex-col text-center"
                    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                    content={posts[0].body}
                    serializers={{
                        h1: (props: any) => (
                            <h1 className="text-2xl font-bold my-2" {...props} />
                        ),
                        normal: (props: any) => (
                            <h1 className="font-extralight text-sm my-1" {...props} />
                        ),
                        h2: (props: any) => (
                            <h1 className='text-xl font-bold my-2' {...props} />
                        ),
                        li: ({children}: any) => (
                            <li className='ml-4 list-disc'>{children}</li>
                        ),
                        link: ({href, children}: any) => (
                            <a href={href} className="text-blue-500 hover:underline">
                                {children}
                            </a>
                        ),
                    }
                    }
                />
            </div>
        </div>
    </div>
}