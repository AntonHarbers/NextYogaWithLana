import React from 'react'
import { FitnessPost } from '../../typings'
import Image from 'next/image'
import PortableText from 'react-portable-text'
import { urlFor } from '../../sanity'

export default function Pilates({ fitnessPost }: { fitnessPost: FitnessPost }) {
    return (
        <div className='flex flex-col w-full items-center gap-5 bg-secondary py-10'>
            {fitnessPost.headerImage &&
                <Image src={urlFor(fitnessPost.headerImage).url()} alt="" width={400} height={200} className="rounded-md my-5" />
            }
            <h1
                className="font-julius font-bold text-3xl mb-5 w-[50%] mt-10 text-center "
            >
                {fitnessPost.name}

            </h1>
            <div className='flex flex-col xl:flex-row justify-center items-center'>
                <PortableText
                    className="w-[90%] xl:w-[50%] rounded-lg mb-0 xl:mb-0 mr-0 xl:mr-10 text-start"
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
                {fitnessPost.footerImage &&
                    <Image src={urlFor(fitnessPost.footerImage).url()} alt="" width={200} height={200} className="rounded-md my-5" />
                }
            </div>

        </div>
    )
}
