import 'dotenv-flow/config'

import { prisma } from '@dub/prisma-thinkthank'
import { truncate } from '@dub/utils'

const utmTag = 'utm_campaign'

async function main() {
    const utms = await prisma.link.groupBy({
        where: {
            [utmTag]: {
                not: null
            }
        },
        by: [utmTag],
        _count: {
            [utmTag]: true
        },
        take: 100,
        orderBy: {
            _count: {
                [utmTag]: 'desc'
            }
        }
    })

    console.table(
        utms.map((utm) => ({
            [utmTag]: truncate(utm[utmTag], 24),
            count: utm._count[utmTag]
        }))
    )
}

main()
