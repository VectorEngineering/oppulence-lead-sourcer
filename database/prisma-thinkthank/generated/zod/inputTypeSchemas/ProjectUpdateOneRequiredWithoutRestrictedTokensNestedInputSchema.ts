import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutRestrictedTokensInputSchema } from './ProjectCreateWithoutRestrictedTokensInputSchema'
import { ProjectUncheckedCreateWithoutRestrictedTokensInputSchema } from './ProjectUncheckedCreateWithoutRestrictedTokensInputSchema'
import { ProjectCreateOrConnectWithoutRestrictedTokensInputSchema } from './ProjectCreateOrConnectWithoutRestrictedTokensInputSchema'
import { ProjectUpsertWithoutRestrictedTokensInputSchema } from './ProjectUpsertWithoutRestrictedTokensInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectUpdateToOneWithWhereWithoutRestrictedTokensInputSchema } from './ProjectUpdateToOneWithWhereWithoutRestrictedTokensInputSchema'
import { ProjectUpdateWithoutRestrictedTokensInputSchema } from './ProjectUpdateWithoutRestrictedTokensInputSchema'
import { ProjectUncheckedUpdateWithoutRestrictedTokensInputSchema } from './ProjectUncheckedUpdateWithoutRestrictedTokensInputSchema'

export const ProjectUpdateOneRequiredWithoutRestrictedTokensNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutRestrictedTokensNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ProjectCreateWithoutRestrictedTokensInputSchema),
                    z.lazy(() => ProjectUncheckedCreateWithoutRestrictedTokensInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutRestrictedTokensInputSchema).optional(),
            upsert: z.lazy(() => ProjectUpsertWithoutRestrictedTokensInputSchema).optional(),
            connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => ProjectUpdateToOneWithWhereWithoutRestrictedTokensInputSchema),
                    z.lazy(() => ProjectUpdateWithoutRestrictedTokensInputSchema),
                    z.lazy(() => ProjectUncheckedUpdateWithoutRestrictedTokensInputSchema)
                ])
                .optional()
        })
        .strict()

export default ProjectUpdateOneRequiredWithoutRestrictedTokensNestedInputSchema
