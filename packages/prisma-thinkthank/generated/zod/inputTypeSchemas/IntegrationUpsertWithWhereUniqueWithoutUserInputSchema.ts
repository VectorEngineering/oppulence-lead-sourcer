import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { IntegrationWhereUniqueInputSchema } from './IntegrationWhereUniqueInputSchema'
import { IntegrationUpdateWithoutUserInputSchema } from './IntegrationUpdateWithoutUserInputSchema'
import { IntegrationUncheckedUpdateWithoutUserInputSchema } from './IntegrationUncheckedUpdateWithoutUserInputSchema'
import { IntegrationCreateWithoutUserInputSchema } from './IntegrationCreateWithoutUserInputSchema'
import { IntegrationUncheckedCreateWithoutUserInputSchema } from './IntegrationUncheckedCreateWithoutUserInputSchema'

export const IntegrationUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.IntegrationUpsertWithWhereUniqueWithoutUserInput> = z
    .object({
        where: z.lazy(() => IntegrationWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => IntegrationUpdateWithoutUserInputSchema),
            z.lazy(() => IntegrationUncheckedUpdateWithoutUserInputSchema)
        ]),
        create: z.union([
            z.lazy(() => IntegrationCreateWithoutUserInputSchema),
            z.lazy(() => IntegrationUncheckedCreateWithoutUserInputSchema)
        ])
    })
    .strict()

export default IntegrationUpsertWithWhereUniqueWithoutUserInputSchema
