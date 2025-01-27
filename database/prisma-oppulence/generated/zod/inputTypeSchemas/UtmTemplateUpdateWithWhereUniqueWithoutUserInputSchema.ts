import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UtmTemplateWhereUniqueInputSchema } from './UtmTemplateWhereUniqueInputSchema'
import { UtmTemplateUpdateWithoutUserInputSchema } from './UtmTemplateUpdateWithoutUserInputSchema'
import { UtmTemplateUncheckedUpdateWithoutUserInputSchema } from './UtmTemplateUncheckedUpdateWithoutUserInputSchema'

export const UtmTemplateUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UtmTemplateUpdateWithWhereUniqueWithoutUserInput> = z
    .object({
        where: z.lazy(() => UtmTemplateWhereUniqueInputSchema),
        data: z.union([
            z.lazy(() => UtmTemplateUpdateWithoutUserInputSchema),
            z.lazy(() => UtmTemplateUncheckedUpdateWithoutUserInputSchema)
        ])
    })
    .strict()

export default UtmTemplateUpdateWithWhereUniqueWithoutUserInputSchema
