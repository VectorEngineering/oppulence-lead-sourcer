import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DomainUpdateManyMutationInputSchema } from '../inputTypeSchemas/DomainUpdateManyMutationInputSchema'
import { DomainUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DomainUncheckedUpdateManyInputSchema'
import { DomainWhereInputSchema } from '../inputTypeSchemas/DomainWhereInputSchema'

export const DomainUpdateManyArgsSchema: z.ZodType<Prisma.DomainUpdateManyArgs> = z
    .object({
        data: z.union([DomainUpdateManyMutationInputSchema, DomainUncheckedUpdateManyInputSchema]),
        where: DomainWhereInputSchema.optional()
    })
    .strict()

export default DomainUpdateManyArgsSchema
