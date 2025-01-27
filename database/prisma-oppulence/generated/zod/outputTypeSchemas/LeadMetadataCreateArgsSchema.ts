import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadMetadataIncludeSchema } from '../inputTypeSchemas/LeadMetadataIncludeSchema'
import { LeadMetadataCreateInputSchema } from '../inputTypeSchemas/LeadMetadataCreateInputSchema'
import { LeadMetadataUncheckedCreateInputSchema } from '../inputTypeSchemas/LeadMetadataUncheckedCreateInputSchema'
import { LeadArgsSchema } from './LeadArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadMetadataSelectSchema: z.ZodType<Prisma.LeadMetadataSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        key: z.boolean().optional(),
        value: z.boolean().optional(),
        type: z.boolean().optional(),
        category: z.boolean().optional(),
        description: z.boolean().optional(),
        isSearchable: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional()
    })
    .strict()

export const LeadMetadataCreateArgsSchema: z.ZodType<Prisma.LeadMetadataCreateArgs> = z
    .object({
        select: LeadMetadataSelectSchema.optional(),
        include: LeadMetadataIncludeSchema.optional(),
        data: z.union([LeadMetadataCreateInputSchema, LeadMetadataUncheckedCreateInputSchema])
    })
    .strict()

export default LeadMetadataCreateArgsSchema
