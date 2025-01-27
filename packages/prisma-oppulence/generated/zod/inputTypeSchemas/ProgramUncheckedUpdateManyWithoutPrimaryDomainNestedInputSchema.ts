import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramCreateWithoutPrimaryDomainInputSchema } from './ProgramCreateWithoutPrimaryDomainInputSchema'
import { ProgramUncheckedCreateWithoutPrimaryDomainInputSchema } from './ProgramUncheckedCreateWithoutPrimaryDomainInputSchema'
import { ProgramCreateOrConnectWithoutPrimaryDomainInputSchema } from './ProgramCreateOrConnectWithoutPrimaryDomainInputSchema'
import { ProgramUpsertWithWhereUniqueWithoutPrimaryDomainInputSchema } from './ProgramUpsertWithWhereUniqueWithoutPrimaryDomainInputSchema'
import { ProgramCreateManyPrimaryDomainInputEnvelopeSchema } from './ProgramCreateManyPrimaryDomainInputEnvelopeSchema'
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema'
import { ProgramUpdateWithWhereUniqueWithoutPrimaryDomainInputSchema } from './ProgramUpdateWithWhereUniqueWithoutPrimaryDomainInputSchema'
import { ProgramUpdateManyWithWhereWithoutPrimaryDomainInputSchema } from './ProgramUpdateManyWithWhereWithoutPrimaryDomainInputSchema'
import { ProgramScalarWhereInputSchema } from './ProgramScalarWhereInputSchema'

export const ProgramUncheckedUpdateManyWithoutPrimaryDomainNestedInputSchema: z.ZodType<Prisma.ProgramUncheckedUpdateManyWithoutPrimaryDomainNestedInput> =
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
            upsert: z
                .union([
                    z.lazy(() => ProgramUpsertWithWhereUniqueWithoutPrimaryDomainInputSchema),
                    z.lazy(() => ProgramUpsertWithWhereUniqueWithoutPrimaryDomainInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => ProgramCreateManyPrimaryDomainInputEnvelopeSchema).optional(),
            set: z.union([z.lazy(() => ProgramWhereUniqueInputSchema), z.lazy(() => ProgramWhereUniqueInputSchema).array()]).optional(),
            disconnect: z
                .union([z.lazy(() => ProgramWhereUniqueInputSchema), z.lazy(() => ProgramWhereUniqueInputSchema).array()])
                .optional(),
            delete: z.union([z.lazy(() => ProgramWhereUniqueInputSchema), z.lazy(() => ProgramWhereUniqueInputSchema).array()]).optional(),
            connect: z.union([z.lazy(() => ProgramWhereUniqueInputSchema), z.lazy(() => ProgramWhereUniqueInputSchema).array()]).optional(),
            update: z
                .union([
                    z.lazy(() => ProgramUpdateWithWhereUniqueWithoutPrimaryDomainInputSchema),
                    z.lazy(() => ProgramUpdateWithWhereUniqueWithoutPrimaryDomainInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => ProgramUpdateManyWithWhereWithoutPrimaryDomainInputSchema),
                    z.lazy(() => ProgramUpdateManyWithWhereWithoutPrimaryDomainInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => ProgramScalarWhereInputSchema), z.lazy(() => ProgramScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default ProgramUncheckedUpdateManyWithoutPrimaryDomainNestedInputSchema
