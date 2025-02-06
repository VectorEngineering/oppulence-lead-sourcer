import 'dotenv-flow/config'

import { prisma } from '@dub/prisma-thinkthank'

async function main() {
    const users = await prisma.link.groupBy({
        by: ['userId'],
        where: {
            domain: 'dub.sh'
        },
        _count: {
            userId: true
        },
        orderBy: {
            _count: {
                userId: 'desc'
            }
        },
        take: 100
    })
    console.table(users)
}

main()
