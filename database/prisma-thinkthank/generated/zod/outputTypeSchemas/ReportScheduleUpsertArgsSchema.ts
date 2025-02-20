import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportScheduleIncludeSchema } from '../inputTypeSchemas/ReportScheduleIncludeSchema'
import { ReportScheduleWhereUniqueInputSchema } from '../inputTypeSchemas/ReportScheduleWhereUniqueInputSchema'
import { ReportScheduleCreateInputSchema } from '../inputTypeSchemas/ReportScheduleCreateInputSchema'
import { ReportScheduleUncheckedCreateInputSchema } from '../inputTypeSchemas/ReportScheduleUncheckedCreateInputSchema'
import { ReportScheduleUpdateInputSchema } from '../inputTypeSchemas/ReportScheduleUpdateInputSchema'
import { ReportScheduleUncheckedUpdateInputSchema } from '../inputTypeSchemas/ReportScheduleUncheckedUpdateInputSchema'
import { ReportArgsSchema } from '../outputTypeSchemas/ReportArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportScheduleSelectSchema: z.ZodType<Prisma.ReportScheduleSelect> = z
    .object({
        id: z.boolean().optional(),
        reportId: z.boolean().optional(),
        frequency: z.boolean().optional(),
        dayOfWeek: z.boolean().optional(),
        dayOfMonth: z.boolean().optional(),
        hour: z.boolean().optional(),
        minute: z.boolean().optional(),
        isActive: z.boolean().optional(),
        lastRun: z.boolean().optional(),
        nextRun: z.boolean().optional(),
        report: z.union([z.boolean(), z.lazy(() => ReportArgsSchema)]).optional()
    })
    .strict()

export const ReportScheduleUpsertArgsSchema: z.ZodType<Prisma.ReportScheduleUpsertArgs> = z
    .object({
        select: ReportScheduleSelectSchema.optional(),
        include: ReportScheduleIncludeSchema.optional(),
        where: ReportScheduleWhereUniqueInputSchema,
        create: z.union([ReportScheduleCreateInputSchema, ReportScheduleUncheckedCreateInputSchema]),
        update: z.union([ReportScheduleUpdateInputSchema, ReportScheduleUncheckedUpdateInputSchema])
    })
    .strict()

export default ReportScheduleUpsertArgsSchema
