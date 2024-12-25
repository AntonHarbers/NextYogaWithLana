import { GetStaticProps } from "next";
import { sanityClient } from "../sanity";
import PortableText from "react-portable-text";
import {
  CoachingPost,
  CoachingTestimonial,
  MeditationPost,
  LeelaPost,
  LeelaTestimonials,
  GuidancePost,
} from "../typings";
import { AnimatePresence, motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import GuidanceSection from "../components/GuidanceComponents/GuidanceSection";
import CoachingSection from "../components/GuidanceComponents/CoachingSection";
import MeditationSection from "../components/GuidanceComponents/MeditationSection";
import LeelaSection from "../components/GuidanceComponents/LeelaSection";

interface Props {
  guidancePosts: [GuidancePost];
  posts: [CoachingPost];
  testimonailPosts: [CoachingTestimonial];
  meditationPosts: [MeditationPost];
  leelaPosts: [LeelaPost];
  leelaTestimonialsPosts: [LeelaTestimonials];
}

interface IFormInput {
  type: string;
  name: string;
  email: string;
  request: string;
  date: string;
  time: string;
}

export default function Coaching({
  guidancePosts,
  posts,
  meditationPosts,
  leelaPosts,
  leelaTestimonialsPosts,
}: Props) {
  const [active, setActive] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [requestType, setRequestType] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await fetch("/api/createRequest", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        setSubmitted(true);
      })
      .catch(() => {
        setSubmitted(false);
      });
  };

  return (
    <motion.div
        className="flex flex-col m-auto w-full py-2 justify-center"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ease: "easeInOut", duration: 1}}
    >
        <GuidanceSection guidancePosts={guidancePosts} h1={(props: any) => (
            <h1 className="text-2xl font-bold my-2" {...props} />
        )} normal={(props: any) => (
            <h1
                className="xl:font-semibold xl:text-2xl text-sm mb-5 text-primary font-julius"
                {...props}
            />
        )} h2={(props: any) => (
            <h1
                className="text-xl text-center font-bold py-2"
                {...props}
            />
        )} normal1={(props: any) => (
            <h1
                className="xl:font-semibold xl:text-xl text-sm mb-5 text-primary font-julius text-start leading-10"
                {...props}
            />
        )}/>

        <CoachingSection coachingPosts={posts} h1={(props: any) => (
            <h1 className="text-2xl font-bold my-2" {...props} />
        )} normal={(props: any) => (
            <h1
                className="font-semibold my-2 drop-shadow-[5px_5px_5px_rgba(0,0,0,.5)]"
                {...props}
            />
        )} h2={(props: any) => (
            <h1 className="text-xl font-bold my-2" {...props} />
        )} normal1={(props: any) => (
            <h1 className="font-semibold text-xl my-5" {...props} />
        )} h={(props: any) => (
            <h1 className="text-xl font-bold my-5" {...props} />
        )} onClick={() => {
            setActive(!active);
            setRequestType("Coaching");
        }} normal2={(props: any) => (
            <h1
                className="font-semibold text-2xl my-2 px-5 py-2"
                {...props}
            />
        )} h3={(props: any) => (
            <h1
                className="text-4xl text-center font-bold py-5"
                {...props}
            />
        )} normal3={(props: any) => (
            <h1
                className="font-semibold text-center xl:text-end text-2xl my-2 py-2 "
                {...props}
            />
        )} h4={(props: any) => (
            <h1
                className="text-4xl text-center xl:text-end font-bold py-5 "
                {...props}
            />
        )}/>

        <MeditationSection meditationPosts={meditationPosts} h1={(props: any) => (
            <h1 className="text-2xl font-bold my-2" {...props} />
        )} normal={(props: any) => (
            <h1 className="font-semibold text-xl my-2 py-5" {...props} />
        )} h2={(props: any) => (
            <h1
                className="text-4xl text-center font-bold py-2"
                {...props}
            />
        )} onClick={() => {
            setRequestType("Guided Meditation");
            setActive(!active);
        }}/>

        <LeelaSection leelaPosts={leelaPosts} h1={(props: any) => (
            <h1 className="text-2xl font-bold my-2" {...props} />
        )} normal={(props: any) => (
            <h1 className="font-semibold text-2xl my-2 py-5" {...props} />
        )} h2={(props: any) => (
            <h1
                className="text-4xl text-center font-bold py-2"
                {...props}
            />
        )} onClick={() => {
            setActive(!active);
            setRequestType("Leela Game");
        }} h={(props: any) => (
            <h1 className="text-6xl font-serif" {...props} />
        )} normal1={(props: any) => (
            <h1
                className="font-semibold text-xl my-2 py-1"
                {...props}
            />
        )} h3={(props: any) => (
            <h1
                className="text-4xl text-center font-bold py-2"
                {...props}
            />
        )} elements={leelaTestimonialsPosts.map((post, index) => (
            <div key={index} className="flex justify-center">
                <div
                    className="w-full mt-0 mb-10 py-10 h-auto flex flex-col justify-center bg-greens bg-opacity-10 rounded-lg hover:bg-opacity-20 transition duration-300 ease-in-out">
                    <motion.h1
                        animate={{y: [0, 10, 0]}}
                        transition={{repeat: Infinity, duration: 2}}
                        className="text-6xl font-serif w-2/3 mx-auto"
                    >
                        "
                    </motion.h1>
                    <PortableText
                        className="w-2/3 mx-auto"
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                        content={post.body}
                        serializers={{
                            h1: (props: any) => (
                                <h1 className="text-6xl font-serif" {...props} />
                            ),
                            normal: (props: any) => (
                                <h1
                                    className="font-semibold text-xl my-2 py-5"
                                    {...props}
                                />
                            ),
                            h2: (props: any) => (
                                <h1
                                    className="text-4xl text-center font-bold py-2"
                                    {...props}
                                />
                            ),
                        }}
                    />
                    <motion.h1
                        animate={{y: [0, -10, 0]}}
                        transition={{repeat: Infinity, duration: 2}}
                        className=" text-6xl font-serif w-2/3 mx-auto text-right"
                    >
                        "
                    </motion.h1>
                </div>
            </div>
        ))}/>

        {active && (
            <AnimatePresence>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className="w-full h-full fixed top-0 left-0 flex justify-center py-20 bg-black bg-opacity-90 overflow-y-scroll scrollbar-thin scrollbar-thumb-secondary scrollbar-track-primary "
                >
                    {submitted ? (
                        <div className="flex flex-col py-10 px-10 my-10 bg-green-500 text-white max-w-2xl mx-auto">
                            <h3 className="text-3xl font-bold">
                                Thank you, I will contact you as soon as possible!
                            </h3>
                            <button onClick={() => setActive(false)}>Back</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex flex-col justify-center items-center">
                                    <h1 className="text-2xl md:text-4xl font-bold text-white">
                                        Sign up form
                                    </h1>
                                    <h1 className="text-xl md:text-2xl font-bold text-white my-10">
                                        Fill out the form below to get started
                                    </h1>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <input
                                        {...register("type")}
                                        type="hidden"
                                        name="_id"
                                        value={requestType}
                                    />

                                    <label htmlFor="name" className="mb-5 block">
                                        <span className="text-greensLite"> Name </span>
                                        <input
                                            {...register("name", {required: true})}
                                            className=" text-center shadow border rounded py-2 px-3 form-input mt-1 block w-[70vw] md:w-[25vw] ring-green-500 outline-none focus:ring md:min-w-[25rem]"
                                            placeholder="Name"
                                            type="text"
                                        />
                                    </label>
                                    <label className="block mb-5">
                                        <span className="text-greensLite">Email</span>
                                        <input
                                            {...register("email", {
                                                required: true,
                                                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            })}
                                            placeholder="first.last@email.com"
                                            type="text"
                                            className="text-center shadow border rounded py-2 px-3 form-input mt-1 block w-[70vw] md:w-[25vw] md:min-w-[25rem] ring-green-500 outline-none focus:ring"
                                        />
                                    </label>
                                    <label className="block mb-5">
                                        <span className="text-greensLite">Request</span>
                                        <textarea
                                            {...register("request", {required: true})}
                                            className="shadow border rounded py-2 px-3 outline-none focus:ring form-textarea mt-1 block w-[70vw] md:w-[25vw] ring-green-500 md:min-w-[25rem]"
                                            placeholder="Your request..."
                                            rows={8}
                                        />
                                    </label>
                                    <label className="block mb-5">
                                        <span className="text-greensLite">Preferred Date</span>
                                        <input
                                            type="date"
                                            {...register("date", {required: true})}
                                            className=" text-center shadow border rounded py-2 px-3 outline-none focus:ring form-textarea mt-1 block w-[70vw] md:w-[25vw] md:min-w-[25rem] ring-green-500"
                                        />
                                    </label>
                                    <label className="block mb-5">
                                        <span className="text-greensLite">Preferred Time</span>
                                        <input
                                            type="time"
                                            {...register("time", {required: true})}
                                            className=" text-center shadow border rounded py-2 px-3 outline-none focus:ring form-textarea mt-1 block w-[70vw] md:w-[25vw] md:min-w-[25rem] ring-green-500"
                                        />
                                    </label>
                                </div>
                                <div className="flex flex-col p-5">
                                    {errors.name && (
                                        <span className="text-red-500 text-sm">
                        - Name is required
                      </span>
                                    )}
                                    {errors.request && (
                                        <span className="text-red-500 text-sm">
                        - Comment is required
                      </span>
                                    )}
                                    {errors.email && (
                                        <span className="text-red-500 text-sm">
                        - Emal is required
                      </span>
                                    )}
                                    {errors.date && (
                                        <span className="text-red-500 text-sm">
                        - Date is required
                      </span>
                                    )}
                                    {errors.time && (
                                        <span className="text-red-500 text-sm">
                        - Time is required
                      </span>
                                    )}
                                </div>
                                <div className="mx-auto w-full text-center mb-32 lg:mb-0">
                                    <button
                                        className="text-white bg-red-600 hover:bg-opacity-70 py-2 px-4 cursor-pointer rounded focus:outline-none mx-10 "
                                        onClick={() => {
                                            setActive(false);
                                            setRequestType("");
                                        }}
                                    >
                                        Back
                                    </button>
                                    <input
                                        type="submit"
                                        className="shadow bg-greens hover:bg-opacity-70 focus:outline-none text-white mx-10 font-bold py-2 px-4 cursor-pointer rounded"
                                    />
                                </div>
                            </div>
                        </form>
                    )}
                </motion.div>
            </AnimatePresence>
        )}
    </motion.div>
  );
}

export const getStaticProps: GetStaticProps = async ({  }) => {
  const coachQuery = `
  *[_type=="coaching"]{
    _id,
    title,
    mainImage,
    headerText,
    themes,
    format,
    body
  }`;

  const guidanceQuery = `
  *[_type=="guidance"]{
    _id,
    title,
    mainImage,
    secondaryImage,
    headerText,
    body
  }`;

  const testimonialQuery = `
  *[_type=="coachingTestimonials"]{
    _id,
    name,
    body,
  }`;

  const meditationQuery = `
  *[_type=="meditation"]{
    _id,
    mainImage,
    body,
    header
  }`;

  const leelaQuery = `
  *[_type=="leela"]{
      _id,
      title,
      backgroundImage,
      body,
      certImage,
      firstTestimonial
  }`;

  const leelaTestimonialsQuery = `
  *[_type=="leelaTestimonials"]{
      _id,
      title,
      image,
      body,
  }`;

  const guidancePosts = await sanityClient.fetch(guidanceQuery);
  const posts = await sanityClient.fetch(coachQuery);
  const testimonialPosts = await sanityClient.fetch(testimonialQuery);
  const meditationPosts = await sanityClient.fetch(meditationQuery);
  const leelaPosts = await sanityClient.fetch(leelaQuery);
  const leelaTestimonialsPosts = await sanityClient.fetch(
    leelaTestimonialsQuery
  );

  return {
    props: {
      guidancePosts,
      posts, testimonialPosts,
      meditationPosts,
      leelaPosts,
      leelaTestimonialsPosts,
    },
    revalidate: 60,
  };
};
