import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineKpiIncludeSchema } from '../inputTypeSchemas/PipelineKpiIncludeSchema'
import { PipelineKpiWhereInputSchema } from '../inputTypeSchemas/PipelineKpiWhereInputSchema'
import { PipelineKpiOrderByWithRelationInputSchema } from '../inputTypeSchemas/PipelineKpiOrderByWithRelationInputSchema'
import { PipelineKpiWhereUniqueInputSchema } from '../inputTypeSchemas/PipelineKpiWhereUniqueInputSchema'
import { PipelineKpiScalarFieldEnumSchema } from '../inputTypeSchemas/PipelineKpiScalarFieldEnumSchema'
import { PipelineArgsSchema } from './PipelineArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PipelineKpiSelectSchema: z.ZodType<Prisma.PipelineKpiSelect> = z
    .object({
        id: z.boolean().optional(),
        pipelineId: z.boolean().optional(),
        name: z.boolean().optional(),
        type: z.boolean().optional(),
        target: z.boolean().optional(),
        current: z.boolean().optional(),
        unit: z.boolean().optional(),
        description: z.boolean().optional(),
        frequency: z.boolean().optional(),
        calculation: z.boolean().optional(),
        formula: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        pipeline: z.union([z.boolean(), z.lazy(() => PipelineArgsSchema)]).optional()
    })
    .strict()

export const PipelineKpiFindManyArgsSchema: z.ZodType<Prisma.PipelineKpiFindManyArgs> = z
    .object({
        select: PipelineKpiSelectSchema.optional(),
        include: PipelineKpiIncludeSchema.optional(),
        where: PipelineKpiWhereInputSchema.optional(),
        orderBy: z.union([PipelineKpiOrderByWithRelationInputSchema.array(), PipelineKpiOrderByWithRelationInputSchema]).optional(),
        cursor: PipelineKpiWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([PipelineKpiScalarFieldEnumSchema, PipelineKpiScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default PipelineKpiFindManyArgsSchema
