import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramApplicationIncludeSchema } from '../inputTypeSchemas/ProgramApplicationIncludeSchema'
import { ProgramApplicationWhereUniqueInputSchema } from '../inputTypeSchemas/ProgramApplicationWhereUniqueInputSchema'
import { PartnerArgsSchema } from '../outputTypeSchemas/PartnerArgsSchema'
import { ProgramArgsSchema } from '../outputTypeSchemas/ProgramArgsSchema'
import { ProgramEnrollmentArgsSchema } from '../outputTypeSchemas/ProgramEnrollmentArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProgramApplicationSelectSchema: z.ZodType<Prisma.ProgramApplicationSelect> = z
    .object({
        id: z.boolean().optional(),
        programId: z.boolean().optional(),
        partnerId: z.boolean().optional(),
        name: z.boolean().optional(),
        email: z.boolean().optional(),
        proposal: z.boolean().optional(),
        website: z.boolean().optional(),
        comments: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        partner: z.union([z.boolean(), z.lazy(() => PartnerArgsSchema)]).optional(),
        program: z.union([z.boolean(), z.lazy(() => ProgramArgsSchema)]).optional(),
        enrollment: z.union([z.boolean(), z.lazy(() => ProgramEnrollmentArgsSchema)]).optional()
    })
    .strict()

export const ProgramApplicationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProgramApplicationFindUniqueOrThrowArgs> = z
    .object({
        select: ProgramApplicationSelectSchema.optional(),
        include: ProgramApplicationIncludeSchema.optional(),
        where: ProgramApplicationWhereUniqueInputSchema
    })
    .strict()

export default ProgramApplicationFindUniqueOrThrowArgsSchema
