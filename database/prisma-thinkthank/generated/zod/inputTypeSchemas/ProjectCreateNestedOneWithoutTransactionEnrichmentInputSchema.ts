import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutTransactionEnrichmentInputSchema } from './ProjectCreateWithoutTransactionEnrichmentInputSchema'
import { ProjectUncheckedCreateWithoutTransactionEnrichmentInputSchema } from './ProjectUncheckedCreateWithoutTransactionEnrichmentInputSchema'
import { ProjectCreateOrConnectWithoutTransactionEnrichmentInputSchema } from './ProjectCreateOrConnectWithoutTransactionEnrichmentInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'

export const ProjectCreateNestedOneWithoutTransactionEnrichmentInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutTransactionEnrichmentInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ProjectCreateWithoutTransactionEnrichmentInputSchema),
                    z.lazy(() => ProjectUncheckedCreateWithoutTransactionEnrichmentInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutTransactionEnrichmentInputSchema).optional(),
            connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
        })
        .strict()

export default ProjectCreateNestedOneWithoutTransactionEnrichmentInputSchema
