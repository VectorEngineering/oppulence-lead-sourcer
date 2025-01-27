import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { ProjectUpdateOneRequiredWithoutRegisteredDomainsNestedInputSchema } from './ProjectUpdateOneRequiredWithoutRegisteredDomainsNestedInputSchema'
import { DomainUpdateOneWithoutRegisteredDomainNestedInputSchema } from './DomainUpdateOneWithoutRegisteredDomainNestedInputSchema'

export const RegisteredDomainUpdateInputSchema: z.ZodType<Prisma.RegisteredDomainUpdateInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        expiresAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        project: z.lazy(() => ProjectUpdateOneRequiredWithoutRegisteredDomainsNestedInputSchema).optional(),
        domain: z.lazy(() => DomainUpdateOneWithoutRegisteredDomainNestedInputSchema).optional()
    })
    .strict()

export default RegisteredDomainUpdateInputSchema
