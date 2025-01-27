import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportRecipientIncludeSchema } from '../inputTypeSchemas/ReportRecipientIncludeSchema'
import { ReportRecipientUpdateInputSchema } from '../inputTypeSchemas/ReportRecipientUpdateInputSchema'
import { ReportRecipientUncheckedUpdateInputSchema } from '../inputTypeSchemas/ReportRecipientUncheckedUpdateInputSchema'
import { ReportRecipientWhereUniqueInputSchema } from '../inputTypeSchemas/ReportRecipientWhereUniqueInputSchema'
import { ReportArgsSchema } from './ReportArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportRecipientSelectSchema: z.ZodType<Prisma.ReportRecipientSelect> = z
    .object({
        id: z.boolean().optional(),
        reportId: z.boolean().optional(),
        email: z.boolean().optional(),
        name: z.boolean().optional(),
        type: z.boolean().optional(),
        isActive: z.boolean().optional(),
        report: z.union([z.boolean(), z.lazy(() => ReportArgsSchema)]).optional()
    })
    .strict()

export const ReportRecipientUpdateArgsSchema: z.ZodType<Prisma.ReportRecipientUpdateArgs> = z
    .object({
        select: ReportRecipientSelectSchema.optional(),
        include: ReportRecipientIncludeSchema.optional(),
        data: z.union([ReportRecipientUpdateInputSchema, ReportRecipientUncheckedUpdateInputSchema]),
        where: ReportRecipientWhereUniqueInputSchema
    })
    .strict()

export default ReportRecipientUpdateArgsSchema
