import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DefaultDomainsIncludeSchema } from '../inputTypeSchemas/DefaultDomainsIncludeSchema'
import { DefaultDomainsWhereInputSchema } from '../inputTypeSchemas/DefaultDomainsWhereInputSchema'
import { DefaultDomainsOrderByWithRelationInputSchema } from '../inputTypeSchemas/DefaultDomainsOrderByWithRelationInputSchema'
import { DefaultDomainsWhereUniqueInputSchema } from '../inputTypeSchemas/DefaultDomainsWhereUniqueInputSchema'
import { DefaultDomainsScalarFieldEnumSchema } from '../inputTypeSchemas/DefaultDomainsScalarFieldEnumSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DefaultDomainsSelectSchema: z.ZodType<Prisma.DefaultDomainsSelect> = z
    .object({
        id: z.boolean().optional(),
        oppulence: z.boolean().optional(),
        solomonai: z.boolean().optional(),
        thinkthank: z.boolean().optional(),
        dublink: z.boolean().optional(),
        dubsh: z.boolean().optional(),
        chatgpt: z.boolean().optional(),
        sptifi: z.boolean().optional(),
        gitnew: z.boolean().optional(),
        callink: z.boolean().optional(),
        amznid: z.boolean().optional(),
        ggllink: z.boolean().optional(),
        figpage: z.boolean().optional(),
        loooooooong: z.boolean().optional(),
        projectId: z.boolean().optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
    })
    .strict()

export const DefaultDomainsFindManyArgsSchema: z.ZodType<Prisma.DefaultDomainsFindManyArgs> = z
    .object({
        select: DefaultDomainsSelectSchema.optional(),
        include: DefaultDomainsIncludeSchema.optional(),
        where: DefaultDomainsWhereInputSchema.optional(),
        orderBy: z.union([DefaultDomainsOrderByWithRelationInputSchema.array(), DefaultDomainsOrderByWithRelationInputSchema]).optional(),
        cursor: DefaultDomainsWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([DefaultDomainsScalarFieldEnumSchema, DefaultDomainsScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default DefaultDomainsFindManyArgsSchema
