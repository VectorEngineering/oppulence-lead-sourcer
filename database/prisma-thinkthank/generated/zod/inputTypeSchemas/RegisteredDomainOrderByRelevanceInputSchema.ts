import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RegisteredDomainOrderByRelevanceFieldEnumSchema } from './RegisteredDomainOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const RegisteredDomainOrderByRelevanceInputSchema: z.ZodType<Prisma.RegisteredDomainOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => RegisteredDomainOrderByRelevanceFieldEnumSchema),
            z.lazy(() => RegisteredDomainOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default RegisteredDomainOrderByRelevanceInputSchema
