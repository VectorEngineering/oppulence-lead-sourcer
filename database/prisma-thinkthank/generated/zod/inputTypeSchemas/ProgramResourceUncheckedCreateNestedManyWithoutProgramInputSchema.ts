import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramResourceCreateWithoutProgramInputSchema } from './ProgramResourceCreateWithoutProgramInputSchema'
import { ProgramResourceUncheckedCreateWithoutProgramInputSchema } from './ProgramResourceUncheckedCreateWithoutProgramInputSchema'
import { ProgramResourceCreateOrConnectWithoutProgramInputSchema } from './ProgramResourceCreateOrConnectWithoutProgramInputSchema'
import { ProgramResourceCreateManyProgramInputEnvelopeSchema } from './ProgramResourceCreateManyProgramInputEnvelopeSchema'
import { ProgramResourceWhereUniqueInputSchema } from './ProgramResourceWhereUniqueInputSchema'

export const ProgramResourceUncheckedCreateNestedManyWithoutProgramInputSchema: z.ZodType<Prisma.ProgramResourceUncheckedCreateNestedManyWithoutProgramInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ProgramResourceCreateWithoutProgramInputSchema),
                    z.lazy(() => ProgramResourceCreateWithoutProgramInputSchema).array(),
                    z.lazy(() => ProgramResourceUncheckedCreateWithoutProgramInputSchema),
                    z.lazy(() => ProgramResourceUncheckedCreateWithoutProgramInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => ProgramResourceCreateOrConnectWithoutProgramInputSchema),
                    z.lazy(() => ProgramResourceCreateOrConnectWithoutProgramInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => ProgramResourceCreateManyProgramInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => ProgramResourceWhereUniqueInputSchema), z.lazy(() => ProgramResourceWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default ProgramResourceUncheckedCreateNestedManyWithoutProgramInputSchema
