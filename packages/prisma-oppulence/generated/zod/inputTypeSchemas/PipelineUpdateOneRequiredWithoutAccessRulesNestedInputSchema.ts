import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineCreateWithoutAccessRulesInputSchema } from './PipelineCreateWithoutAccessRulesInputSchema'
import { PipelineUncheckedCreateWithoutAccessRulesInputSchema } from './PipelineUncheckedCreateWithoutAccessRulesInputSchema'
import { PipelineCreateOrConnectWithoutAccessRulesInputSchema } from './PipelineCreateOrConnectWithoutAccessRulesInputSchema'
import { PipelineUpsertWithoutAccessRulesInputSchema } from './PipelineUpsertWithoutAccessRulesInputSchema'
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema'
import { PipelineUpdateToOneWithWhereWithoutAccessRulesInputSchema } from './PipelineUpdateToOneWithWhereWithoutAccessRulesInputSchema'
import { PipelineUpdateWithoutAccessRulesInputSchema } from './PipelineUpdateWithoutAccessRulesInputSchema'
import { PipelineUncheckedUpdateWithoutAccessRulesInputSchema } from './PipelineUncheckedUpdateWithoutAccessRulesInputSchema'

export const PipelineUpdateOneRequiredWithoutAccessRulesNestedInputSchema: z.ZodType<Prisma.PipelineUpdateOneRequiredWithoutAccessRulesNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => PipelineCreateWithoutAccessRulesInputSchema),
                    z.lazy(() => PipelineUncheckedCreateWithoutAccessRulesInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => PipelineCreateOrConnectWithoutAccessRulesInputSchema).optional(),
            upsert: z.lazy(() => PipelineUpsertWithoutAccessRulesInputSchema).optional(),
            connect: z.lazy(() => PipelineWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => PipelineUpdateToOneWithWhereWithoutAccessRulesInputSchema),
                    z.lazy(() => PipelineUpdateWithoutAccessRulesInputSchema),
                    z.lazy(() => PipelineUncheckedUpdateWithoutAccessRulesInputSchema)
                ])
                .optional()
        })
        .strict()

export default PipelineUpdateOneRequiredWithoutAccessRulesNestedInputSchema
