import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UtmTemplateWhereUniqueInputSchema } from './UtmTemplateWhereUniqueInputSchema'
import { UtmTemplateUpdateWithoutProjectInputSchema } from './UtmTemplateUpdateWithoutProjectInputSchema'
import { UtmTemplateUncheckedUpdateWithoutProjectInputSchema } from './UtmTemplateUncheckedUpdateWithoutProjectInputSchema'
import { UtmTemplateCreateWithoutProjectInputSchema } from './UtmTemplateCreateWithoutProjectInputSchema'
import { UtmTemplateUncheckedCreateWithoutProjectInputSchema } from './UtmTemplateUncheckedCreateWithoutProjectInputSchema'

export const UtmTemplateUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.UtmTemplateUpsertWithWhereUniqueWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => UtmTemplateWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => UtmTemplateUpdateWithoutProjectInputSchema),
                z.lazy(() => UtmTemplateUncheckedUpdateWithoutProjectInputSchema)
            ]),
            create: z.union([
                z.lazy(() => UtmTemplateCreateWithoutProjectInputSchema),
                z.lazy(() => UtmTemplateUncheckedCreateWithoutProjectInputSchema)
            ])
        })
        .strict()

export default UtmTemplateUpsertWithWhereUniqueWithoutProjectInputSchema
