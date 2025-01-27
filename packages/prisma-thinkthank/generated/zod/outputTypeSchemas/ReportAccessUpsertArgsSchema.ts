import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportAccessIncludeSchema } from '../inputTypeSchemas/ReportAccessIncludeSchema'
import { ReportAccessWhereUniqueInputSchema } from '../inputTypeSchemas/ReportAccessWhereUniqueInputSchema'
import { ReportAccessCreateInputSchema } from '../inputTypeSchemas/ReportAccessCreateInputSchema'
import { ReportAccessUncheckedCreateInputSchema } from '../inputTypeSchemas/ReportAccessUncheckedCreateInputSchema'
import { ReportAccessUpdateInputSchema } from '../inputTypeSchemas/ReportAccessUpdateInputSchema'
import { ReportAccessUncheckedUpdateInputSchema } from '../inputTypeSchemas/ReportAccessUncheckedUpdateInputSchema'
import { ReportArgsSchema } from './ReportArgsSchema'
import { UserArgsSchema } from './UserArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReportAccessSelectSchema: z.ZodType<Prisma.ReportAccessSelect> = z
    .object({
        id: z.boolean().optional(),
        reportId: z.boolean().optional(),
        userId: z.boolean().optional(),
        accessType: z.boolean().optional(),
        report: z.union([z.boolean(), z.lazy(() => ReportArgsSchema)]).optional(),
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional()
    })
    .strict()

export const ReportAccessUpsertArgsSchema: z.ZodType<Prisma.ReportAccessUpsertArgs> = z
    .object({
        select: ReportAccessSelectSchema.optional(),
        include: ReportAccessIncludeSchema.optional(),
        where: ReportAccessWhereUniqueInputSchema,
        create: z.union([ReportAccessCreateInputSchema, ReportAccessUncheckedCreateInputSchema]),
        update: z.union([ReportAccessUpdateInputSchema, ReportAccessUncheckedUpdateInputSchema])
    })
    .strict()

export default ReportAccessUpsertArgsSchema
