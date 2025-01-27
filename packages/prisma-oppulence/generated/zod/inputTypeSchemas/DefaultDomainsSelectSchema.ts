import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'

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

export default DefaultDomainsSelectSchema
