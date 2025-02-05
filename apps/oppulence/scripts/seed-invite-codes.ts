import 'dotenv-flow/config'

import { prisma } from '@dub/prisma-oppulence'
import { nanoid } from '@dub/utils'

async function main() {
  const projects = await prisma.project.findMany({
    select: {
      id: true,
    },
    where: {
      inviteCode: null,
    },
    take: 500,
  })

  const res = await Promise.all(
    projects.map(async ({ id }) => {
      return prisma.project.update({
        where: {
          id,
        },
        data: {
          inviteCode: nanoid(24),
        },
      })
    })
  )

  console.log(res.length)
}

main()
