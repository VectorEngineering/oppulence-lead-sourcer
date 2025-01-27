import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportAccessIncludeSchema } from '../inputTypeSchemas/ReportAccessIncludeSchema'
import { ReportAccessWhereInputSchema } from '../inputTypeSchemas/ReportAccessWhereInputSchema'
import { ReportAccessOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReportAccessOrderByWithRelationInputSchema'
import { ReportAccessWhereUniqueInputSchema } from '../inputTypeSchemas/ReportAccessWhereUniqueInputSchema'
import { ReportAccessScalarFieldEnumSchema } from '../inputTypeSchemas/ReportAccessScalarFieldEnumSchema'
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

export const ReportAccessFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ReportAccessFindFirstOrThrowArgs> = z
    .object({
        select: ReportAccessSelectSchema.optional(),
        include: ReportAccessIncludeSchema.optional(),
        where: ReportAccessWhereInputSchema.optional(),
        orderBy: z.union([ReportAccessOrderByWithRelationInputSchema.array(), ReportAccessOrderByWithRelationInputSchema]).optional(),
        cursor: ReportAccessWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([ReportAccessScalarFieldEnumSchema, ReportAccessScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default ReportAccessFindFirstOrThrowArgsSchema
