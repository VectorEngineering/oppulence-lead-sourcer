import { prisma } from '@dub/prisma-oppulence'

export async function archiveLink({ linkId, archived }: { linkId: string; archived: boolean }) {
  return await prisma.link.update({
    where: {
      id: linkId,
    },
    data: {
      archived,
    },
  })
}
