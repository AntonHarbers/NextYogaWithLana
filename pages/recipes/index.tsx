import { GetStaticProps } from "next"
import { sanityClient, urlFor } from '../../sanity';
import { RecipePost } from "../../typings"
import { motion } from 'framer-motion'
import PortableText from "react-portable-text"
import { Carousel } from 'flowbite-react'


interface Props {
    post: [RecipePost]
}

export default function Nutrition({ post }: Props) {

    return (
        <motion.div className="flex flex-col items-center 2xl:flex-row justify-center "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
        >
            <motion.div initial={{ x: -1000, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5 }} className=" w-5/6 2xl:w-2/6 text-center mt-2 2xl:mt-20 mx-auto flex flex-col">
                <h1 className=" font-Julius text-6xl ">
                    Cook Book
                </h1>
                <h1 className=" my-6 2xl:my-32 text-xl mx-auto w-5/6 xl:w-1/2">
                    Creativity is a very important component in our life. Go to the kitchen and simply add some new dishes to your weekly Menu. Delight yourself and your beloved ones by combining new and known ingredients.

                    Boost the sense of pleasure with a variety of new tastes that, inevitably, will positively affect the quality of your life!

                    Here are some of my favorites for the season.

                    Hope You Get Inspired!
                </h1>
            </motion.div>

            <motion.div initial={{ x: 1000, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5, delay: 1 }} className="h-[70vh] rounded-lg text-white bg-greens w-4/5 2xl:w-1/2 mx-auto 2xl:ml-0 2xl:mr-52 my-10">
                <Carousel slideInterval={10000}>
                    {post.map((post) => (
                        <div key={post._id} className=" overflow-y-scroll flex flex-col h-full p-10 w-full px-10 2xl:px-32 scrollbar-thin scrollbar-thumb-greensLite scrollbar-track-greens overflow-x-hidden">
                            <div className='my-5 text-4xl font-bold text-center'>
                                {post.name}
                            </div>
                            <div className='my-10'>
                                <img className="w-1/2 lg:w-1/3 h-auto mx-auto rounded-md shadow-xl shadow-black" src={urlFor(post.recipeImage).url()!} alt="" />
                            </div>
                            <PortableText
                                className=''
                                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                                content={post.recipe}
                                serializers={{
                                    h1: (props: any) => (
                                        <h1 className="text-3xl font-semibold text-center p-2 border-b-2 border-white" {...props} />
                                    ),
                                    normal: (props: any) => (
                                        <h1 className=" text-center my-5 hover:font-semibold p-2" {...props} />
                                    ),
                                    h2: (props: any) => (
                                        <h1 className='text-4xl text-center font-semibold my-5 pb-2 border-b-2 border-white' {...props} />
                                    ),
                                    h3: (props: any) => (
                                        <h1 className='text-2xl font-semibold my-5' {...props} />
                                    ),
                                    li: (props: any) => (
                                        <li className='my-3' {...props} />
                                    ),
                                }}
                            />
                        </div>
                    ))}
                </Carousel>
            </motion.div>

        </motion.div>
    )
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `
    *[_type == "recipes"]{
        _id,
        name,
        recipeImage,
        recipe
      }`

    const post = await sanityClient.fetch(query)

    return {
        props: {
            post,
        },
        revalidate: 60,
    }

}
