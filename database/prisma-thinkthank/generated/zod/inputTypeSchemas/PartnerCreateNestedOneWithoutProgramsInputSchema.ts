import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerCreateWithoutProgramsInputSchema } from './PartnerCreateWithoutProgramsInputSchema'
import { PartnerUncheckedCreateWithoutProgramsInputSchema } from './PartnerUncheckedCreateWithoutProgramsInputSchema'
import { PartnerCreateOrConnectWithoutProgramsInputSchema } from './PartnerCreateOrConnectWithoutProgramsInputSchema'
import { PartnerWhereUniqueInputSchema } from './PartnerWhereUniqueInputSchema'

export const PartnerCreateNestedOneWithoutProgramsInputSchema: z.ZodType<Prisma.PartnerCreateNestedOneWithoutProgramsInput> = z
    .object({
        create: z
            .union([z.lazy(() => PartnerCreateWithoutProgramsInputSchema), z.lazy(() => PartnerUncheckedCreateWithoutProgramsInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => PartnerCreateOrConnectWithoutProgramsInputSchema).optional(),
        connect: z.lazy(() => PartnerWhereUniqueInputSchema).optional()
    })
    .strict()

export default PartnerCreateNestedOneWithoutProgramsInputSchema
