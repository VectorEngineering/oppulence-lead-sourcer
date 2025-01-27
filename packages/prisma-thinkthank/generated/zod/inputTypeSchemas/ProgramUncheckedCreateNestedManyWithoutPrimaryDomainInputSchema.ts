import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramCreateWithoutPrimaryDomainInputSchema } from './ProgramCreateWithoutPrimaryDomainInputSchema'
import { ProgramUncheckedCreateWithoutPrimaryDomainInputSchema } from './ProgramUncheckedCreateWithoutPrimaryDomainInputSchema'
import { ProgramCreateOrConnectWithoutPrimaryDomainInputSchema } from './ProgramCreateOrConnectWithoutPrimaryDomainInputSchema'
import { ProgramCreateManyPrimaryDomainInputEnvelopeSchema } from './ProgramCreateManyPrimaryDomainInputEnvelopeSchema'
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema'

export const ProgramUncheckedCreateNestedManyWithoutPrimaryDomainInputSchema: z.ZodType<Prisma.ProgramUncheckedCreateNestedManyWithoutPrimaryDomainInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ProgramCreateWithoutPrimaryDomainInputSchema),
                    z.lazy(() => ProgramCreateWithoutPrimaryDomainInputSchema).array(),
                    z.lazy(() => ProgramUncheckedCreateWithoutPrimaryDomainInputSchema),
                    z.lazy(() => ProgramUncheckedCreateWithoutPrimaryDomainInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => ProgramCreateOrConnectWithoutPrimaryDomainInputSchema),
                    z.lazy(() => ProgramCreateOrConnectWithoutPrimaryDomainInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => ProgramCreateManyPrimaryDomainInputEnvelopeSchema).optional(),
            connect: z.union([z.lazy(() => ProgramWhereUniqueInputSchema), z.lazy(() => ProgramWhereUniqueInputSchema).array()]).optional()
        })
        .strict()

export default ProgramUncheckedCreateNestedManyWithoutPrimaryDomainInputSchema
