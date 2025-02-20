import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectUpdateWithoutBankAccountInputSchema } from './ProjectUpdateWithoutBankAccountInputSchema'
import { ProjectUncheckedUpdateWithoutBankAccountInputSchema } from './ProjectUncheckedUpdateWithoutBankAccountInputSchema'
import { ProjectCreateWithoutBankAccountInputSchema } from './ProjectCreateWithoutBankAccountInputSchema'
import { ProjectUncheckedCreateWithoutBankAccountInputSchema } from './ProjectUncheckedCreateWithoutBankAccountInputSchema'
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema'

export const ProjectUpsertWithoutBankAccountInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutBankAccountInput> = z
    .object({
        update: z.union([
            z.lazy(() => ProjectUpdateWithoutBankAccountInputSchema),
            z.lazy(() => ProjectUncheckedUpdateWithoutBankAccountInputSchema)
        ]),
        create: z.union([
            z.lazy(() => ProjectCreateWithoutBankAccountInputSchema),
            z.lazy(() => ProjectUncheckedCreateWithoutBankAccountInputSchema)
        ]),
        where: z.lazy(() => ProjectWhereInputSchema).optional()
    })
    .strict()

export default ProjectUpsertWithoutBankAccountInputSchema
