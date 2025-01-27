import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkCreateWithoutProjectDomainInputSchema } from './LinkCreateWithoutProjectDomainInputSchema'
import { LinkUncheckedCreateWithoutProjectDomainInputSchema } from './LinkUncheckedCreateWithoutProjectDomainInputSchema'
import { LinkCreateOrConnectWithoutProjectDomainInputSchema } from './LinkCreateOrConnectWithoutProjectDomainInputSchema'
import { LinkUpsertWithWhereUniqueWithoutProjectDomainInputSchema } from './LinkUpsertWithWhereUniqueWithoutProjectDomainInputSchema'
import { LinkCreateManyProjectDomainInputEnvelopeSchema } from './LinkCreateManyProjectDomainInputEnvelopeSchema'
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema'
import { LinkUpdateWithWhereUniqueWithoutProjectDomainInputSchema } from './LinkUpdateWithWhereUniqueWithoutProjectDomainInputSchema'
import { LinkUpdateManyWithWhereWithoutProjectDomainInputSchema } from './LinkUpdateManyWithWhereWithoutProjectDomainInputSchema'
import { LinkScalarWhereInputSchema } from './LinkScalarWhereInputSchema'

export const LinkUpdateManyWithoutProjectDomainNestedInputSchema: z.ZodType<Prisma.LinkUpdateManyWithoutProjectDomainNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LinkCreateWithoutProjectDomainInputSchema),
                z.lazy(() => LinkCreateWithoutProjectDomainInputSchema).array(),
                z.lazy(() => LinkUncheckedCreateWithoutProjectDomainInputSchema),
                z.lazy(() => LinkUncheckedCreateWithoutProjectDomainInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => LinkCreateOrConnectWithoutProjectDomainInputSchema),
                z.lazy(() => LinkCreateOrConnectWithoutProjectDomainInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => LinkUpsertWithWhereUniqueWithoutProjectDomainInputSchema),
                z.lazy(() => LinkUpsertWithWhereUniqueWithoutProjectDomainInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => LinkCreateManyProjectDomainInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => LinkWhereUniqueInputSchema), z.lazy(() => LinkWhereUniqueInputSchema).array()]).optional(),
        disconnect: z.union([z.lazy(() => LinkWhereUniqueInputSchema), z.lazy(() => LinkWhereUniqueInputSchema).array()]).optional(),
        delete: z.union([z.lazy(() => LinkWhereUniqueInputSchema), z.lazy(() => LinkWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => LinkWhereUniqueInputSchema), z.lazy(() => LinkWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => LinkUpdateWithWhereUniqueWithoutProjectDomainInputSchema),
                z.lazy(() => LinkUpdateWithWhereUniqueWithoutProjectDomainInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => LinkUpdateManyWithWhereWithoutProjectDomainInputSchema),
                z.lazy(() => LinkUpdateManyWithWhereWithoutProjectDomainInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => LinkScalarWhereInputSchema), z.lazy(() => LinkScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default LinkUpdateManyWithoutProjectDomainNestedInputSchema
