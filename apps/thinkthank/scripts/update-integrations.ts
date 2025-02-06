import 'dotenv-flow/config'

import { prisma } from '@dub/prisma-thinkthank'

async function main() {
    const urls = [
        {
            slug: 'raycast',
            installUrl: 'https://www.raycast.com/dubinc/dub'
        },
        {
            slug: 'zapier',
            installUrl: 'https://zapier.com/apps/dub/integrations'
        }
    ]

    for (const { slug, installUrl } of urls) {
        await prisma.integration.update({
            where: {
                slug
            },
            data: {
                installUrl
            }
        })

        console.log(`Updated ${slug} integration with install URL: ${installUrl}`)
    }
}

main()
