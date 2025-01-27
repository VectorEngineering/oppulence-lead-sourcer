import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DomainCreateNestedOneWithoutRegisteredDomainInputSchema } from './DomainCreateNestedOneWithoutRegisteredDomainInputSchema'

export const RegisteredDomainCreateWithoutProjectInputSchema: z.ZodType<Prisma.RegisteredDomainCreateWithoutProjectInput> = z
    .object({
        id: z.string().cuid().optional(),
        slug: z.string(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        expiresAt: z.coerce.date(),
        domain: z.lazy(() => DomainCreateNestedOneWithoutRegisteredDomainInputSchema).optional()
    })
    .strict()

export default RegisteredDomainCreateWithoutProjectInputSchema
