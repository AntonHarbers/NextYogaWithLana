import PortableText from "react-portable-text";
import { FitnessPost } from "../../typings";
import Image from "next/image";
import { urlFor } from "../../sanity";

export default function Evaluation({ fitnessPost }: { fitnessPost: FitnessPost }) {
    return (
        <div>
            {fitnessPost.headerImage &&
                <Image src={urlFor(fitnessPost.headerImage).url()} alt="" width={200} height={200} className="rounded-full my-5" />
            }
            <h1
                className="font-julius font-bold text-3xl mb-5 w-[50%] mt-10 text-center "
            >
                {fitnessPost.name}

            </h1>
            <PortableText
                className="w-full rounded-lg py-10 mb-0 xl:mb-0 mr-0 xl:mr-10 p-10 text-center"
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                content={fitnessPost.body}
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
    )
}
