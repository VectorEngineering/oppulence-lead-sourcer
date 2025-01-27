import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RegisteredDomainCreateWithoutProjectInputSchema } from './RegisteredDomainCreateWithoutProjectInputSchema'
import { RegisteredDomainUncheckedCreateWithoutProjectInputSchema } from './RegisteredDomainUncheckedCreateWithoutProjectInputSchema'
import { RegisteredDomainCreateOrConnectWithoutProjectInputSchema } from './RegisteredDomainCreateOrConnectWithoutProjectInputSchema'
import { RegisteredDomainUpsertWithWhereUniqueWithoutProjectInputSchema } from './RegisteredDomainUpsertWithWhereUniqueWithoutProjectInputSchema'
import { RegisteredDomainCreateManyProjectInputEnvelopeSchema } from './RegisteredDomainCreateManyProjectInputEnvelopeSchema'
import { RegisteredDomainWhereUniqueInputSchema } from './RegisteredDomainWhereUniqueInputSchema'
import { RegisteredDomainUpdateWithWhereUniqueWithoutProjectInputSchema } from './RegisteredDomainUpdateWithWhereUniqueWithoutProjectInputSchema'
import { RegisteredDomainUpdateManyWithWhereWithoutProjectInputSchema } from './RegisteredDomainUpdateManyWithWhereWithoutProjectInputSchema'
import { RegisteredDomainScalarWhereInputSchema } from './RegisteredDomainScalarWhereInputSchema'

export const RegisteredDomainUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.RegisteredDomainUncheckedUpdateManyWithoutProjectNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => RegisteredDomainCreateWithoutProjectInputSchema),
                    z.lazy(() => RegisteredDomainCreateWithoutProjectInputSchema).array(),
                    z.lazy(() => RegisteredDomainUncheckedCreateWithoutProjectInputSchema),
                    z.lazy(() => RegisteredDomainUncheckedCreateWithoutProjectInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => RegisteredDomainCreateOrConnectWithoutProjectInputSchema),
                    z.lazy(() => RegisteredDomainCreateOrConnectWithoutProjectInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => RegisteredDomainUpsertWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => RegisteredDomainUpsertWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => RegisteredDomainCreateManyProjectInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => RegisteredDomainWhereUniqueInputSchema), z.lazy(() => RegisteredDomainWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => RegisteredDomainWhereUniqueInputSchema), z.lazy(() => RegisteredDomainWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => RegisteredDomainWhereUniqueInputSchema), z.lazy(() => RegisteredDomainWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => RegisteredDomainWhereUniqueInputSchema), z.lazy(() => RegisteredDomainWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => RegisteredDomainUpdateWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => RegisteredDomainUpdateWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => RegisteredDomainUpdateManyWithWhereWithoutProjectInputSchema),
                    z.lazy(() => RegisteredDomainUpdateManyWithWhereWithoutProjectInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => RegisteredDomainScalarWhereInputSchema), z.lazy(() => RegisteredDomainScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default RegisteredDomainUncheckedUpdateManyWithoutProjectNestedInputSchema
