import { GetStaticProps } from 'next'
import { sanityClient, urlFor } from '../sanity'
import PortableText from 'react-portable-text'
import { ReikiPost, ReikiWorkshopPost, ReikiTestimonialPost } from '../typings'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Carousel } from 'flowbite-react'

interface Props {
  posts: [ReikiPost]
  workshopPosts: [ReikiWorkshopPost]
  testimonialsPosts: [ReikiTestimonialPost]
}

export default function Reiki({ posts, workshopPosts, testimonialsPosts }: Props) {
  const [selected, setSelected] = useState(0)

  const changeActive = (index: number) => {
    if (index == selected) {
      setSelected(100)
    } else {
      setSelected(index)
    }
  }

  return (
    <motion.div className="flex flex-col items-center w-full py-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 2 }}
    >
      <div id='content' className=' flex flex-col justify-center h-auto xl:h-[60rem] 2xl:h-[60rem] w-full'>
        <AnimatePresence>
          <motion.h1 initial={{ x: -1000, opacity:0 }} animate={{ x: 0, opacity:1 }} transition={{ duration: 1.5}} className=' w-4/5 xl:w-3/4 mx-auto mb-10 xl:mb-32 text-center xl:text-start text-5xl font-semibold font-Julius'>Reiki - a form of energy healing</motion.h1>
        </AnimatePresence>
        <div className='flex flex-col xl:flex-row justify-center '>
          <div id='left' className='px-10 flex flex-col justify-center text-start w-full xl:w-2/4'>
            {posts[0].body.map((block, index) => (
              <PortableText
                key={index}
                className="text-start"
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                content={[block]}
                serializers={{
                  h1: (props: any) => (
                    <h1 className="text-2xl my-5" {...props} />
                  ),
                  normal: (props: any) => (
                    <h1 className="my-5 text-xl" {...props} />
                  ),
                  h2: (props: any) => (
                    <h1 className='text-xl font-bold my-5' {...props} />
                  ),
                }
                }
              />
            ))}
          </div>
          <div id='right' className='flex w-full my-10 xl:my-0 xl:w-1/4 items-center justify-center'>
            <img key={"rightImage"} className=' rounded-lg my-5 mx-5 w-[35vh] h-auto shadow-xl shadow-black' src={urlFor(posts[0].rightImage).url()!} alt="" />
          </div>
        </div>

      </div>
      <div id='testimonials' className='h-[60rem] w-full flex flex-col mb-10 justify-center rounded-xl'>
        <h1 className=' text-center mt-0 mb-20 text-5xl'>
          Testimonials
        </h1>
        <div className='flex justify-center w-3/4 h-full max-h-[60vh] bg-greensLite mx-auto rounded-lg mb-20 px-0 md:px-10 shadow-md shadow-text'>
          <Carousel slideInterval={5000}>
            {testimonialsPosts.map((post) => (
              <div key={post._id} className='flex flex-col px-10 md:px-20'>
                <div className='my-5 mx-5'>
                  <PortableText
                    className="text-sm lg:text-lg mx-auto"
                    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                    content={post.body}
                    serializers={{
                      h1: (props: any) => (
                        <h1 className="text-2xl my-5" {...props} />
                      ),
                      normal: (props: any) => (
                        <h1 className="my-5 text-xs md:text-lg" {...props} />
                      ),
                      h2: (props: any) => (
                        <h1 className='text-xl font-bold my-5' {...props} />
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
                <div className='text-sm my-5 text-center'>
                  -{post.title}
                </div>
              </div>
            ))}
          </Carousel>
        </div>

      </div>

      <div id='workshops' className=' flex flex-col py-10 justify-center h-auto w-full xl:h-[60rem] 2xl:h-[50rem] bg-secondary'>
      <AnimatePresence>
          <motion.h1 initial={{ x: -1000, opacity:0 }} animate={{ x: 0, opacity:1 }} transition={{ duration: 1.5}} className=' w-3/4 mx-auto mb-10 xl:mb-32 text-5xl font-semibold font-Julius text-center xl:text-end'>Reiki Workshops</motion.h1>
        </AnimatePresence>
        {workshopPosts.map((post, index) => (
          <div key={index} className="text-left w-3/4 mx-auto">
            <div className='text-2xl text-text font-bold my-5 cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-secondary transition duration-500 ease-in-out py-2  ' onClick={() => changeActive(index)}>
              {post.title}
            </div>
            <AnimatePresence>
              {selected == index && (
                <motion.div className='my-5'
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ ease: "easeIn", duration: .5 }}
                >
                  <PortableText
                    className=""
                    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                    content={post.body}
                    serializers={{
                      h1: (props: any) => (
                        <h1 className="text-2xl text-text my-5" {...props} />
                      ),
                      normal: (props: any) => (
                        <h1 className="my-5 text-text" {...props} />
                      ),
                      h2: (props: any) => (
                        <h1 className='text-xl text-text font-bold my-5' {...props} />
                      ),
                      li: ({ children }: any) => (
                        <li className='ml-4 text-text list-disc'>{children}</li>
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
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `
  *[_type=="reiki"]{
    _id,
    leftImage,
    rightImage,
    title,
    body,
    topImages
  }`;

  const workshopQuery = `
  *[_type=="reiki-workshops"]{
    _id,
    title,
    body
  }`;

  const testimonialsQuery = `
  *[_type=="reiki-testimonials"]{
    _id,
    title,
    body
  }`;

  const testimonialsPosts = await sanityClient.fetch(testimonialsQuery)

  const workshopPosts = await sanityClient.fetch(workshopQuery)

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
      workshopPosts,
      testimonialsPosts
    },
    revalidate: 60,
  }

}
