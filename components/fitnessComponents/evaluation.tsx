import PortableText from "react-portable-text";
import { FitnessPost } from "../../typings";
import Image from "next/image";
import { urlFor } from "../../sanity";
import { useState } from "react";

export default function Evaluation({ fitnessPost }: { fitnessPost: FitnessPost }) {
    const [show, setShow] = useState(true)
    return (
        <div className="flex flex-col w-full items-center bg-greens">
            {fitnessPost.headerImage &&
                <Image src={urlFor(fitnessPost.headerImage).url()} alt="" width={200} height={200} className="rounded-full my-10" />
            }
            <h1
                className="font-julius font-bold text-3xl mb-5 xl:w-[50%] mt-10 text-center select-none cursor-pointer text-white hover:text-secondary"
                onClick={() => setShow(!show)}
            >
                {fitnessPost.name}

            </h1>
            {show && <PortableText
                className="w-[90%] xl:w-[70%] rounded-lg py-10 mb-0 xl:mb-0 mr-0 xl:mr-10 xl:p-10 text-start"
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                content={fitnessPost.body}
                serializers={{
                    h1: (props: any) => (
                        <h1 className="text-xl my-2" {...props} />
                    ),
                    normal: (props: any) => (
                        <h1
                            className=" text-xl my-2 text-white font-julius"
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
            />}

        </div>
    )
}
