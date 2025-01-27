import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectUpdateWithoutBankConnectionsInputSchema } from './ProjectUpdateWithoutBankConnectionsInputSchema'
import { ProjectUncheckedUpdateWithoutBankConnectionsInputSchema } from './ProjectUncheckedUpdateWithoutBankConnectionsInputSchema'
import { ProjectCreateWithoutBankConnectionsInputSchema } from './ProjectCreateWithoutBankConnectionsInputSchema'
import { ProjectUncheckedCreateWithoutBankConnectionsInputSchema } from './ProjectUncheckedCreateWithoutBankConnectionsInputSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'

export const ProjectUpsertWithoutBankConnectionsInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutBankConnectionsInput> = z
    .object({
        update: z.union([
            z.lazy(() => ProjectUpdateWithoutBankConnectionsInputSchema),
            z.lazy(() => ProjectUncheckedUpdateWithoutBankConnectionsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => ProjectCreateWithoutBankConnectionsInputSchema),
            z.lazy(() => ProjectUncheckedCreateWithoutBankConnectionsInputSchema)
        ]),
        where: z.lazy(() => ProjectWhereInputSchema).optional()
    })
    .strict()

export default ProjectUpsertWithoutBankConnectionsInputSchema
