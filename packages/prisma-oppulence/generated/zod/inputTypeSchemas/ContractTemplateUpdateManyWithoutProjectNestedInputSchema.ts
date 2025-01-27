import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractTemplateCreateWithoutProjectInputSchema } from './ContractTemplateCreateWithoutProjectInputSchema'
import { ContractTemplateUncheckedCreateWithoutProjectInputSchema } from './ContractTemplateUncheckedCreateWithoutProjectInputSchema'
import { ContractTemplateCreateOrConnectWithoutProjectInputSchema } from './ContractTemplateCreateOrConnectWithoutProjectInputSchema'
import { ContractTemplateUpsertWithWhereUniqueWithoutProjectInputSchema } from './ContractTemplateUpsertWithWhereUniqueWithoutProjectInputSchema'
import { ContractTemplateCreateManyProjectInputEnvelopeSchema } from './ContractTemplateCreateManyProjectInputEnvelopeSchema'
import { ContractTemplateWhereUniqueInputSchema } from './ContractTemplateWhereUniqueInputSchema'
import { ContractTemplateUpdateWithWhereUniqueWithoutProjectInputSchema } from './ContractTemplateUpdateWithWhereUniqueWithoutProjectInputSchema'
import { ContractTemplateUpdateManyWithWhereWithoutProjectInputSchema } from './ContractTemplateUpdateManyWithWhereWithoutProjectInputSchema'
import { ContractTemplateScalarWhereInputSchema } from './ContractTemplateScalarWhereInputSchema'

export const ContractTemplateUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.ContractTemplateUpdateManyWithoutProjectNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ContractTemplateCreateWithoutProjectInputSchema),
                    z.lazy(() => ContractTemplateCreateWithoutProjectInputSchema).array(),
                    z.lazy(() => ContractTemplateUncheckedCreateWithoutProjectInputSchema),
                    z.lazy(() => ContractTemplateUncheckedCreateWithoutProjectInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => ContractTemplateCreateOrConnectWithoutProjectInputSchema),
                    z.lazy(() => ContractTemplateCreateOrConnectWithoutProjectInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => ContractTemplateUpsertWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => ContractTemplateUpsertWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => ContractTemplateCreateManyProjectInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => ContractTemplateWhereUniqueInputSchema), z.lazy(() => ContractTemplateWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => ContractTemplateWhereUniqueInputSchema), z.lazy(() => ContractTemplateWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => ContractTemplateWhereUniqueInputSchema), z.lazy(() => ContractTemplateWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => ContractTemplateWhereUniqueInputSchema), z.lazy(() => ContractTemplateWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => ContractTemplateUpdateWithWhereUniqueWithoutProjectInputSchema),
                    z.lazy(() => ContractTemplateUpdateWithWhereUniqueWithoutProjectInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => ContractTemplateUpdateManyWithWhereWithoutProjectInputSchema),
                    z.lazy(() => ContractTemplateUpdateManyWithWhereWithoutProjectInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => ContractTemplateScalarWhereInputSchema), z.lazy(() => ContractTemplateScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default ContractTemplateUpdateManyWithoutProjectNestedInputSchema
