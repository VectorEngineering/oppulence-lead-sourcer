import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramApplicationUpdateManyMutationInputSchema } from '../inputTypeSchemas/ProgramApplicationUpdateManyMutationInputSchema'
import { ProgramApplicationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ProgramApplicationUncheckedUpdateManyInputSchema'
import { ProgramApplicationWhereInputSchema } from '../inputTypeSchemas/ProgramApplicationWhereInputSchema'

export const ProgramApplicationUpdateManyArgsSchema: z.ZodType<Prisma.ProgramApplicationUpdateManyArgs> = z
    .object({
        data: z.union([ProgramApplicationUpdateManyMutationInputSchema, ProgramApplicationUncheckedUpdateManyInputSchema]),
        where: ProgramApplicationWhereInputSchema.optional()
    })
    .strict()

export default ProgramApplicationUpdateManyArgsSchema
