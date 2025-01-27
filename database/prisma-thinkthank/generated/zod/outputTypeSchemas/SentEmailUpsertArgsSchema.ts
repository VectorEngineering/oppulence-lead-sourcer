import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { SentEmailIncludeSchema } from '../inputTypeSchemas/SentEmailIncludeSchema'
import { SentEmailWhereUniqueInputSchema } from '../inputTypeSchemas/SentEmailWhereUniqueInputSchema'
import { SentEmailCreateInputSchema } from '../inputTypeSchemas/SentEmailCreateInputSchema'
import { SentEmailUncheckedCreateInputSchema } from '../inputTypeSchemas/SentEmailUncheckedCreateInputSchema'
import { SentEmailUpdateInputSchema } from '../inputTypeSchemas/SentEmailUpdateInputSchema'
import { SentEmailUncheckedUpdateInputSchema } from '../inputTypeSchemas/SentEmailUncheckedUpdateInputSchema'
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

export const SentEmailUpsertArgsSchema: z.ZodType<Prisma.SentEmailUpsertArgs> = z
    .object({
        select: SentEmailSelectSchema.optional(),
        include: SentEmailIncludeSchema.optional(),
        where: SentEmailWhereUniqueInputSchema,
        create: z.union([SentEmailCreateInputSchema, SentEmailUncheckedCreateInputSchema]),
        update: z.union([SentEmailUpdateInputSchema, SentEmailUncheckedUpdateInputSchema])
    })
    .strict()

export default SentEmailUpsertArgsSchema
