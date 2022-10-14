import { GetStaticProps } from "next"
import { sanityClient, urlFor } from '../sanity';
import PortableText from "react-portable-text"
import { BlogPost, HomePost } from "../typings"
import { AnimatePresence, motion, useScroll } from "framer-motion"

interface Props {
  posts: [HomePost],
  blogPosts: [BlogPost]
}

export default function Home({ posts, blogPosts }: Props) {

  return (
    <motion.div className="flex flex-col items-center m-auto w-full py-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      <div id="intopart" className="flex flex-col xl:flex-row 2xl:justify-between h-auto xl:h-[90rem] 2xl:h-[80rem] w-full items-center 2xl:items-start ">

        <div id="leftcol" 
        className="flex flex-col w-5/6 xl:w-3/5 m-2 text-center h-1/2 2xl:h-full justify-between text-5xl md:text-6xl pb-20 xl:pt-20 2xl:pb-96 mt-0 xl:mt-20 ">
          <motion.h1 initial={{ marginLeft: -2000, opacity: 0 }} animate={{ marginLeft: 0, opacity: 1 }} exit={{ marginLeft: -2000, opacity: 0 }} transition={{ type: "spring", stiffness: 50, delay: .4 }} className=" font-Julius">YOGA</motion.h1>
          <h1 className=" font-Julius">·</h1>
          <motion.h1 initial={{ marginRight: -2000, opacity: 0 }} animate={{ marginRight: 0, opacity: 1 }} exit={{ marginRight: -2000, opacity: 0 }} transition={{ type: "spring", stiffness: 50, delay: .8 }} className=" font-Julius">SPIRITUALITY</motion.h1>
          <h1 className=" font-Julius">·</h1>
          <motion.h1 initial={{ marginLeft: -2000, opacity: 0 }} animate={{ marginLeft: 0, opacity: 1 }} exit={{ marginLeft: -2000, opacity: 0 }} transition={{ type: "spring", stiffness: 50, delay: 1.2 }} className=" font-Julius">LIFE COACHING</motion.h1>
        </div>

        <div id="rightcol" className="xl:grid xl:grid-cols-2 w-full mx-auto hidden my-auto">
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
          <div className="col-span-2 h-[30vw] w-[30vw] justify-self-start mx-auto rounded-full shadow-inner shadow-gray-800 bg-secondary overflow-visible">
            <img src={urlFor(posts[0].rightImage).url()!} className="relative scale-[175%] top-16" />
          </div>
        </div>
      </div>

      <div className="flex h-[80rem] 2xl:h-[60rem] w-full bg-secondary">
        <div id="leftcol" className="hidden xl:flex flex-col items-center w-3/5 mx-auto my-auto">
          <div className=" h-auto w-3/5 bg-primary shadow-inner shadow-gray-800 rounded-full p-12 2xl:py-0 my-10">
            <img src={urlFor(posts[0].leftImage).url()!} className=" scale-100" />
          </div>
        </div>

        <div id="rightcol" className="w-full hidden 2xl:grid xl:grid-cols-1">
          <div className="relative hidden 2xl:flex justify-center">
            <img className="absolute h-[75rem] w-auto mt-[-15rem]" src="/home/front.png" />
            <AnimatePresence>
            <motion.div
              className="absolute px-5 py-10 h-auto w-[40rem] min-w-[20rem] bg-primary justify-center border-8 border-gray-300"
              initial={{ y: 500 , opacity:0}}
              whileInView={{ y: 100, opacity:1}}
              viewport={{}}
              exit={{ y: 500, opacity:0}}
              transition={{ ease: "easeInOut", duration: 1 }}
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
                    <h1 className="font-semibold text-xs 2xl:text-base my-2" {...props} />
                  ),
                  h2: (props: any) => (
                    <h1 className=' text-sm 2xl:text-xl font-bold my-2' {...props} />
                  ),
                }
                }
              />
            </motion.div>
          </AnimatePresence>
          <img className="absolute h-[75rem]  w-auto mt-[-15rem]" src="/home/back.png" />
          </div>
        </div>
        <div id="rightcol" className="flex 2xl:hidden mx-10 flex-col w-full justify-center">
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
                  <h1 className="font-semibold my-2" {...props} />
                ),
                h2: (props: any) => (
                  <h1 className='text-xl font-bold my-2' {...props} />
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
          </div>
        </div>
      </div>

      <div id='profileDiv' className='flex flex-col w-4/5 xl:w-2/3 mx-10 my-10 xl:my-0'>
        <div className='mx-auto text-center text-6xl font-bold p-5 m-20 '>
          Lana's Blog
        </div>
        {blogPosts.slice(0).reverse().map((post, index) => (
          <motion.div key={index} className="my-10"
            initial={{ opacity: .5 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 2 }}
          >
            <div className="flex mx-auto w-full text-4xl items-center font-bold border-t-2 border-b-2 border-greensLite py-5">
              <div className=''>
                <img className='rounded-full mr-20 w-[15vh] h-[15vh] shadow-xl' src={urlFor(post.headerPicture).url()!} alt="" />
              </div>
              {post.name}
            </div>

            <div className='mx-auto my-10 w-full border-dotted border-b-2'>
              <PortableText
                className=' flex flex-col text-start'
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                content={post.blogText}
                serializers={{
                  h1: (props: any) => (
                    <h1 className="text-2xl my-5" {...props} />
                  ),
                  normal: (props: any) => (
                    <h1 className="my-5" {...props} />
                  ),
                  h2: (props: any) => (
                    <h1 className=' text-lg font-bold my-5' {...props} />
                  ),
                  li: ({ children }: any) => (
                    <li className='ml-4 list-disc'>{children}</li>
                  ),
                  link: ({ href, children }: any) => (
                    <a href={href} className="text-blue-500 hover:underline">
                      {children}
                    </a>
                  ),
                  img: (props: any) => <img className='w-10 h-10' {...props} />
                }
                }
              />
            </div>
          </motion.div>
        ))}

      </div>

    </motion.div>
  )
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `
  *[_type=="home"]{
    _id,
    leftImage,
    rightImage,
    seminarImage,
    body
  }`;

  const blogQuery = `
  *[_type=="blog"]{
      _id,
      name,
      blogText,
      headerPicture,
  }`;
  const posts = await sanityClient.fetch(query)
  const blogPosts = await sanityClient.fetch(blogQuery)

  return {
    props: {
      posts,
      blogPosts
    },
    revalidate: 60,
  }

}



