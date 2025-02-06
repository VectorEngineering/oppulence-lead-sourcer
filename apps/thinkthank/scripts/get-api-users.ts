import 'dotenv-flow/config'

import { prisma } from '@dub/prisma-thinkthank'

async function main() {
    const users = await prisma.user.findMany({
        where: {
            OR: [
                {
                    tokens: {
                        some: {}
                    }
                },
                {
                    restrictedTokens: {
                        some: {}
                    }
                }
            ]
        }
    })

    console.log(
        users
            .filter((user) => user.email)
            .map((user) => user.email)
            .join(', ')
    )
}

main()
