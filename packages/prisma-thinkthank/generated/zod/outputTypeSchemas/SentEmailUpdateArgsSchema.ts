import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { SentEmailIncludeSchema } from '../inputTypeSchemas/SentEmailIncludeSchema'
import { SentEmailUpdateInputSchema } from '../inputTypeSchemas/SentEmailUpdateInputSchema'
import { SentEmailUncheckedUpdateInputSchema } from '../inputTypeSchemas/SentEmailUncheckedUpdateInputSchema'
import { SentEmailWhereUniqueInputSchema } from '../inputTypeSchemas/SentEmailWhereUniqueInputSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SentEmailSelectSchema: z.ZodType<Prisma.SentEmailSelect> = z
    .object({
        id: z.boolean().optional(),
        type: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        projectId: z.boolean().optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
    })
    .strict()

export const SentEmailUpdateArgsSchema: z.ZodType<Prisma.SentEmailUpdateArgs> = z
    .object({
        select: SentEmailSelectSchema.optional(),
        include: SentEmailIncludeSchema.optional(),
        data: z.union([SentEmailUpdateInputSchema, SentEmailUncheckedUpdateInputSchema]),
        where: SentEmailWhereUniqueInputSchema
    })
    .strict()

export default SentEmailUpdateArgsSchema
