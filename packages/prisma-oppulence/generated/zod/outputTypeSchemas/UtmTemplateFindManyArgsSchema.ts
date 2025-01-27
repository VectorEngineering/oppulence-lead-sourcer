import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { UtmTemplateIncludeSchema } from '../inputTypeSchemas/UtmTemplateIncludeSchema'
import { UtmTemplateWhereInputSchema } from '../inputTypeSchemas/UtmTemplateWhereInputSchema'
import { UtmTemplateOrderByWithRelationInputSchema } from '../inputTypeSchemas/UtmTemplateOrderByWithRelationInputSchema'
import { UtmTemplateWhereUniqueInputSchema } from '../inputTypeSchemas/UtmTemplateWhereUniqueInputSchema'
import { UtmTemplateScalarFieldEnumSchema } from '../inputTypeSchemas/UtmTemplateScalarFieldEnumSchema'
import { UserArgsSchema } from './UserArgsSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UtmTemplateSelectSchema: z.ZodType<Prisma.UtmTemplateSelect> = z
    .object({
        id: z.boolean().optional(),
        name: z.boolean().optional(),
        utm_source: z.boolean().optional(),
        utm_medium: z.boolean().optional(),
        utm_campaign: z.boolean().optional(),
        utm_term: z.boolean().optional(),
        utm_content: z.boolean().optional(),
        ref: z.boolean().optional(),
        userId: z.boolean().optional(),
        projectId: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
    })
    .strict()

export const UtmTemplateFindManyArgsSchema: z.ZodType<Prisma.UtmTemplateFindManyArgs> = z
    .object({
        select: UtmTemplateSelectSchema.optional(),
        include: UtmTemplateIncludeSchema.optional(),
        where: UtmTemplateWhereInputSchema.optional(),
        orderBy: z.union([UtmTemplateOrderByWithRelationInputSchema.array(), UtmTemplateOrderByWithRelationInputSchema]).optional(),
        cursor: UtmTemplateWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([UtmTemplateScalarFieldEnumSchema, UtmTemplateScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default UtmTemplateFindManyArgsSchema
