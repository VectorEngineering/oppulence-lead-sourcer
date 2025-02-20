import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectCreateWithoutBankConnectionsInputSchema } from './ProjectCreateWithoutBankConnectionsInputSchema'
import { ProjectUncheckedCreateWithoutBankConnectionsInputSchema } from './ProjectUncheckedCreateWithoutBankConnectionsInputSchema'

export const ProjectCreateOrConnectWithoutBankConnectionsInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutBankConnectionsInput> =
    z
        .object({
            where: z.lazy(() => ProjectWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => ProjectCreateWithoutBankConnectionsInputSchema),
                z.lazy(() => ProjectUncheckedCreateWithoutBankConnectionsInputSchema)
            ])
        })
        .strict()

export default ProjectCreateOrConnectWithoutBankConnectionsInputSchema
