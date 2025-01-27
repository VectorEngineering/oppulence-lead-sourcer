import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineAccessRuleCreateWithoutPipelineInputSchema } from './PipelineAccessRuleCreateWithoutPipelineInputSchema'
import { PipelineAccessRuleUncheckedCreateWithoutPipelineInputSchema } from './PipelineAccessRuleUncheckedCreateWithoutPipelineInputSchema'
import { PipelineAccessRuleCreateOrConnectWithoutPipelineInputSchema } from './PipelineAccessRuleCreateOrConnectWithoutPipelineInputSchema'
import { PipelineAccessRuleUpsertWithWhereUniqueWithoutPipelineInputSchema } from './PipelineAccessRuleUpsertWithWhereUniqueWithoutPipelineInputSchema'
import { PipelineAccessRuleCreateManyPipelineInputEnvelopeSchema } from './PipelineAccessRuleCreateManyPipelineInputEnvelopeSchema'
import { PipelineAccessRuleWhereUniqueInputSchema } from './PipelineAccessRuleWhereUniqueInputSchema'
import { PipelineAccessRuleUpdateWithWhereUniqueWithoutPipelineInputSchema } from './PipelineAccessRuleUpdateWithWhereUniqueWithoutPipelineInputSchema'
import { PipelineAccessRuleUpdateManyWithWhereWithoutPipelineInputSchema } from './PipelineAccessRuleUpdateManyWithWhereWithoutPipelineInputSchema'
import { PipelineAccessRuleScalarWhereInputSchema } from './PipelineAccessRuleScalarWhereInputSchema'

export const PipelineAccessRuleUncheckedUpdateManyWithoutPipelineNestedInputSchema: z.ZodType<Prisma.PipelineAccessRuleUncheckedUpdateManyWithoutPipelineNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => PipelineAccessRuleCreateWithoutPipelineInputSchema),
                    z.lazy(() => PipelineAccessRuleCreateWithoutPipelineInputSchema).array(),
                    z.lazy(() => PipelineAccessRuleUncheckedCreateWithoutPipelineInputSchema),
                    z.lazy(() => PipelineAccessRuleUncheckedCreateWithoutPipelineInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => PipelineAccessRuleCreateOrConnectWithoutPipelineInputSchema),
                    z.lazy(() => PipelineAccessRuleCreateOrConnectWithoutPipelineInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => PipelineAccessRuleUpsertWithWhereUniqueWithoutPipelineInputSchema),
                    z.lazy(() => PipelineAccessRuleUpsertWithWhereUniqueWithoutPipelineInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => PipelineAccessRuleCreateManyPipelineInputEnvelopeSchema).optional(),
            set: z
                .union([
                    z.lazy(() => PipelineAccessRuleWhereUniqueInputSchema),
                    z.lazy(() => PipelineAccessRuleWhereUniqueInputSchema).array()
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => PipelineAccessRuleWhereUniqueInputSchema),
                    z.lazy(() => PipelineAccessRuleWhereUniqueInputSchema).array()
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => PipelineAccessRuleWhereUniqueInputSchema),
                    z.lazy(() => PipelineAccessRuleWhereUniqueInputSchema).array()
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => PipelineAccessRuleWhereUniqueInputSchema),
                    z.lazy(() => PipelineAccessRuleWhereUniqueInputSchema).array()
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(() => PipelineAccessRuleUpdateWithWhereUniqueWithoutPipelineInputSchema),
                    z.lazy(() => PipelineAccessRuleUpdateWithWhereUniqueWithoutPipelineInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => PipelineAccessRuleUpdateManyWithWhereWithoutPipelineInputSchema),
                    z.lazy(() => PipelineAccessRuleUpdateManyWithWhereWithoutPipelineInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => PipelineAccessRuleScalarWhereInputSchema),
                    z.lazy(() => PipelineAccessRuleScalarWhereInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default PipelineAccessRuleUncheckedUpdateManyWithoutPipelineNestedInputSchema
