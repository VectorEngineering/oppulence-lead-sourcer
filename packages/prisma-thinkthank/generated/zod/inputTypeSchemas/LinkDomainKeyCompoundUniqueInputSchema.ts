import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const LinkDomainKeyCompoundUniqueInputSchema: z.ZodType<Prisma.LinkDomainKeyCompoundUniqueInput> = z
    .object({
        domain: z.string(),
        key: z.string()
    })
    .strict()

export default LinkDomainKeyCompoundUniqueInputSchema
