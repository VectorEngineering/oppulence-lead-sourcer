import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DomainCreateWithoutProjectInputSchema } from './DomainCreateWithoutProjectInputSchema'
import { DomainUncheckedCreateWithoutProjectInputSchema } from './DomainUncheckedCreateWithoutProjectInputSchema'
import { DomainCreateOrConnectWithoutProjectInputSchema } from './DomainCreateOrConnectWithoutProjectInputSchema'
import { DomainUpsertWithWhereUniqueWithoutProjectInputSchema } from './DomainUpsertWithWhereUniqueWithoutProjectInputSchema'
import { DomainCreateManyProjectInputEnvelopeSchema } from './DomainCreateManyProjectInputEnvelopeSchema'
import { DomainWhereUniqueInputSchema } from './DomainWhereUniqueInputSchema'
import { DomainUpdateWithWhereUniqueWithoutProjectInputSchema } from './DomainUpdateWithWhereUniqueWithoutProjectInputSchema'
import { DomainUpdateManyWithWhereWithoutProjectInputSchema } from './DomainUpdateManyWithWhereWithoutProjectInputSchema'
import { DomainScalarWhereInputSchema } from './DomainScalarWhereInputSchema'

export const DomainUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.DomainUncheckedUpdateManyWithoutProjectNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => DomainCreateWithoutProjectInputSchema),
                    z.lazy(() => DomainCreateWithoutProjectInputSchema).array(),
                    z.lazy(() => DomainUncheckedCreateWithoutProjectInputSchema),
                    z.lazy(() => DomainUncheckedCreateWithoutProjectInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => DomainCreateOrConnectWithoutProjectInputSchema),
                    z.lazy(() => DomainCreateOrConnectWithoutProjectInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => DomainUpsertWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => DomainUpsertWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => DomainCreateManyProjectInputEnvelopeSchema).optional(),
            set: z.union([z.lazy(() => DomainWhereUniqueInputSchema), z.lazy(() => DomainWhereUniqueInputSchema).array()]).optional(),
            disconnect: z
                .union([z.lazy(() => DomainWhereUniqueInputSchema), z.lazy(() => DomainWhereUniqueInputSchema).array()])
                .optional(),
            delete: z.union([z.lazy(() => DomainWhereUniqueInputSchema), z.lazy(() => DomainWhereUniqueInputSchema).array()]).optional(),
            connect: z.union([z.lazy(() => DomainWhereUniqueInputSchema), z.lazy(() => DomainWhereUniqueInputSchema).array()]).optional(),
            update: z
                .union([
                    z.lazy(() => DomainUpdateWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => DomainUpdateWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => DomainUpdateManyWithWhereWithoutProjectInputSchema),
                    z.lazy(() => DomainUpdateManyWithWhereWithoutProjectInputSchema).array()
                ])
                .optional(),
            deleteMany: z.union([z.lazy(() => DomainScalarWhereInputSchema), z.lazy(() => DomainScalarWhereInputSchema).array()]).optional()
        })
        .strict()

export default DomainUncheckedUpdateManyWithoutProjectNestedInputSchema
