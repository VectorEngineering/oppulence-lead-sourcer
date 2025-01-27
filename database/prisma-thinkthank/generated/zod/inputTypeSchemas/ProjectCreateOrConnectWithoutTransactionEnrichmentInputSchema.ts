import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectCreateWithoutTransactionEnrichmentInputSchema } from './ProjectCreateWithoutTransactionEnrichmentInputSchema'
import { ProjectUncheckedCreateWithoutTransactionEnrichmentInputSchema } from './ProjectUncheckedCreateWithoutTransactionEnrichmentInputSchema'

export const ProjectCreateOrConnectWithoutTransactionEnrichmentInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutTransactionEnrichmentInput> =
    z
        .object({
            where: z.lazy(() => ProjectWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => ProjectCreateWithoutTransactionEnrichmentInputSchema),
                z.lazy(() => ProjectUncheckedCreateWithoutTransactionEnrichmentInputSchema)
            ])
        })
        .strict()

export default ProjectCreateOrConnectWithoutTransactionEnrichmentInputSchema
