import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramResourceIncludeSchema } from '../inputTypeSchemas/ProgramResourceIncludeSchema'
import { ProgramResourceWhereInputSchema } from '../inputTypeSchemas/ProgramResourceWhereInputSchema'
import { ProgramResourceOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProgramResourceOrderByWithRelationInputSchema'
import { ProgramResourceWhereUniqueInputSchema } from '../inputTypeSchemas/ProgramResourceWhereUniqueInputSchema'
import { ProgramResourceScalarFieldEnumSchema } from '../inputTypeSchemas/ProgramResourceScalarFieldEnumSchema'
import { ProgramArgsSchema } from './ProgramArgsSchema'
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

export const ProgramResourceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProgramResourceFindFirstOrThrowArgs> = z
    .object({
        select: ProgramResourceSelectSchema.optional(),
        include: ProgramResourceIncludeSchema.optional(),
        where: ProgramResourceWhereInputSchema.optional(),
        orderBy: z.union([ProgramResourceOrderByWithRelationInputSchema.array(), ProgramResourceOrderByWithRelationInputSchema]).optional(),
        cursor: ProgramResourceWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([ProgramResourceScalarFieldEnumSchema, ProgramResourceScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default ProgramResourceFindFirstOrThrowArgsSchema
