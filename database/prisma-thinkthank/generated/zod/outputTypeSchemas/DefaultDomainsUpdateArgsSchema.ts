import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DefaultDomainsIncludeSchema } from '../inputTypeSchemas/DefaultDomainsIncludeSchema'
import { DefaultDomainsUpdateInputSchema } from '../inputTypeSchemas/DefaultDomainsUpdateInputSchema'
import { DefaultDomainsUncheckedUpdateInputSchema } from '../inputTypeSchemas/DefaultDomainsUncheckedUpdateInputSchema'
import { DefaultDomainsWhereUniqueInputSchema } from '../inputTypeSchemas/DefaultDomainsWhereUniqueInputSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
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

export const DefaultDomainsUpdateArgsSchema: z.ZodType<Prisma.DefaultDomainsUpdateArgs> = z
    .object({
        select: DefaultDomainsSelectSchema.optional(),
        include: DefaultDomainsIncludeSchema.optional(),
        data: z.union([DefaultDomainsUpdateInputSchema, DefaultDomainsUncheckedUpdateInputSchema]),
        where: DefaultDomainsWhereUniqueInputSchema
    })
    .strict()

export default DefaultDomainsUpdateArgsSchema
