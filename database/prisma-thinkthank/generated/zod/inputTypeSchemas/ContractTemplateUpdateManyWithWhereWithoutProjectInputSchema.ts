import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractTemplateScalarWhereInputSchema } from './ContractTemplateScalarWhereInputSchema'
import { ContractTemplateUpdateManyMutationInputSchema } from './ContractTemplateUpdateManyMutationInputSchema'
import { ContractTemplateUncheckedUpdateManyWithoutProjectInputSchema } from './ContractTemplateUncheckedUpdateManyWithoutProjectInputSchema'

export const ContractTemplateUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.ContractTemplateUpdateManyWithWhereWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => ContractTemplateScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => ContractTemplateUpdateManyMutationInputSchema),
                z.lazy(() => ContractTemplateUncheckedUpdateManyWithoutProjectInputSchema)
            ])
        })
        .strict()

export default ContractTemplateUpdateManyWithWhereWithoutProjectInputSchema
