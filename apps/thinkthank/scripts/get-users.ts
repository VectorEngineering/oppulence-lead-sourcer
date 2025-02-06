import 'dotenv-flow/config'

import * as fs from 'fs'
import * as Papa from 'papaparse'

import { prisma } from '@dub/prisma-thinkthank'

async function main() {
    const users = await prisma.user.findMany({
        select: {
            email: true,
            name: true,
            createdAt: true
        }
    })

    console.log(users.length, 'users found')

    fs.writeFileSync('dub-users.csv', Papa.unparse(users))
}

main()
