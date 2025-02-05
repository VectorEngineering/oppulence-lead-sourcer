import 'dotenv-flow/config'

import { prisma } from '@dub/prisma-oppulence'

async function main() {
  const workspaces = await prisma.project.findMany({
    select: {
      slug: true,
      plan: true,
      usage: true,
      _count: {
        select: {
          domains: true,
        },
      },
    },
    orderBy: {
      usage: 'desc',
    },
    take: 100,
  })
  console.table(workspaces, ['slug', 'plan', 'usage', '_count'])
}

main()
