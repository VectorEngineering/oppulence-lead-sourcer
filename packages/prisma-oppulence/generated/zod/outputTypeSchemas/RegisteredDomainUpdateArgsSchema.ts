import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { RegisteredDomainIncludeSchema } from '../inputTypeSchemas/RegisteredDomainIncludeSchema'
import { RegisteredDomainUpdateInputSchema } from '../inputTypeSchemas/RegisteredDomainUpdateInputSchema'
import { RegisteredDomainUncheckedUpdateInputSchema } from '../inputTypeSchemas/RegisteredDomainUncheckedUpdateInputSchema'
import { RegisteredDomainWhereUniqueInputSchema } from '../inputTypeSchemas/RegisteredDomainWhereUniqueInputSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
import { DomainArgsSchema } from './DomainArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RegisteredDomainSelectSchema: z.ZodType<Prisma.RegisteredDomainSelect> = z
    .object({
        id: z.boolean().optional(),
        slug: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        expiresAt: z.boolean().optional(),
        projectId: z.boolean().optional(),
        domainId: z.boolean().optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        domain: z.union([z.boolean(), z.lazy(() => DomainArgsSchema)]).optional()
    })
    .strict()

export const RegisteredDomainUpdateArgsSchema: z.ZodType<Prisma.RegisteredDomainUpdateArgs> = z
    .object({
        select: RegisteredDomainSelectSchema.optional(),
        include: RegisteredDomainIncludeSchema.optional(),
        data: z.union([RegisteredDomainUpdateInputSchema, RegisteredDomainUncheckedUpdateInputSchema]),
        where: RegisteredDomainWhereUniqueInputSchema
    })
    .strict()

export default RegisteredDomainUpdateArgsSchema
