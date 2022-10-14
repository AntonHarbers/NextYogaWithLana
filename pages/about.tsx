import { GetStaticProps } from 'next'
import { sanityClient, urlFor } from '../sanity'
import PortableText from 'react-portable-text'
import { AboutPost } from '../typings'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
    posts: [AboutPost]
}

export default function About({ posts }: Props) {
    return (
        <motion.div className="flex flex-col lg:flex-row justify-between items-center m-auto py-2 w-5/6 xl:w-2/3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 2 }}
        >
            <div id='contents' className='w-full flex flex-col'>
                <motion.h1 initial={{ x: 1500, opacity:0 }} animate={{ x: 0, opacity:1 }} transition={{ duration: 1, delay: .5 }} className='w-full text-6xl font-Julius text-center xl:text-end my-2 xl:my-10 mx-auto'>About Lana</motion.h1>
                <div id='profileDiv' className='flex flex-col md:flex-row mx-auto w-full my-10 items-center '>
                    <motion.div initial={{x:-1500, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:1}} className='mx-auto my-10 '>
                        <img className='rounded-full mx-auto w-full h-auto shadow-xl shadow-stone-500 hover:scale-110 transition duration-500 ease-in' src={urlFor(posts[0].profilePicture).url()!} alt="" />
                    </motion.div>
                    <motion.div initial={{x:1500, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:1.5}} className='w-5/6'>
                        <div className='text-center xl:text-end text-2xl font-bold'>
                            {posts[0].name}
                        </div>
                        <PortableText
                            className='w-full xl:w-1/2 text-center xl:text-end mt-10 ml-auto'
                            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                            content={posts[0].aboutText}
                            serializers={{
                                h1: (props: any) => (
                                    <h1 className="text-xl my-5" {...props} />
                                ),
                                normal: (props: any) => (
                                    <h1 className=" text-xl my-5" {...props} />
                                ),
                                h2: (props: any) => (
                                    <h1 className=' text-2xl font-bold my-5' {...props} />
                                ),
                                li: ({ children }: any) => (
                                    <li className='ml-4 list-disc'>{children}</li>
                                ),
                                link: ({ href, children }: any) => (
                                    <a href={href} className="text-blue-500 hover:underline">
                                        {children}
                                    </a>
                                ),
                            }
                            }
                        />
                    </motion.div>
                </div>
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:2}} id='backgroundDiv' className='flex flex-col w-full text-start m-0 xl:m-10 '>
                    <PortableText
                        className=''
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                        content={posts[0].backgroundText}
                        serializers={{
                            h1: (props: any) => (
                                <h1 className="text-2xl my-5 w-full text-center" {...props} />
                            ),
                            normal: (props: any) => (
                                <div className='flex flex-row items-center border-l-0 xl:border-l-2 border-greens'>
                                    <div className='rounded-full bg-greens hidden xl:block xl:w-2 xl:h-2 xl:ml-[-5px] '>
                                    </div>
                                    <h1 className="my-5 text-lg pb-1 pl-10" {...props} />
                                </div>


                            ),
                            h2: (props: any) => (
                                <h1 className='text-xl my-5' {...props} />
                            ),
                            li: ({ children }: any) => (
                                <li className='ml-4 list-disc'>{children}</li>
                            ),
                            link: ({ href, children }: any) => (
                                <a href={href} className="text-blue-500 hover:underline">
                                    {children}
                                </a>
                            ),
                        }}
                    />
                </motion.div>
            </div>


        </motion.div>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `
    *[_type=="about"]{
        _id,
        name,
        aboutText,
        profilePicture,
        backgroundText
    }`;

    const posts = await sanityClient.fetch(query)

    return {
        props: {
            posts,
        },
        revalidate: 60,
    }

}

