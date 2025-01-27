import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramEnrollmentWhereInputSchema } from '../inputTypeSchemas/ProgramEnrollmentWhereInputSchema'
import { ProgramEnrollmentOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProgramEnrollmentOrderByWithRelationInputSchema'
import { ProgramEnrollmentWhereUniqueInputSchema } from '../inputTypeSchemas/ProgramEnrollmentWhereUniqueInputSchema'

export const ProgramEnrollmentAggregateArgsSchema: z.ZodType<Prisma.ProgramEnrollmentAggregateArgs> = z
    .object({
        where: ProgramEnrollmentWhereInputSchema.optional(),
        orderBy: z
            .union([ProgramEnrollmentOrderByWithRelationInputSchema.array(), ProgramEnrollmentOrderByWithRelationInputSchema])
            .optional(),
        cursor: ProgramEnrollmentWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default ProgramEnrollmentAggregateArgsSchema
