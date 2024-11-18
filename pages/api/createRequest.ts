// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sanityClient from "@sanity/client"

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === 'production',
    token: process.env.SANITY_API_TOKEN,
}

const client = sanityClient(config)

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { type, name, email, request, date, time  } = JSON.parse(req.body)

    try {
        await client.create({
            _type: 'Request',
            type,
            name,
            email,
            request,
            date,
            time
        })
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong', error });
    }
    return res.status(200).json({ message: 'Comment Submitted' })
}
