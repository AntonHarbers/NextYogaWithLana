import {GetStaticProps} from "next"
import {sanityClient} from '../sanity';
import PortableText from "react-portable-text"
import {BlogPost, HomePost} from "../typings"
import {motion} from "framer-motion"
import {HomeIntroSection} from "../components/HomeComponents/homeIntroSection";
import {HomeMidSection} from "../components/HomeComponents/homeMidSection";
import HomeBlogSection from "../components/HomeComponents/homeBlogSection";

interface Props {
  posts: [HomePost],
  blogPosts: [BlogPost]
}

export default function Home({posts, blogPosts}: Props) {
    return (
        <motion.div className="flex flex-col items-center m-auto w-full py-2"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ease: "easeInOut", duration: 1}}
        >
            <HomeIntroSection homePosts={posts}/>
            <HomeMidSection posts={posts} />
            <HomeBlogSection blogPosts={blogPosts} />
        </motion.div>
    )
}


export const getStaticProps: GetStaticProps = async ({params}) => {
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



