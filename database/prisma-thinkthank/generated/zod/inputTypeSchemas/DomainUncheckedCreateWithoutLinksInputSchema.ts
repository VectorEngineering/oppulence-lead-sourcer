import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RegisteredDomainUncheckedCreateNestedOneWithoutDomainInputSchema } from './RegisteredDomainUncheckedCreateNestedOneWithoutDomainInputSchema'
import { ProgramUncheckedCreateNestedManyWithoutPrimaryDomainInputSchema } from './ProgramUncheckedCreateNestedManyWithoutPrimaryDomainInputSchema'

export const DomainUncheckedCreateWithoutLinksInputSchema: z.ZodType<Prisma.DomainUncheckedCreateWithoutLinksInput> = z
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
        registeredDomain: z.lazy(() => RegisteredDomainUncheckedCreateNestedOneWithoutDomainInputSchema).optional(),
        programs: z.lazy(() => ProgramUncheckedCreateNestedManyWithoutPrimaryDomainInputSchema).optional()
    })
    .strict()

export default DomainUncheckedCreateWithoutLinksInputSchema
