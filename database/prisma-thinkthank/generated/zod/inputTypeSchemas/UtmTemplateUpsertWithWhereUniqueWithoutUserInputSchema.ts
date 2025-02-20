import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UtmTemplateWhereUniqueInputSchema } from './UtmTemplateWhereUniqueInputSchema'
import { UtmTemplateUpdateWithoutUserInputSchema } from './UtmTemplateUpdateWithoutUserInputSchema'
import { UtmTemplateUncheckedUpdateWithoutUserInputSchema } from './UtmTemplateUncheckedUpdateWithoutUserInputSchema'
import { UtmTemplateCreateWithoutUserInputSchema } from './UtmTemplateCreateWithoutUserInputSchema'
import { UtmTemplateUncheckedCreateWithoutUserInputSchema } from './UtmTemplateUncheckedCreateWithoutUserInputSchema'

export const UtmTemplateUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UtmTemplateUpsertWithWhereUniqueWithoutUserInput> = z
    .object({
        where: z.lazy(() => UtmTemplateWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => UtmTemplateUpdateWithoutUserInputSchema),
            z.lazy(() => UtmTemplateUncheckedUpdateWithoutUserInputSchema)
        ]),
        create: z.union([
            z.lazy(() => UtmTemplateCreateWithoutUserInputSchema),
            z.lazy(() => UtmTemplateUncheckedCreateWithoutUserInputSchema)
        ])
    })
    .strict()

export default UtmTemplateUpsertWithWhereUniqueWithoutUserInputSchema
