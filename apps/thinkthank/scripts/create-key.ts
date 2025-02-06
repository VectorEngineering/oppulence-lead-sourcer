// for backwards compatibility with old personal API keys

import 'dotenv-flow/config'

import { hashToken } from '@/lib/auth'
import { prisma } from '@dub/prisma-thinkthank'
import { nanoid } from '@dub/utils'

async function main() {
    const token = nanoid(24)
    console.log({ token })
    const hashedKey = await hashToken(token)
    // take first 3 and last 4 characters of the key
    const partialKey = `${token.slice(0, 3)}...${token.slice(-4)}`
    await prisma.token.create({
        data: {
            name: 'E2E Test Key',
            hashedKey,
            partialKey,
            userId: 'xxx'
        }
    })
}

main()
