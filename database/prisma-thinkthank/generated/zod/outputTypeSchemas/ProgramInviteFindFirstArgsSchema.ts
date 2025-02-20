import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramInviteIncludeSchema } from '../inputTypeSchemas/ProgramInviteIncludeSchema'
import { ProgramInviteWhereInputSchema } from '../inputTypeSchemas/ProgramInviteWhereInputSchema'
import { ProgramInviteOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProgramInviteOrderByWithRelationInputSchema'
import { ProgramInviteWhereUniqueInputSchema } from '../inputTypeSchemas/ProgramInviteWhereUniqueInputSchema'
import { ProgramInviteScalarFieldEnumSchema } from '../inputTypeSchemas/ProgramInviteScalarFieldEnumSchema'
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

export const ProgramInviteFindFirstArgsSchema: z.ZodType<Prisma.ProgramInviteFindFirstArgs> = z
    .object({
        select: ProgramInviteSelectSchema.optional(),
        include: ProgramInviteIncludeSchema.optional(),
        where: ProgramInviteWhereInputSchema.optional(),
        orderBy: z.union([ProgramInviteOrderByWithRelationInputSchema.array(), ProgramInviteOrderByWithRelationInputSchema]).optional(),
        cursor: ProgramInviteWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([ProgramInviteScalarFieldEnumSchema, ProgramInviteScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default ProgramInviteFindFirstArgsSchema
