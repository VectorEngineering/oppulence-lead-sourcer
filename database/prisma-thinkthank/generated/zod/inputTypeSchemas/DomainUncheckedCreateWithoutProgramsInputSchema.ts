import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkUncheckedCreateNestedManyWithoutProjectDomainInputSchema } from './LinkUncheckedCreateNestedManyWithoutProjectDomainInputSchema'
import { RegisteredDomainUncheckedCreateNestedOneWithoutDomainInputSchema } from './RegisteredDomainUncheckedCreateNestedOneWithoutDomainInputSchema'

export const DomainUncheckedCreateWithoutProgramsInputSchema: z.ZodType<Prisma.DomainUncheckedCreateWithoutProgramsInput> = z
    .object({
        id: z.string().cuid().optional(),
        slug: z.string(),
        verified: z.boolean().optional(),
        placeholder: z.string().optional().nullable(),
        expiredUrl: z.string().optional().nullable(),
        notFoundUrl: z.string().optional().nullable(),
        primary: z.boolean().optional(),
        archived: z.boolean().optional(),
        lastChecked: z.coerce.date().optional(),
        logo: z.string().optional().nullable(),
        projectId: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        links: z.lazy(() => LinkUncheckedCreateNestedManyWithoutProjectDomainInputSchema).optional(),
        registeredDomain: z.lazy(() => RegisteredDomainUncheckedCreateNestedOneWithoutDomainInputSchema).optional()
    })
    .strict()

export default DomainUncheckedCreateWithoutProgramsInputSchema
