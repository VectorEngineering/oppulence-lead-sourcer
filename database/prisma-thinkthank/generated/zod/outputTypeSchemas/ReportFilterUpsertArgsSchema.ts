import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportFilterIncludeSchema } from '../inputTypeSchemas/ReportFilterIncludeSchema'
import { ReportFilterWhereUniqueInputSchema } from '../inputTypeSchemas/ReportFilterWhereUniqueInputSchema'
import { ReportFilterCreateInputSchema } from '../inputTypeSchemas/ReportFilterCreateInputSchema'
import { ReportFilterUncheckedCreateInputSchema } from '../inputTypeSchemas/ReportFilterUncheckedCreateInputSchema'
import { ReportFilterUpdateInputSchema } from '../inputTypeSchemas/ReportFilterUpdateInputSchema'
import { ReportFilterUncheckedUpdateInputSchema } from '../inputTypeSchemas/ReportFilterUncheckedUpdateInputSchema'
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

export const ReportFilterUpsertArgsSchema: z.ZodType<Prisma.ReportFilterUpsertArgs> = z
    .object({
        select: ReportFilterSelectSchema.optional(),
        include: ReportFilterIncludeSchema.optional(),
        where: ReportFilterWhereUniqueInputSchema,
        create: z.union([ReportFilterCreateInputSchema, ReportFilterUncheckedCreateInputSchema]),
        update: z.union([ReportFilterUpdateInputSchema, ReportFilterUncheckedUpdateInputSchema])
    })
    .strict()

export default ReportFilterUpsertArgsSchema
