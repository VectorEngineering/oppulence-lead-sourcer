import 'dotenv-flow/config'

import { prisma } from '@dub/prisma-oppulence'

async function main() {
  const response = await prisma.project.updateMany({
    where: {
      plan: 'business',
    },
    data: {
      domainsLimit: 40,
    },
  })

  console.log(response)
}

main()
