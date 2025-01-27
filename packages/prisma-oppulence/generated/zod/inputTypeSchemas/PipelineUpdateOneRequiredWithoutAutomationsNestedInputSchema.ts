import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineCreateWithoutAutomationsInputSchema } from './PipelineCreateWithoutAutomationsInputSchema'
import { PipelineUncheckedCreateWithoutAutomationsInputSchema } from './PipelineUncheckedCreateWithoutAutomationsInputSchema'
import { PipelineCreateOrConnectWithoutAutomationsInputSchema } from './PipelineCreateOrConnectWithoutAutomationsInputSchema'
import { PipelineUpsertWithoutAutomationsInputSchema } from './PipelineUpsertWithoutAutomationsInputSchema'
import { PipelineWhereUniqueInputSchema } from './PipelineWhereUniqueInputSchema'
import { PipelineUpdateToOneWithWhereWithoutAutomationsInputSchema } from './PipelineUpdateToOneWithWhereWithoutAutomationsInputSchema'
import { PipelineUpdateWithoutAutomationsInputSchema } from './PipelineUpdateWithoutAutomationsInputSchema'
import { PipelineUncheckedUpdateWithoutAutomationsInputSchema } from './PipelineUncheckedUpdateWithoutAutomationsInputSchema'

export const PipelineUpdateOneRequiredWithoutAutomationsNestedInputSchema: z.ZodType<Prisma.PipelineUpdateOneRequiredWithoutAutomationsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => PipelineCreateWithoutAutomationsInputSchema),
                    z.lazy(() => PipelineUncheckedCreateWithoutAutomationsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => PipelineCreateOrConnectWithoutAutomationsInputSchema).optional(),
            upsert: z.lazy(() => PipelineUpsertWithoutAutomationsInputSchema).optional(),
            connect: z.lazy(() => PipelineWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => PipelineUpdateToOneWithWhereWithoutAutomationsInputSchema),
                    z.lazy(() => PipelineUpdateWithoutAutomationsInputSchema),
                    z.lazy(() => PipelineUncheckedUpdateWithoutAutomationsInputSchema)
                ])
                .optional()
        })
        .strict()

export default PipelineUpdateOneRequiredWithoutAutomationsNestedInputSchema
