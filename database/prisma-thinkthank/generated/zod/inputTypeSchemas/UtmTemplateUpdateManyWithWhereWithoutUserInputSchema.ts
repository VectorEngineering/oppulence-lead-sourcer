import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UtmTemplateScalarWhereInputSchema } from './UtmTemplateScalarWhereInputSchema'
import { UtmTemplateUpdateManyMutationInputSchema } from './UtmTemplateUpdateManyMutationInputSchema'
import { UtmTemplateUncheckedUpdateManyWithoutUserInputSchema } from './UtmTemplateUncheckedUpdateManyWithoutUserInputSchema'

export const UtmTemplateUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.UtmTemplateUpdateManyWithWhereWithoutUserInput> = z
    .object({
        where: z.lazy(() => UtmTemplateScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => UtmTemplateUpdateManyMutationInputSchema),
            z.lazy(() => UtmTemplateUncheckedUpdateManyWithoutUserInputSchema)
        ])
    })
    .strict()

export default UtmTemplateUpdateManyWithWhereWithoutUserInputSchema
