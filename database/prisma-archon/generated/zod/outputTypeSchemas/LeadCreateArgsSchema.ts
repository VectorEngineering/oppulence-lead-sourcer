import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadIncludeSchema } from '../inputTypeSchemas/LeadIncludeSchema'
import { LeadCreateInputSchema } from '../inputTypeSchemas/LeadCreateInputSchema'
import { LeadUncheckedCreateInputSchema } from '../inputTypeSchemas/LeadUncheckedCreateInputSchema'
import { EndpointArgsSchema } from './EndpointArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadSelectSchema: z.ZodType<Prisma.LeadSelect> = z
    .object({
        id: z.boolean().optional(),
        endpointId: z.boolean().optional(),
        data: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        endpoint: z.union([z.boolean(), z.lazy(() => EndpointArgsSchema)]).optional()
    })
    .strict()

export const LeadCreateArgsSchema: z.ZodType<Prisma.LeadCreateArgs> = z
    .object({
        select: LeadSelectSchema.optional(),
        include: LeadIncludeSchema.optional(),
        data: z.union([LeadCreateInputSchema, LeadUncheckedCreateInputSchema])
    })
    .strict()

export default LeadCreateArgsSchema
