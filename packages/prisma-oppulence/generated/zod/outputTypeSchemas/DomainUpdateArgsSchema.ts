import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DomainIncludeSchema } from '../inputTypeSchemas/DomainIncludeSchema'
import { DomainUpdateInputSchema } from '../inputTypeSchemas/DomainUpdateInputSchema'
import { DomainUncheckedUpdateInputSchema } from '../inputTypeSchemas/DomainUncheckedUpdateInputSchema'
import { DomainWhereUniqueInputSchema } from '../inputTypeSchemas/DomainWhereUniqueInputSchema'
import { LinkFindManyArgsSchema } from './LinkFindManyArgsSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
import { RegisteredDomainArgsSchema } from './RegisteredDomainArgsSchema'
import { ProgramFindManyArgsSchema } from './ProgramFindManyArgsSchema'
import { DomainCountOutputTypeArgsSchema } from './DomainCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DomainSelectSchema: z.ZodType<Prisma.DomainSelect> = z
    .object({
        id: z.boolean().optional(),
        slug: z.boolean().optional(),
        verified: z.boolean().optional(),
        placeholder: z.boolean().optional(),
        expiredUrl: z.boolean().optional(),
        notFoundUrl: z.boolean().optional(),
        primary: z.boolean().optional(),
        archived: z.boolean().optional(),
        lastChecked: z.boolean().optional(),
        logo: z.boolean().optional(),
        projectId: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        links: z.union([z.boolean(), z.lazy(() => LinkFindManyArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        registeredDomain: z.union([z.boolean(), z.lazy(() => RegisteredDomainArgsSchema)]).optional(),
        programs: z.union([z.boolean(), z.lazy(() => ProgramFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => DomainCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const DomainUpdateArgsSchema: z.ZodType<Prisma.DomainUpdateArgs> = z
    .object({
        select: DomainSelectSchema.optional(),
        include: DomainIncludeSchema.optional(),
        data: z.union([DomainUpdateInputSchema, DomainUncheckedUpdateInputSchema]),
        where: DomainWhereUniqueInputSchema
    })
    .strict()

export default DomainUpdateArgsSchema
