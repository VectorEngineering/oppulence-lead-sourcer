import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineAccessRuleCreateWithoutPipelineInputSchema } from './PipelineAccessRuleCreateWithoutPipelineInputSchema'
import { PipelineAccessRuleUncheckedCreateWithoutPipelineInputSchema } from './PipelineAccessRuleUncheckedCreateWithoutPipelineInputSchema'
import { PipelineAccessRuleCreateOrConnectWithoutPipelineInputSchema } from './PipelineAccessRuleCreateOrConnectWithoutPipelineInputSchema'
import { PipelineAccessRuleCreateManyPipelineInputEnvelopeSchema } from './PipelineAccessRuleCreateManyPipelineInputEnvelopeSchema'
import { PipelineAccessRuleWhereUniqueInputSchema } from './PipelineAccessRuleWhereUniqueInputSchema'

export const PipelineAccessRuleUncheckedCreateNestedManyWithoutPipelineInputSchema: z.ZodType<Prisma.PipelineAccessRuleUncheckedCreateNestedManyWithoutPipelineInput> =
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
            createMany: z.lazy(() => PipelineAccessRuleCreateManyPipelineInputEnvelopeSchema).optional(),
            connect: z
                .union([
                    z.lazy(() => PipelineAccessRuleWhereUniqueInputSchema),
                    z.lazy(() => PipelineAccessRuleWhereUniqueInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default PipelineAccessRuleUncheckedCreateNestedManyWithoutPipelineInputSchema
