import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UtmTemplateWhereUniqueInputSchema } from './UtmTemplateWhereUniqueInputSchema'
import { UtmTemplateUpdateWithoutProjectInputSchema } from './UtmTemplateUpdateWithoutProjectInputSchema'
import { UtmTemplateUncheckedUpdateWithoutProjectInputSchema } from './UtmTemplateUncheckedUpdateWithoutProjectInputSchema'

export const UtmTemplateUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.UtmTemplateUpdateWithWhereUniqueWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => UtmTemplateWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => UtmTemplateUpdateWithoutProjectInputSchema),
                z.lazy(() => UtmTemplateUncheckedUpdateWithoutProjectInputSchema)
            ])
        })
        .strict()

export default UtmTemplateUpdateWithWhereUniqueWithoutProjectInputSchema
