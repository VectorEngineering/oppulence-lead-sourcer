import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const RegisteredDomainCreateManyProjectInputSchema: z.ZodType<Prisma.RegisteredDomainCreateManyProjectInput> = z
    .object({
        id: z.string().cuid().optional(),
        slug: z.string(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        expiresAt: z.coerce.date(),
        domainId: z.string().optional().nullable()
    })
    .strict()

export default RegisteredDomainCreateManyProjectInputSchema
