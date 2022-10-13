import { GetStaticProps } from "next"
import { sanityClient, urlFor } from '../../sanity';
import { GallaryImagePost } from "../../typings"
import { AnimatePresence, motion } from "framer-motion"
import { Carousel } from 'flowbite-react'

interface Props {
    imagesPosts: [GallaryImagePost]
}

export default function Gallary({ imagesPosts }: Props) {

    return (
        <motion.div className="flex flex-col w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
        >
            <div className="hidden 2xl:grid 2xl:grid-cols-2 w-4/5 h-auto mx-auto">
                {imagesPosts.map((post, index) => (
                    index % 2 === 0 ? (
                        <>
                            <h1 className=" text-center text-4xl my-auto font-Julius"># {(post.name)}</h1>
                            <AnimatePresence>
                                <motion.div initial={{ x: 500, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} exit={{ x: 500, opacity: 0 }} transition={{ delay: 0, duration: 1 }}>
                                    <div className="flex flex-col rounded-xl w-full xl:w-5/6 mx-auto my-32 h-[40vh] bg-greensLite  " key={index}>
                                        <Carousel slideInterval={5000} >
                                            {post.gallaryImages.map((image, indexTwo) => (
                                                <img className=" h-5/6 w-auto mx-automy-[-1rem] rounded-lg " src={urlFor(image).url()!} alt={index.toString()} />
                                            ))}
                                        </Carousel>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                        </>
                    ) : (
                        <>
                            <AnimatePresence>
                                <motion.div initial={{ x: -500, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} exit={{ x: -500, opacity: 0 }} transition={{ delay: 0, duration: 1 }}>
                                    <div className="flex flex-col rounded-xl w-full xl:w-5/6 mx-auto my-32 my-5 h-[40vh] bg-greensLite  " key={index}>
                                        <Carousel slideInterval={5000} >
                                            {post.gallaryImages.map((image, indexTwo) => (
                                                <img className=" h-5/6 w-auto mx-automy-[-1rem] rounded-lg " src={urlFor(image).url()!} alt={index.toString()} />
                                            ))}
                                        </Carousel>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            <h1 className=" text-center text-4xl font-Julius my-auto"># {(post.name)}</h1>

                        </>)
                ))}
            </div>
            <div className=" flex flex-col 2xl:hidden w-4/5 h-auto mx-auto">
                {imagesPosts.map((post, index) => (
                    index % 2 === 0 ? (
                        <>
                            <h1 className=" text-center text-4xl my-auto font-Julius"># {(post.name)}</h1>
                            <AnimatePresence>
                                <motion.div initial={{ x: -400, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} exit={{ x: -400, opacity: 0 }} transition={{ delay: 0, duration: 1.5 }}>
                                    <div className="flex flex-col rounded-xl w-full xl:w-5/6 mx-auto my-20 h-[40vh] bg-greensLite  " key={index}>
                                        <Carousel slideInterval={5000} >
                                            {post.gallaryImages.map((image, indexTwo) => (
                                                <img className=" h-auto max-h-[30rem] w-auto mx-automy-[-1rem] rounded-lg " src={urlFor(image).url()!} alt={index.toString()} />
                                            ))}
                                        </Carousel>
                                    </div>
                                </motion.div>

                            </AnimatePresence>

                        </>
                    ) : (
                        <>
                            <h1 className=" text-center text-4xl my-auto font-Julius"># {(post.name)}</h1>
                            <AnimatePresence>
                                <motion.div initial={{ x: 400, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} exit={{ x: 400, opacity: 0 }} transition={{ delay: 0, duration: 1.5 }}>
                                    <div className="flex flex-col rounded-xl w-full xl:w-5/6 mx-auto my-20 h-[40vh] bg-greensLite  " key={index}>
                                        <Carousel slideInterval={5000} >
                                            {post.gallaryImages.map((image, indexTwo) => (
                                                <img className=" h-auto max-h-[30rem] w-auto mx-automy-[-1rem] rounded-lg " src={urlFor(image).url()!} alt={index.toString()} />
                                            ))}
                                        </Carousel>
                                    </div>
                                </motion.div>

                            </AnimatePresence>
                        </>

                    )
                ))}

            </div>


        </motion.div>
    )
}


export const getStaticProps: GetStaticProps = async ({ params }) => {

    const queryImages = `
            *[_type == "gallaryImages"]{
                _id,
                name,
                gallaryImages,
    }`

    const imagesPosts = await sanityClient.fetch(queryImages)

    return {
        props: {
            imagesPosts
        },
        revalidate: 60,
    }

}

