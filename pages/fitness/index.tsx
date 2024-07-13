import { GetStaticProps } from "next";
import { FitnessPost } from "../../typings";
import { AnimatePresence, motion, useScroll } from "framer-motion"
import { sanityClient } from "../../sanity";

interface Props {
    fitnessPost: FitnessPost
}

export default function Fitness({ fitnessPost }: Props) {
    return (
        <motion.div className="flex flex-col items-center m-auto w-full py-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
        >
            Hello World
        </motion.div>
    )
}



export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `
    *[_type=="fitness"]{
      _id,
      title,
      headerImage,
      body,
      subtitle,
      subBody,
      footerImage
    }`;

    const fitness = await sanityClient.fetch(query)

    return {
        props: {
            fitness,
        },
        revalidate: 60,
    }
}



