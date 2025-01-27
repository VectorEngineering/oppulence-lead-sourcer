import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { RegisteredDomainIncludeSchema } from '../inputTypeSchemas/RegisteredDomainIncludeSchema'
import { RegisteredDomainWhereInputSchema } from '../inputTypeSchemas/RegisteredDomainWhereInputSchema'
import { RegisteredDomainOrderByWithRelationInputSchema } from '../inputTypeSchemas/RegisteredDomainOrderByWithRelationInputSchema'
import { RegisteredDomainWhereUniqueInputSchema } from '../inputTypeSchemas/RegisteredDomainWhereUniqueInputSchema'
import { RegisteredDomainScalarFieldEnumSchema } from '../inputTypeSchemas/RegisteredDomainScalarFieldEnumSchema'
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

export const RegisteredDomainFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RegisteredDomainFindFirstOrThrowArgs> = z
    .object({
        select: RegisteredDomainSelectSchema.optional(),
        include: RegisteredDomainIncludeSchema.optional(),
        where: RegisteredDomainWhereInputSchema.optional(),
        orderBy: z
            .union([RegisteredDomainOrderByWithRelationInputSchema.array(), RegisteredDomainOrderByWithRelationInputSchema])
            .optional(),
        cursor: RegisteredDomainWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([RegisteredDomainScalarFieldEnumSchema, RegisteredDomainScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default RegisteredDomainFindFirstOrThrowArgsSchema
