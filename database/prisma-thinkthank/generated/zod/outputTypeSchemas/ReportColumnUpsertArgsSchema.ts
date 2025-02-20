import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportColumnIncludeSchema } from '../inputTypeSchemas/ReportColumnIncludeSchema'
import { ReportColumnWhereUniqueInputSchema } from '../inputTypeSchemas/ReportColumnWhereUniqueInputSchema'
import { ReportColumnCreateInputSchema } from '../inputTypeSchemas/ReportColumnCreateInputSchema'
import { ReportColumnUncheckedCreateInputSchema } from '../inputTypeSchemas/ReportColumnUncheckedCreateInputSchema'
import { ReportColumnUpdateInputSchema } from '../inputTypeSchemas/ReportColumnUpdateInputSchema'
import { ReportColumnUncheckedUpdateInputSchema } from '../inputTypeSchemas/ReportColumnUncheckedUpdateInputSchema'
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

export const ReportColumnUpsertArgsSchema: z.ZodType<Prisma.ReportColumnUpsertArgs> = z
    .object({
        select: ReportColumnSelectSchema.optional(),
        include: ReportColumnIncludeSchema.optional(),
        where: ReportColumnWhereUniqueInputSchema,
        create: z.union([ReportColumnCreateInputSchema, ReportColumnUncheckedCreateInputSchema]),
        update: z.union([ReportColumnUpdateInputSchema, ReportColumnUncheckedUpdateInputSchema])
    })
    .strict()

export default ReportColumnUpsertArgsSchema
