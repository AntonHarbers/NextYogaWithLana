import { GetStaticProps } from "next";
import { sanityClient, urlFor } from "../sanity";
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
        console.log(data);
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setSubmitted(false);
      });
  };

  console.log(guidancePosts[0])
  return (
    <motion.div
      className="flex flex-col m-auto w-full py-2 justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      <div id="guidance section" className=" h-auto bg-secondary flex flex-col">
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeInOut", duration: 2 }}
          id="headerText"
          className="mx-auto max-w-[90%] mt-10 mx:my-10 text-8xl font-bold text-greens font-Corinthia text-center "
        >
          {guidancePosts[0].title}
        </motion.div>


        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeInOut", duration: 2.5 }}
          id="leftSide"
          className=" w-[90%] mx-auto flex flex-col justify-center my-2 mx:my-10"
        >

          <PortableText
            className="w-full rounded-lg py-10 bg-greens xl:mr-10 p-4 mx:p-10 text-center"
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={guidancePosts[0].headerText}
            serializers={{
              h1: (props: any) => (
                <h1 className="text-2xl font-bold my-2" {...props} />
              ),
              normal: (props: any) => (
                <h1
                  className="xl:font-semibold xl:text-2xl text-sm mb-5 text-primary font-julius"
                  {...props}
                />
              ),
              h2: (props: any) => (
                <h1
                  className="text-xl text-center font-bold py-2"
                  {...props}
                />
              ),
            }}
          />
          <div className="w-full flex flex-col xl:flex-row justify-around my-2 xl:my-10">
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeInOut", duration: 2.5 }}
              className=" w-full xl:w-1/2 flex items-center justify-center"
            >
              <img
                className=" relative w-[90%] my-2 xl:my-0 xl:w-2/3 h-auto border-8 border-greens rounded-sm"
                src={urlFor(guidancePosts[0].secondaryImage).url()!}
                alt=""
              />
            </motion.div>
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeInOut", duration: 2.5 }}
              className=" w-[80%] mx-auto xl:mx-0 xl:w-1/2 flex items-center justify-center"
            >
              <img
                className=" relative w-full xl:w-1/3 h-auto border-8 border-greens rounded-sm"
                src={urlFor(guidancePosts[0].mainImage).url()!}
                alt=""
              />
            </motion.div>

          </div>
          <PortableText
            className="w-full rounded-lg py-10 bg-greens xl:mr-10 p-4 mx:p-10 text-center leading-8 font-julius text-white text-lg"
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={guidancePosts[0].body}
            serializers={{
              h1: (props: any) => (
                <h1 className="text-2xl font-bold my-2" {...props} />
              ),
              normal: (props: any) => (
                <h1
                  className="xl:font-semibold xl:text-xl text-sm mb-5 text-primary font-julius text-start leading-10"
                  {...props}
                />
              ),
              h2: (props: any) => (
                <h1
                  className="text-xl text-center font-bold py-2"
                  {...props}
                />
              ),
            }}
          />

        </motion.div>



      </div>

      <div id="coaching section" className=" h-auto flex flex-col">
        <motion.div
          id="titletext"
          className=" text-center xl:text-start mx-auto w-5/6 text-4xl 2xl:text-5xl mb-10 font-Julius mt-20"
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", duration: 2 }}
        >
          {posts[0].title}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, ease: "easeInOut", duration: 2 }}
          id="headerText"
          className=""
        >
          <PortableText
            className="flex flex-col text-center mx-auto w-5/6 my-10 text-4xl xl:text-6xl text-greens font-Corinthia"
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={posts[0].headerText}
            serializers={{
              h1: (props: any) => (
                <h1 className="text-2xl font-bold my-2" {...props} />
              ),
              normal: (props: any) => (
                <h1
                  className="font-semibold my-2 drop-shadow-[5px_5px_5px_rgba(0,0,0,.5)]"
                  {...props}
                />
              ),
              h2: (props: any) => (
                <h1 className="text-xl font-bold my-2" {...props} />
              ),
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
          id="bodyContent"
          className="flex flex-col-reverse xl:flex-row w-5/6 justify-between mx-auto my-10"
        >
          <PortableText
            className="my-auto w-full xl:w-3/4"
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={posts[0].body}
            serializers={{
              h1: (props: any) => (
                <h1 className="text-2xl font-bold my-2" {...props} />
              ),
              normal: (props: any) => (
                <h1 className="font-semibold text-xl my-5" {...props} />
              ),
              h2: (props: any) => (
                <h1 className="text-xl font-bold my-5" {...props} />
              ),
            }}
          />
          <motion.img
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 2 }}
            className=" mb-10 xl:mb-0 mx-auto xl:mx-0 h-[20rem] xl:h-[27rem] w-auto border-r-4 border-t-4 border-greens border-opacity-50 rounded-sm"
            src={urlFor(posts[0].mainImage).url()!}
            alt=""
          />
        </motion.div>
        <button
          onClick={() => {
            setActive(!active);
            setRequestType("Coaching");
          }}
          className=" my-10 text-2xl bg-greens w-[20rem] py-5 px-10 mx-auto rounded-full text-white shadow-xl shadow-gray-600 hover:bg-opacity-80 active:shadow-lg active:bg-opacity-60 active:shadow-gray-500 transition duration-300 ease-in-out "
        >
          Sign up here
        </button>
        <div
          id="bottomContenct"
          className="flex flex-col-reverse xl:flex-row w-5/6 mx-auto justify-between my-20"
        >
          <PortableText
            className=" w-full xl:w-2/4 bg-greensLite rounded-lg mb-10 xl:mb-0 mr-0 xl:mr-10 text-center xl:text-left"
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={posts[0].themes}
            serializers={{
              h1: (props: any) => (
                <h1 className="text-2xl font-bold my-2" {...props} />
              ),
              normal: (props: any) => (
                <h1
                  className="font-semibold text-2xl my-2 px-5 py-2"
                  {...props}
                />
              ),
              h2: (props: any) => (
                <h1
                  className="text-4xl text-center font-bold py-5"
                  {...props}
                />
              ),
            }}
          />
          <PortableText
            className="w-full xl:w-2/4 rounded-lg flex flex-col justify-center mb-20 px-5 xl:pl-10"
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={posts[0].format}
            serializers={{
              h1: (props: any) => (
                <h1 className="text-2xl font-bold my-2" {...props} />
              ),
              normal: (props: any) => (
                <h1
                  className="font-semibold text-center xl:text-end text-2xl my-2 py-2 "
                  {...props}
                />
              ),
              h2: (props: any) => (
                <h1
                  className="text-4xl text-center xl:text-end font-bold py-5 "
                  {...props}
                />
              ),
            }}
          />
        </div>
      </div>

      <div
        id="meditation section"
        className=" h-auto bg-secondary flex flex-col"
      >
        <div
          id="headerText"
          className="mx-auto my-20 text-6xl text-center font-Julius"
        >
          {meditationPosts[0].header}
        </div>
        <div
          id="content"
          className="flex flex-col-reverse xl:flex-row w-5/6 mx-auto"
        >
          <div
            id="leftSide"
            className=" w-full xl:w-1/2 flex flex-col justify-center mb-10 xl:mb-0"
          >
            <PortableText
              className="w-full rounded-lg py-10"
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={meditationPosts[0].body}
              serializers={{
                h1: (props: any) => (
                  <h1 className="text-2xl font-bold my-2" {...props} />
                ),
                normal: (props: any) => (
                  <h1 className="font-semibold text-xl my-2 py-5" {...props} />
                ),
                h2: (props: any) => (
                  <h1
                    className="text-4xl text-center font-bold py-2"
                    {...props}
                  />
                ),
              }}
            />
            <button
              onClick={() => {
                setRequestType("Guided Meditation");
                setActive(!active);
                console.log(requestType);
              }}
              className=" my-10 text-2xl bg-primary w-[20rem] py-5 px-10 mx-auto rounded-full text-text shadow-xl shadow-gray-600 hover:bg-opacity-80 active:shadow-lg active:bg-opacity-60 active:shadow-gray-500 transition duration-300 ease-in-out "
            >
              Sign up here
            </button>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className=" w-full xl:w-1/2 flex justify-end"
          >
            <AnimatePresence>
              <motion.img
                animate={{ top: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className=" relative w-auto h-5/6"
                src={urlFor(meditationPosts[0].mainImage).url()!}
                alt=""
              />
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <div id="leela section" className=" h-auto bg-greensLite flex flex-col ">
        <h1 className="text-center my-20 mx-10 xl:m-20 text-6xl font-Julius">
          LEELA - THE GAME OF SELF-KNOWLEDGE
        </h1>
        <div
          id="leelaGameContent"
          className="flex flex-col xl:flex-row w-5/6 items-center justify-between mx-auto"
        >
          <div className="w-full xl:w-3/4 flex items-center justify-between">
            <img
              className="w-full h-auto border-r-4 border-t-4 border-greens border-opacity-50 rounded-sm"
              src={urlFor(leelaPosts[0].backgroundImage).url()!}
              alt=""
            />
          </div>
          <div className="w-full xl:w-2/4 flex flex-col items-center justify-between text-center">
            <PortableText
              className="w-full xl:w-2/4"
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={leelaPosts[0].body}
              serializers={{
                h1: (props: any) => (
                  <h1 className="text-2xl font-bold my-2" {...props} />
                ),
                normal: (props: any) => (
                  <h1 className="font-semibold text-2xl my-2 py-5" {...props} />
                ),
                h2: (props: any) => (
                  <h1
                    className="text-4xl text-center font-bold py-2"
                    {...props}
                  />
                ),
              }}
            />
            <button
              onClick={() => {
                setActive(!active);
                setRequestType("Leela Game");
              }}
              className=" mt-5 mb-0 xl:my-10 text-2xl bg-greens w-[20rem] py-5 px-10 mx-auto rounded-full text-white shadow-xl shadow-gray-600 hover:bg-opacity-80 active:shadow-lg active:bg-opacity-60 active:shadow-gray-500 transition duration-300 ease-in-out "
            >
              Sign up to Play
            </button>
          </div>
        </div>
        <div
          id="testimonialsAndCertificate"
          className=" w-5/6 flex flex-col justify-between mx-auto"
        >
          <div
            id="top"
            className="flex flex-col-reverse xl:flex-row justify-center mt-20 mb-10 xl:my-32"
          >
            <div
              id="left"
              className="w-full xl:w-1/3 h-auto flex flex-col justify-center bg-greens bg-opacity-10 hover:bg-opacity-20 transition duration-300 ease-in-out rounded-lg"
            >
              <motion.h1
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-6xl font-serif w-2/3 mx-auto"
              >
                "
              </motion.h1>
              <PortableText
                className="w-2/3 mx-auto"
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                content={leelaPosts[0].firstTestimonial}
                serializers={{
                  h1: (props: any) => (
                    <h1 className="text-6xl font-serif" {...props} />
                  ),
                  normal: (props: any) => (
                    <h1
                      className="font-semibold text-xl my-2 py-1"
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
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className=" text-6xl font-serif w-2/3 mx-auto text-right"
              >
                "
              </motion.h1>
            </div>
            <div id="right" className="w-full xl:w-2/3 flex flex-col">
              <div className="my-10 xl:my-0">
                <img
                  className="w-full h-auto mx-0 xl:mx-10 border-b-4 border-l-4 border-greens border-opacity-50"
                  src={urlFor(leelaPosts[0].certImage).url()!}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div id="bot">
            {leelaTestimonialsPosts.map((post, index) => (
              <div key={index} className="flex justify-center">
                <div className="w-full mt-0 mb-10 py-10 h-auto flex flex-col justify-center bg-greens bg-opacity-10 rounded-lg hover:bg-opacity-20 transition duration-300 ease-in-out">
                  <motion.h1
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
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
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className=" text-6xl font-serif w-2/3 mx-auto text-right"
                  >
                    "
                  </motion.h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {active && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
                        {...register("name", { required: true })}
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
                        {...register("request", { required: true })}
                        className="shadow border rounded py-2 px-3 outline-none focus:ring form-textarea mt-1 block w-[70vw] md:w-[25vw] ring-green-500 md:min-w-[25rem]"
                        placeholder="Your request..."
                        rows={8}
                      />
                    </label>
                    <label className="block mb-5">
                      <span className="text-greensLite">Preferred Date</span>
                      <input
                        type="date"
                        {...register("date", { required: true })}
                        className=" text-center shadow border rounded py-2 px-3 outline-none focus:ring form-textarea mt-1 block w-[70vw] md:w-[25vw] md:min-w-[25rem] ring-green-500"
                      />
                    </label>
                    <label className="block mb-5">
                      <span className="text-greensLite">Preferred Time</span>
                      <input
                        type="time"
                        {...register("time", { required: true })}
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
  const testimonailPosts = await sanityClient.fetch(testimonialQuery);
  const meditationPosts = await sanityClient.fetch(meditationQuery);
  const leelaPosts = await sanityClient.fetch(leelaQuery);
  const leelaTestimonialsPosts = await sanityClient.fetch(
    leelaTestimonialsQuery
  );

  return {
    props: {
      guidancePosts,
      posts,
      testimonailPosts,
      meditationPosts,
      leelaPosts,
      leelaTestimonialsPosts,
    },
    revalidate: 60,
  };
};
