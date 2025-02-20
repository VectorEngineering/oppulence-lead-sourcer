import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UtmTemplateCreateWithoutProjectInputSchema } from './UtmTemplateCreateWithoutProjectInputSchema'
import { UtmTemplateUncheckedCreateWithoutProjectInputSchema } from './UtmTemplateUncheckedCreateWithoutProjectInputSchema'
import { UtmTemplateCreateOrConnectWithoutProjectInputSchema } from './UtmTemplateCreateOrConnectWithoutProjectInputSchema'
import { UtmTemplateCreateManyProjectInputEnvelopeSchema } from './UtmTemplateCreateManyProjectInputEnvelopeSchema'
import { UtmTemplateWhereUniqueInputSchema } from './UtmTemplateWhereUniqueInputSchema'

export const UtmTemplateUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.UtmTemplateUncheckedCreateNestedManyWithoutProjectInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => UtmTemplateCreateWithoutProjectInputSchema),
                    z.lazy(() => UtmTemplateCreateWithoutProjectInputSchema).array(),
                    z.lazy(() => UtmTemplateUncheckedCreateWithoutProjectInputSchema),
                    z.lazy(() => UtmTemplateUncheckedCreateWithoutProjectInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => UtmTemplateCreateOrConnectWithoutProjectInputSchema),
                    z.lazy(() => UtmTemplateCreateOrConnectWithoutProjectInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => UtmTemplateCreateManyProjectInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => UtmTemplateWhereUniqueInputSchema), z.lazy(() => UtmTemplateWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default UtmTemplateUncheckedCreateNestedManyWithoutProjectInputSchema
