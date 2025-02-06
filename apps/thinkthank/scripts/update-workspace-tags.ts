import 'dotenv-flow/config'

import { prisma } from '@dub/prisma-thinkthank'
import { INFINITY_NUMBER } from '@dub/utils'

async function main() {
    const workspaces = await prisma.project.updateMany({
        where: {
            plan: {
                notIn: ['free', 'pro']
            }
        },
        data: {
            tagsLimit: INFINITY_NUMBER
        }
    })

    console.table(workspaces)
}

main()
