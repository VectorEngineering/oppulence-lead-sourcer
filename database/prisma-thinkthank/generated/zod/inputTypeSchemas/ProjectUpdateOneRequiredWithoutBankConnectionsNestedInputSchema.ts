import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutBankConnectionsInputSchema } from './ProjectCreateWithoutBankConnectionsInputSchema'
import { ProjectUncheckedCreateWithoutBankConnectionsInputSchema } from './ProjectUncheckedCreateWithoutBankConnectionsInputSchema'
import { ProjectCreateOrConnectWithoutBankConnectionsInputSchema } from './ProjectCreateOrConnectWithoutBankConnectionsInputSchema'
import { ProjectUpsertWithoutBankConnectionsInputSchema } from './ProjectUpsertWithoutBankConnectionsInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectUpdateToOneWithWhereWithoutBankConnectionsInputSchema } from './ProjectUpdateToOneWithWhereWithoutBankConnectionsInputSchema'
import { ProjectUpdateWithoutBankConnectionsInputSchema } from './ProjectUpdateWithoutBankConnectionsInputSchema'
import { ProjectUncheckedUpdateWithoutBankConnectionsInputSchema } from './ProjectUncheckedUpdateWithoutBankConnectionsInputSchema'

export const ProjectUpdateOneRequiredWithoutBankConnectionsNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutBankConnectionsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ProjectCreateWithoutBankConnectionsInputSchema),
                    z.lazy(() => ProjectUncheckedCreateWithoutBankConnectionsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutBankConnectionsInputSchema).optional(),
            upsert: z.lazy(() => ProjectUpsertWithoutBankConnectionsInputSchema).optional(),
            connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => ProjectUpdateToOneWithWhereWithoutBankConnectionsInputSchema),
                    z.lazy(() => ProjectUpdateWithoutBankConnectionsInputSchema),
                    z.lazy(() => ProjectUncheckedUpdateWithoutBankConnectionsInputSchema)
                ])
                .optional()
        })
        .strict()

export default ProjectUpdateOneRequiredWithoutBankConnectionsNestedInputSchema
