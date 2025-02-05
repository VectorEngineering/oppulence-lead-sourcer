import 'dotenv-flow/config'

import { prisma } from '@dub/prisma-oppulence'

const domain = 'song.fyi'

async function main() {
  const links = await prisma.link.updateMany({
    where: {
      domain,
    },
    data: {
      archived: true,
    },
  })
  console.log(links)
}

main()
