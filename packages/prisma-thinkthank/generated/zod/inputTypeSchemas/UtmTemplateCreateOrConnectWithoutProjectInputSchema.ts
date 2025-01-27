import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UtmTemplateWhereUniqueInputSchema } from './UtmTemplateWhereUniqueInputSchema'
import { UtmTemplateCreateWithoutProjectInputSchema } from './UtmTemplateCreateWithoutProjectInputSchema'
import { UtmTemplateUncheckedCreateWithoutProjectInputSchema } from './UtmTemplateUncheckedCreateWithoutProjectInputSchema'

export const UtmTemplateCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.UtmTemplateCreateOrConnectWithoutProjectInput> = z
    .object({
        where: z.lazy(() => UtmTemplateWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => UtmTemplateCreateWithoutProjectInputSchema),
            z.lazy(() => UtmTemplateUncheckedCreateWithoutProjectInputSchema)
        ])
    })
    .strict()

export default UtmTemplateCreateOrConnectWithoutProjectInputSchema
