import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { RegisteredDomainIncludeSchema } from '../inputTypeSchemas/RegisteredDomainIncludeSchema'
import { RegisteredDomainWhereUniqueInputSchema } from '../inputTypeSchemas/RegisteredDomainWhereUniqueInputSchema'
import { RegisteredDomainCreateInputSchema } from '../inputTypeSchemas/RegisteredDomainCreateInputSchema'
import { RegisteredDomainUncheckedCreateInputSchema } from '../inputTypeSchemas/RegisteredDomainUncheckedCreateInputSchema'
import { RegisteredDomainUpdateInputSchema } from '../inputTypeSchemas/RegisteredDomainUpdateInputSchema'
import { RegisteredDomainUncheckedUpdateInputSchema } from '../inputTypeSchemas/RegisteredDomainUncheckedUpdateInputSchema'
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

export const RegisteredDomainUpsertArgsSchema: z.ZodType<Prisma.RegisteredDomainUpsertArgs> = z
    .object({
        select: RegisteredDomainSelectSchema.optional(),
        include: RegisteredDomainIncludeSchema.optional(),
        where: RegisteredDomainWhereUniqueInputSchema,
        create: z.union([RegisteredDomainCreateInputSchema, RegisteredDomainUncheckedCreateInputSchema]),
        update: z.union([RegisteredDomainUpdateInputSchema, RegisteredDomainUncheckedUpdateInputSchema])
    })
    .strict()

export default RegisteredDomainUpsertArgsSchema
