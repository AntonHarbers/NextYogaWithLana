import {motion} from "framer-motion";
import {urlFor} from "../../sanity";
import PortableText from "react-portable-text";
import {BlogPost} from "../../typings";

export default function HomeBlogSection({blogPosts}: {blogPosts: BlogPost[]}) {
    return (
        <div id='blog section' className='flex flex-col w-4/5 xl:w-2/3 mx-10 my-10 xl:my-0'>
            <div className='mx-auto text-center text-4xl lg:text-6xl font-bold p-5 m-10 lg:m-20 '>
                Lana's Blog
            </div>
            {blogPosts.slice(0).map((post, index) => (
                <motion.div key={index} className="my-10"
                            initial={{opacity: .5}}
                            whileInView={{opacity: 1}}
                            transition={{ease: "easeInOut", duration: 2}}
                >
                    <div
                        className="mx-auto flex flex-col md:flex-row-reverse w-full text-2xl lg:text-4xl items-center font-bold border-t-2 border-b-2 border-greensLite py-5">
                        <div className="w-full text-center md:text-start">
                            {post.name}
                        </div>
                        <div className="w-auto">
                            <img className='my-5 md:my-0 rounded-full mr-0 md:mr-20 w-[10vh] h-[10vh] shadow-xl'
                                 src={urlFor(post.headerPicture).url()!} alt=""/>
                        </div>
                    </div>
                    <div className='mx-auto my-10 w-full'>
                        <PortableText
                            className=' flex flex-col text-start'
                            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                            content={post.blogText}
                            serializers={{
                                h1: (props: any) => (
                                    <h1 className="text-2xl my-2" {...props} />
                                ),
                                normal: (props: any) => (
                                    <h1 className="my-2" {...props} />
                                ),
                                h2: (props: any) => (
                                    <h1 className=' text-lg font-bold my-5' {...props} />
                                ),
                                li: ({children}: any) => (
                                    <li className='ml-4 list-disc'>{children}</li>
                                ),
                                link: ({href, children}: any) => (
                                    <a href={href} className="text-blue-500 hover:underline">
                                        {children}
                                    </a>
                                ),
                                img: (props: any) => <img alt={'Image'} className='w-10 h-10' {...props} />
                            }
                            }
                        />
                    </div>
                </motion.div>
            ))}

        </div>
    )
}