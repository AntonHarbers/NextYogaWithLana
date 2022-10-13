import { GetStaticProps } from 'next'
import { sanityClient, urlFor } from '../../sanity'
import { BenefitsPost, TestimonialPost } from '../../typings'
import { AnimatePresence, motion } from 'framer-motion'
import { Carousel } from 'flowbite-react'
import PortableText from 'react-portable-text'



interface Props {
  posts: [BenefitsPost],
  testimonialsPosts: [TestimonialPost],
}

export default function Benefits({ posts, testimonialsPosts }: Props) {
  return (
    <motion.div className="flex flex-col w-full md:w-5/6 lg:w-1/2 items-center mx-auto my-10 justify-center py-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 2 }}
    >
      <div>

        <div id="benefitsSection">
          <h1 className='mx-auto text-center text-6xl font-Julius mt-10 mb-28' >Poses & Benefits</h1>
          {posts.map((post, index) => (
            index % 2 === 0 ? (
              <div key={post._id} className='flex flex-col'>
                <div className='my-10 w-full xl:w-[75vw] mx-auto flex flex-col xl:flex-row justify-between items-center'>
                  <AnimatePresence>
                    <motion.img initial={{ x: "-20vw", opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} exit={{ x: "-20vw", opacity: 0 }} transition={{ duration: 1 }} className='rounded-lg' src={urlFor(post.benefitsImage).url()!} alt="" />
                  </AnimatePresence>
                  <AnimatePresence>
                    <motion.div initial={{ x: "20vw", opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} exit={{ x: "20vw", opacity: 0 }} transition={{ duration: 1 }} className=' w-5/6 xl:w-1/2 h-auto text-center'>
                      <PortableText
                        className=""
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                        content={post.benefitsText}
                        serializers={{
                          h1: (props: any) => (
                            <h1 className="text-4xl font-bold my-5" {...props} />
                          ),
                          normal: (props: any) => (
                            <h1 className="font-semibold text-sm xl:text-lg my-5" {...props} />
                          ),
                          h2: (props: any) => (
                            <h1 className='text-2xl font-bold my-5' {...props} />
                          ),
                          li: ({ children }: any) => (
                            <li className='list-disc'>{children}</li>
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
                  </AnimatePresence>

                </div>
              </div>
            ) : (
              <div key={post._id} className='flex flex-col'>
                <div className='my-10 w-full xl:w-[75vw] mx-auto flex flex-col-reverse xl:flex-row justify-between items-center'>
                  <AnimatePresence>
                    <motion.div initial={{ x: "-20vw", opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} exit={{ x: "-20vw", opacity: 0 }} transition={{ duration: 1 }} className=' w-5/6 xl:w-1/2 h-auto text-center'>
                      <PortableText
                        className=""
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                        content={post.benefitsText}
                        serializers={{
                          h1: (props: any) => (
                            <h1 className="text-4xl font-bold my-5" {...props} />
                          ),
                          normal: (props: any) => (
                            <h1 className="font-semibold text-sm xl:text-lg my-5" {...props} />
                          ),
                          h2: (props: any) => (
                            <h1 className='text-2xl font-bold my-5' {...props} />
                          ),
                          li: ({ children }: any) => (
                            <li className='list-disc'>{children}</li>
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
                  </AnimatePresence>

                  <AnimatePresence>
                    <motion.img initial={{ x: "20vw", opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} exit={{ x: "20vw", opacity: 0 }} transition={{ duration: 1 }} className='rounded-lg' src={urlFor(post.benefitsImage).url()!} alt="" />
                  </AnimatePresence>
                </div>
              </div>
            )

          ))}
        </div>

        <h1 className='mx-auto text-center text-5xl font-Julius mt-44' >Testimonials</h1>
        <div id='testimonialsSection' className='flex w-[90vw] md:w-[70vw] h-[70vh] min-h-[40rem] max-h-[50rem] shadow-2xl shadow-text mx-auto mt-10 mb-20 border rounded-2xl bg-secondary'>
          <Carousel slideInterval={5000}>
            {testimonialsPosts.map((post) => (
              <div key={post._id} className='flex flex-col items-center w-4/5 xl:w-1/2 bg-secondary'>
                {post.mainImage! && (
                  <div className='m-5'>
                    <img
                      className='h-30 w-auto rounded-lg md:h-40 shadow-xl shadow-gray-700 object-cover'
                      src={urlFor(post.mainImage).url()!}
                      alt=""
                    />

                  </div>
                )}
                <div className='my-5 w-full text-center'>
                  <PortableText
                    className=""
                    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                    content={post.body}
                    serializers={{
                      h1: (props: any) => (
                        <h1 className="text-2xl font-bold my-5" {...props} />
                      ),
                      normal: (props: any) => (
                        <h1 className="font-semibold text-sm xl:text-lg my-5" {...props} />
                      ),
                      h2: (props: any) => (
                        <h1 className='text-xl font-bold my-5' {...props} />
                      ),
                      li: ({ children }: any) => (
                        <li className='list-disc'>{children}</li>
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
                <div className='mb-5 text-sm'>
                  -{post.name}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

    </motion.div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const testimonialsQuery = `
  *[_type=="testimonial"]{
    _id,
    mainImage,
    name,
    body
  }`;

  const testimonialsPosts = await sanityClient.fetch(testimonialsQuery)

  const query = `
  *[_type=="benefits"]{
    _id,
    iconImage,
    benefitsImage,
    benefitsText
  }`;

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
      testimonialsPosts
    },
    revalidate: 60,
  }

}
