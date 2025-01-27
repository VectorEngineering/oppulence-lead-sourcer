import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractDocumentCreateWithoutContractInputSchema } from './ContractDocumentCreateWithoutContractInputSchema'
import { ContractDocumentUncheckedCreateWithoutContractInputSchema } from './ContractDocumentUncheckedCreateWithoutContractInputSchema'
import { ContractDocumentCreateOrConnectWithoutContractInputSchema } from './ContractDocumentCreateOrConnectWithoutContractInputSchema'
import { ContractDocumentUpsertWithWhereUniqueWithoutContractInputSchema } from './ContractDocumentUpsertWithWhereUniqueWithoutContractInputSchema'
import { ContractDocumentCreateManyContractInputEnvelopeSchema } from './ContractDocumentCreateManyContractInputEnvelopeSchema'
import { ContractDocumentWhereUniqueInputSchema } from './ContractDocumentWhereUniqueInputSchema'
import { ContractDocumentUpdateWithWhereUniqueWithoutContractInputSchema } from './ContractDocumentUpdateWithWhereUniqueWithoutContractInputSchema'
import { ContractDocumentUpdateManyWithWhereWithoutContractInputSchema } from './ContractDocumentUpdateManyWithWhereWithoutContractInputSchema'
import { ContractDocumentScalarWhereInputSchema } from './ContractDocumentScalarWhereInputSchema'

export const ContractDocumentUpdateManyWithoutContractNestedInputSchema: z.ZodType<Prisma.ContractDocumentUpdateManyWithoutContractNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ContractDocumentCreateWithoutContractInputSchema),
                    z.lazy(() => ContractDocumentCreateWithoutContractInputSchema).array(),
                    z.lazy(() => ContractDocumentUncheckedCreateWithoutContractInputSchema),
                    z.lazy(() => ContractDocumentUncheckedCreateWithoutContractInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => ContractDocumentCreateOrConnectWithoutContractInputSchema),
                    z.lazy(() => ContractDocumentCreateOrConnectWithoutContractInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => ContractDocumentUpsertWithWhereUniqueWithoutContractInputSchema),
                    z.lazy(() => ContractDocumentUpsertWithWhereUniqueWithoutContractInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => ContractDocumentCreateManyContractInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => ContractDocumentWhereUniqueInputSchema), z.lazy(() => ContractDocumentWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => ContractDocumentWhereUniqueInputSchema), z.lazy(() => ContractDocumentWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => ContractDocumentWhereUniqueInputSchema), z.lazy(() => ContractDocumentWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => ContractDocumentWhereUniqueInputSchema), z.lazy(() => ContractDocumentWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => ContractDocumentUpdateWithWhereUniqueWithoutContractInputSchema),
                    z.lazy(() => ContractDocumentUpdateWithWhereUniqueWithoutContractInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => ContractDocumentUpdateManyWithWhereWithoutContractInputSchema),
                    z.lazy(() => ContractDocumentUpdateManyWithWhereWithoutContractInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => ContractDocumentScalarWhereInputSchema), z.lazy(() => ContractDocumentScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default ContractDocumentUpdateManyWithoutContractNestedInputSchema
