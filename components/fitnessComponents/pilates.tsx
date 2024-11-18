import React from 'react'
import { FitnessPost } from '../../typings'
import Image from 'next/image'
import PortableText from 'react-portable-text'
import { urlFor } from '../../sanity'

export default function Pilates({ fitnessPost }: { fitnessPost: FitnessPost }) {
    return (
        <div className='flex flex-col w-full items-center gap-5 bg-secondary py-10'>
            <h1
                className="font-julius font-bold text-5xl mb-5 w-[50%] mt-10 text-center "
            >
                {fitnessPost.name}

            </h1>


            <div className='flex flex-col xl:flex-row justify-center items-center'>

                {fitnessPost.footerImage &&
                    <div className='flex relative min-w-[20rem]  h-[30rem] mb-10 xl:mb-0 xl:h-[30rem] rounded-md border-white border-2'>
                        <Image src={urlFor(fitnessPost.footerImage).url()} alt="" layout="fill" objectFit="contain" />
                    </div>
                }
                <PortableText
                    className="w-[80%] xl:w-[30%] rounded-lg mr-0 xl:ml-10 text-center"
                    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                    content={fitnessPost.body}
                    serializers={{
                        h1: (props: any) => (
                            <h1 className="text-xl my-2" {...props} />
                        ),
                        normal: (props: any) => (
                            <h1
                                className=" text-xl text-greens font-julius leading-8"
                                {...props}
                            />
                        ),
                        h2: (props: any) => (
                            <h1
                                className="text-4xl text-center font-bold"
                                {...props}
                            />
                        ),
                    }}
                />

            </div>
            {/* {fitnessPost.headerImage &&
                <Image src={urlFor(fitnessPost.headerImage).url()} alt="" width={400} height={200} className="rounded-md my-5" />
            } */}
        </div>
    )
}
