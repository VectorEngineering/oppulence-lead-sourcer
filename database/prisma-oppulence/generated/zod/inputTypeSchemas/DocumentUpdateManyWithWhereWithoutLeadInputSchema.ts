import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DocumentScalarWhereInputSchema } from './DocumentScalarWhereInputSchema'
import { DocumentUpdateManyMutationInputSchema } from './DocumentUpdateManyMutationInputSchema'
import { DocumentUncheckedUpdateManyWithoutLeadInputSchema } from './DocumentUncheckedUpdateManyWithoutLeadInputSchema'

export const DocumentUpdateManyWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.DocumentUpdateManyWithWhereWithoutLeadInput> = z
    .object({
        where: z.lazy(() => DocumentScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => DocumentUpdateManyMutationInputSchema),
            z.lazy(() => DocumentUncheckedUpdateManyWithoutLeadInputSchema)
        ])
    })
    .strict()

export default DocumentUpdateManyWithWhereWithoutLeadInputSchema
