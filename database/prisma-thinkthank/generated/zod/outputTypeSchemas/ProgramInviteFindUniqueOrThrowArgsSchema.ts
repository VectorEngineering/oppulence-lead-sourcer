import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramInviteIncludeSchema } from '../inputTypeSchemas/ProgramInviteIncludeSchema'
import { ProgramInviteWhereUniqueInputSchema } from '../inputTypeSchemas/ProgramInviteWhereUniqueInputSchema'
import { ProgramArgsSchema } from '../outputTypeSchemas/ProgramArgsSchema'
import { LinkArgsSchema } from '../outputTypeSchemas/LinkArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProgramInviteSelectSchema: z.ZodType<Prisma.ProgramInviteSelect> = z
    .object({
        id: z.boolean().optional(),
        programId: z.boolean().optional(),
        email: z.boolean().optional(),
        linkId: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        program: z.union([z.boolean(), z.lazy(() => ProgramArgsSchema)]).optional(),
        link: z.union([z.boolean(), z.lazy(() => LinkArgsSchema)]).optional()
    })
    .strict()

export const ProgramInviteFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProgramInviteFindUniqueOrThrowArgs> = z
    .object({
        select: ProgramInviteSelectSchema.optional(),
        include: ProgramInviteIncludeSchema.optional(),
        where: ProgramInviteWhereUniqueInputSchema
    })
    .strict()

export default ProgramInviteFindUniqueOrThrowArgsSchema
