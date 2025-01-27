import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InstalledIntegrationWhereInputSchema } from '../inputTypeSchemas/InstalledIntegrationWhereInputSchema'
import { InstalledIntegrationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/InstalledIntegrationOrderByWithAggregationInputSchema'
import { InstalledIntegrationScalarFieldEnumSchema } from '../inputTypeSchemas/InstalledIntegrationScalarFieldEnumSchema'
import { InstalledIntegrationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/InstalledIntegrationScalarWhereWithAggregatesInputSchema'

export const InstalledIntegrationGroupByArgsSchema: z.ZodType<Prisma.InstalledIntegrationGroupByArgs> = z
    .object({
        where: InstalledIntegrationWhereInputSchema.optional(),
        orderBy: z
            .union([InstalledIntegrationOrderByWithAggregationInputSchema.array(), InstalledIntegrationOrderByWithAggregationInputSchema])
            .optional(),
        by: InstalledIntegrationScalarFieldEnumSchema.array(),
        having: InstalledIntegrationScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default InstalledIntegrationGroupByArgsSchema
