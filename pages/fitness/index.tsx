import { GetStaticProps } from "next";
import { FitnessPost } from "../../typings";
import { AnimatePresence, motion, useScroll } from "framer-motion"
import { sanityClient, urlFor } from "../../sanity";
import PortableText from "react-portable-text";
import Image from "next/image";
import Evaluation from "./evaluation";
import Pilates from "./pilates";

interface Props {
    fitnessPosts: FitnessPost[]
}

export default function Fitness({ fitnessPosts }: Props) {

    console.log(fitnessPosts)

    // Fitness post 1 is Fitness Made Simple
    // Fitness post 2 is Evaluation
    // Fitness post 3 is reformer/Pilates

    //return <div className="w-full flex items-center text-center justify-center">Work in Progress</div>

    return (
        <motion.div className="flex flex-col items-center m-auto w-full py-10 bg-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
        >
            <div className="flex flex-row w-full items-center justify-center">
                <div className="flex flex-col items-center w-[50%]">
                    {fitnessPosts[0].headerImage &&
                        <Image src={urlFor(fitnessPosts[0].headerImage).url()} alt="" width={200} height={200} className="rounded-md my-10" />
                    }
                    <h1
                        className="font-julius font-bold text-3xl mb-5 w-[50%] mt-10 text-center "
                    >
                        {fitnessPosts[0].name}

                    </h1>
                </div>
                <PortableText
                    className=" rounded-lg w-[50%] py-10 mb-0 xl:mb-0 mr-0 xl:mr-10 p-10 text-start"
                    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                    content={fitnessPosts[0].body}
                    serializers={{
                        h1: (props: any) => (
                            <h1 className="text-xl my-2" {...props} />
                        ),
                        normal: (props: any) => (
                            <h1
                                className=" text-xl my-2 text-greens font-julius"
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
            </div>

            <div className="flex flex-row items-center justify-center my-10">
                <PortableText
                    className=" rounded-lg w-[50%]  py-10 mb-0 xl:mb-0 mr-0 xl:mr-10 p-10 text-start"
                    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                    content={fitnessPosts[0].subBody}
                    serializers={{
                        h1: (props: any) => (
                            <h1 className="text-xl my-2" {...props} />
                        ),
                        normal: (props: any) => (
                            <h1
                                className=" text-xl my-2 text-greens font-julius"
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
                <div className="flex flex-col items-center ">
                    {fitnessPosts[0].footerImage &&
                        <Image src={urlFor(fitnessPosts[0].footerImage).url()} alt="" width={200} height={200} className="rounded-md my-5" />
                    }
                    <h1
                        className="font-julius font-bold text-2xl mb-5 w-[50%] mt-10 text-center "
                    >            {fitnessPosts[0].subtitle}
                    </h1>
                </div>

            </div>



            {fitnessPosts[1] &&
                <Evaluation fitnessPost={fitnessPosts[1]} />
            }

            {fitnessPosts[2] &&
                <Pilates fitnessPost={fitnessPosts[2]} />
            }
        </motion.div>
    )
}



export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `
    *[_type=="fitness"]{
      _id,
      name,
      headerImage,
      body,
      subtitle,
      subBody,
      footerImage
    }`;

    const fitnessPosts = await sanityClient.fetch(query)

    return {
        props: {
            fitnessPosts,
        },
        revalidate: 60,
    }
}



