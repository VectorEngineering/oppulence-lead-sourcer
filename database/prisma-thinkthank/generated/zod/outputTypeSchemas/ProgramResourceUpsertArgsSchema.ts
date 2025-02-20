import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramResourceIncludeSchema } from '../inputTypeSchemas/ProgramResourceIncludeSchema'
import { ProgramResourceWhereUniqueInputSchema } from '../inputTypeSchemas/ProgramResourceWhereUniqueInputSchema'
import { ProgramResourceCreateInputSchema } from '../inputTypeSchemas/ProgramResourceCreateInputSchema'
import { ProgramResourceUncheckedCreateInputSchema } from '../inputTypeSchemas/ProgramResourceUncheckedCreateInputSchema'
import { ProgramResourceUpdateInputSchema } from '../inputTypeSchemas/ProgramResourceUpdateInputSchema'
import { ProgramResourceUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProgramResourceUncheckedUpdateInputSchema'
import { ProgramArgsSchema } from '../outputTypeSchemas/ProgramArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProgramResourceSelectSchema: z.ZodType<Prisma.ProgramResourceSelect> = z
    .object({
        id: z.boolean().optional(),
        programId: z.boolean().optional(),
        type: z.boolean().optional(),
        name: z.boolean().optional(),
        url: z.boolean().optional(),
        size: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        program: z.union([z.boolean(), z.lazy(() => ProgramArgsSchema)]).optional()
    })
    .strict()

export const ProgramResourceUpsertArgsSchema: z.ZodType<Prisma.ProgramResourceUpsertArgs> = z
    .object({
        select: ProgramResourceSelectSchema.optional(),
        include: ProgramResourceIncludeSchema.optional(),
        where: ProgramResourceWhereUniqueInputSchema,
        create: z.union([ProgramResourceCreateInputSchema, ProgramResourceUncheckedCreateInputSchema]),
        update: z.union([ProgramResourceUpdateInputSchema, ProgramResourceUncheckedUpdateInputSchema])
    })
    .strict()

export default ProgramResourceUpsertArgsSchema
