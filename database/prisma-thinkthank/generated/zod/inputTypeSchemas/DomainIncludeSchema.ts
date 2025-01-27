import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LinkFindManyArgsSchema } from '../outputTypeSchemas/LinkFindManyArgsSchema'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { RegisteredDomainArgsSchema } from '../outputTypeSchemas/RegisteredDomainArgsSchema'
import { ProgramFindManyArgsSchema } from '../outputTypeSchemas/ProgramFindManyArgsSchema'
import { DomainCountOutputTypeArgsSchema } from '../outputTypeSchemas/DomainCountOutputTypeArgsSchema'

export const DomainIncludeSchema: z.ZodType<Prisma.DomainInclude> = z
    .object({
        links: z.union([z.boolean(), z.lazy(() => LinkFindManyArgsSchema)]).optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        registeredDomain: z.union([z.boolean(), z.lazy(() => RegisteredDomainArgsSchema)]).optional(),
        programs: z.union([z.boolean(), z.lazy(() => ProgramFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => DomainCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default DomainIncludeSchema
