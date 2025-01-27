import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutBankAccountInputSchema } from './ProjectCreateWithoutBankAccountInputSchema'
import { ProjectUncheckedCreateWithoutBankAccountInputSchema } from './ProjectUncheckedCreateWithoutBankAccountInputSchema'
import { ProjectCreateOrConnectWithoutBankAccountInputSchema } from './ProjectCreateOrConnectWithoutBankAccountInputSchema'
import { ProjectUpsertWithoutBankAccountInputSchema } from './ProjectUpsertWithoutBankAccountInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectUpdateToOneWithWhereWithoutBankAccountInputSchema } from './ProjectUpdateToOneWithWhereWithoutBankAccountInputSchema'
import { ProjectUpdateWithoutBankAccountInputSchema } from './ProjectUpdateWithoutBankAccountInputSchema'
import { ProjectUncheckedUpdateWithoutBankAccountInputSchema } from './ProjectUncheckedUpdateWithoutBankAccountInputSchema'

export const ProjectUpdateOneRequiredWithoutBankAccountNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutBankAccountNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ProjectCreateWithoutBankAccountInputSchema),
                    z.lazy(() => ProjectUncheckedCreateWithoutBankAccountInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutBankAccountInputSchema).optional(),
            upsert: z.lazy(() => ProjectUpsertWithoutBankAccountInputSchema).optional(),
            connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => ProjectUpdateToOneWithWhereWithoutBankAccountInputSchema),
                    z.lazy(() => ProjectUpdateWithoutBankAccountInputSchema),
                    z.lazy(() => ProjectUncheckedUpdateWithoutBankAccountInputSchema)
                ])
                .optional()
        })
        .strict()

export default ProjectUpdateOneRequiredWithoutBankAccountNestedInputSchema
