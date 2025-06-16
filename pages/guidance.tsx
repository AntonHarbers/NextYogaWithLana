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
import { motion } from "framer-motion";
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

export default function Coaching({
    guidancePosts,
    posts,
    meditationPosts,
    leelaPosts,
    leelaTestimonialsPosts,
}: Props) {

    return (
        <motion.div
            className="flex flex-col m-auto w-full bg-secondary py-2 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
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
            )} />

            <motion.div
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeInOut", duration: 2.5 }}
                className=" w-[250px] mx-auto bg-secondary xl:w-[400px] flex items-center justify-center"
            >
                <img
                    className=" relative w-full my-2 xl:my-0  h-auto border-2 border-greens rounded-sm"
                    src={urlFor(guidancePosts[0].headerImage).url()!}
                    alt=""
                />
            </motion.div>

            {/* <CoachingSection coachingPosts={posts} h1={(props: any) => (
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
            )} /> */}

            <MeditationSection
                meditationPosts={meditationPosts}
                h1={(props: any) => (
                    <h1 className="text-2xl font-bold my-2" {...props} />
                )}
                normal={(props: any) => (
                    <h1 className="font-semibold text-xl my-2 py-5" {...props} />
                )}
                h2={(props: any) => (
                    <h1
                        className="text-4xl text-center font-bold py-2"
                        {...props}
                    />
                )}
            />

            {/* <LeelaSection leelaPosts={leelaPosts} h1={(props: any) => (
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
            ))} /> */}

        </motion.div>
    );
}

export const getStaticProps: GetStaticProps = async ({ }) => {
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
    headerImage,
    mainImage,
    secondaryImage,
    tertiaryImage,
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
