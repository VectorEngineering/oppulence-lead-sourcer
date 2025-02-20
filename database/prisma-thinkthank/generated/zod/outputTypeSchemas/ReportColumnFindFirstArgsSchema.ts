import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportColumnIncludeSchema } from '../inputTypeSchemas/ReportColumnIncludeSchema'
import { ReportColumnWhereInputSchema } from '../inputTypeSchemas/ReportColumnWhereInputSchema'
import { ReportColumnOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReportColumnOrderByWithRelationInputSchema'
import { ReportColumnWhereUniqueInputSchema } from '../inputTypeSchemas/ReportColumnWhereUniqueInputSchema'
import { ReportColumnScalarFieldEnumSchema } from '../inputTypeSchemas/ReportColumnScalarFieldEnumSchema'
import { ReportArgsSchema } from '../outputTypeSchemas/ReportArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportColumnSelectSchema: z.ZodType<Prisma.ReportColumnSelect> = z
    .object({
        id: z.boolean().optional(),
        reportId: z.boolean().optional(),
        field: z.boolean().optional(),
        label: z.boolean().optional(),
        width: z.boolean().optional(),
        position: z.boolean().optional(),
        isVisible: z.boolean().optional(),
        format: z.boolean().optional(),
        report: z.union([z.boolean(), z.lazy(() => ReportArgsSchema)]).optional()
    })
    .strict()

export const ReportColumnFindFirstArgsSchema: z.ZodType<Prisma.ReportColumnFindFirstArgs> = z
    .object({
        select: ReportColumnSelectSchema.optional(),
        include: ReportColumnIncludeSchema.optional(),
        where: ReportColumnWhereInputSchema.optional(),
        orderBy: z.union([ReportColumnOrderByWithRelationInputSchema.array(), ReportColumnOrderByWithRelationInputSchema]).optional(),
        cursor: ReportColumnWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([ReportColumnScalarFieldEnumSchema, ReportColumnScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default ReportColumnFindFirstArgsSchema
