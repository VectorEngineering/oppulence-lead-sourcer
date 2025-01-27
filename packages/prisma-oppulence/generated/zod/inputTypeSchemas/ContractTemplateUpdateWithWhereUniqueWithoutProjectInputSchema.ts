import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractTemplateWhereUniqueInputSchema } from './ContractTemplateWhereUniqueInputSchema'
import { ContractTemplateUpdateWithoutProjectInputSchema } from './ContractTemplateUpdateWithoutProjectInputSchema'
import { ContractTemplateUncheckedUpdateWithoutProjectInputSchema } from './ContractTemplateUncheckedUpdateWithoutProjectInputSchema'

export const ContractTemplateUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.ContractTemplateUpdateWithWhereUniqueWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => ContractTemplateWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => ContractTemplateUpdateWithoutProjectInputSchema),
                z.lazy(() => ContractTemplateUncheckedUpdateWithoutProjectInputSchema)
            ])
        })
        .strict()

export default ContractTemplateUpdateWithWhereUniqueWithoutProjectInputSchema
