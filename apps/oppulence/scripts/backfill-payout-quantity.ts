import 'dotenv-flow/config'

import { prisma } from '@dub/prisma-oppulence'

async function main() {
  const payouts = await prisma.payout.findMany({
    where: {
      quantity: null,
      type: 'sales',
    },
    select: {
      id: true,
      _count: {
        select: {
          sales: true,
        },
      },
    },
  })

  // Update the quantity for each payout
  for (const payout of payouts) {
    await prisma.payout.update({
      where: { id: payout.id },
      data: { quantity: payout._count.sales },
    })
  }
}

main()
