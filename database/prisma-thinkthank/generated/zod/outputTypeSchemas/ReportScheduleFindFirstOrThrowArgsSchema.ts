import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportScheduleIncludeSchema } from '../inputTypeSchemas/ReportScheduleIncludeSchema'
import { ReportScheduleWhereInputSchema } from '../inputTypeSchemas/ReportScheduleWhereInputSchema'
import { ReportScheduleOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReportScheduleOrderByWithRelationInputSchema'
import { ReportScheduleWhereUniqueInputSchema } from '../inputTypeSchemas/ReportScheduleWhereUniqueInputSchema'
import { ReportScheduleScalarFieldEnumSchema } from '../inputTypeSchemas/ReportScheduleScalarFieldEnumSchema'
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

export const ReportScheduleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ReportScheduleFindFirstOrThrowArgs> = z
    .object({
        select: ReportScheduleSelectSchema.optional(),
        include: ReportScheduleIncludeSchema.optional(),
        where: ReportScheduleWhereInputSchema.optional(),
        orderBy: z.union([ReportScheduleOrderByWithRelationInputSchema.array(), ReportScheduleOrderByWithRelationInputSchema]).optional(),
        cursor: ReportScheduleWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([ReportScheduleScalarFieldEnumSchema, ReportScheduleScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default ReportScheduleFindFirstOrThrowArgsSchema
