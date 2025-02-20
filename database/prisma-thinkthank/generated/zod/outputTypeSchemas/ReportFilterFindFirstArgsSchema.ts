import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportFilterIncludeSchema } from '../inputTypeSchemas/ReportFilterIncludeSchema'
import { ReportFilterWhereInputSchema } from '../inputTypeSchemas/ReportFilterWhereInputSchema'
import { ReportFilterOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReportFilterOrderByWithRelationInputSchema'
import { ReportFilterWhereUniqueInputSchema } from '../inputTypeSchemas/ReportFilterWhereUniqueInputSchema'
import { ReportFilterScalarFieldEnumSchema } from '../inputTypeSchemas/ReportFilterScalarFieldEnumSchema'
import { ReportArgsSchema } from '../outputTypeSchemas/ReportArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportFilterSelectSchema: z.ZodType<Prisma.ReportFilterSelect> = z
    .object({
        id: z.boolean().optional(),
        reportId: z.boolean().optional(),
        field: z.boolean().optional(),
        operator: z.boolean().optional(),
        value: z.boolean().optional(),
        valueType: z.boolean().optional(),
        group: z.boolean().optional(),
        position: z.boolean().optional(),
        report: z.union([z.boolean(), z.lazy(() => ReportArgsSchema)]).optional()
    })
    .strict()

export const ReportFilterFindFirstArgsSchema: z.ZodType<Prisma.ReportFilterFindFirstArgs> = z
    .object({
        select: ReportFilterSelectSchema.optional(),
        include: ReportFilterIncludeSchema.optional(),
        where: ReportFilterWhereInputSchema.optional(),
        orderBy: z.union([ReportFilterOrderByWithRelationInputSchema.array(), ReportFilterOrderByWithRelationInputSchema]).optional(),
        cursor: ReportFilterWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([ReportFilterScalarFieldEnumSchema, ReportFilterScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default ReportFilterFindFirstArgsSchema
