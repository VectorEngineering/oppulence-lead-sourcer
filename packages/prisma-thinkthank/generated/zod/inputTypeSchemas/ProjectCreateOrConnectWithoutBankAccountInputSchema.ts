import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectCreateWithoutBankAccountInputSchema } from './ProjectCreateWithoutBankAccountInputSchema'
import { ProjectUncheckedCreateWithoutBankAccountInputSchema } from './ProjectUncheckedCreateWithoutBankAccountInputSchema'

export const ProjectCreateOrConnectWithoutBankAccountInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutBankAccountInput> = z
    .object({
        where: z.lazy(() => ProjectWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ProjectCreateWithoutBankAccountInputSchema),
            z.lazy(() => ProjectUncheckedCreateWithoutBankAccountInputSchema)
        ])
    })
    .strict()

export default ProjectCreateOrConnectWithoutBankAccountInputSchema
