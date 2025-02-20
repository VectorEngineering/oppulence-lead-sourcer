import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProjectCreateWithoutTagsInputSchema } from './ProjectCreateWithoutTagsInputSchema'
import { ProjectUncheckedCreateWithoutTagsInputSchema } from './ProjectUncheckedCreateWithoutTagsInputSchema'
import { ProjectCreateOrConnectWithoutTagsInputSchema } from './ProjectCreateOrConnectWithoutTagsInputSchema'
import { ProjectUpsertWithoutTagsInputSchema } from './ProjectUpsertWithoutTagsInputSchema'
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema'
import { ProjectUpdateToOneWithWhereWithoutTagsInputSchema } from './ProjectUpdateToOneWithWhereWithoutTagsInputSchema'
import { ProjectUpdateWithoutTagsInputSchema } from './ProjectUpdateWithoutTagsInputSchema'
import { ProjectUncheckedUpdateWithoutTagsInputSchema } from './ProjectUncheckedUpdateWithoutTagsInputSchema'

export const ProjectUpdateOneRequiredWithoutTagsNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutTagsNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => ProjectCreateWithoutTagsInputSchema), z.lazy(() => ProjectUncheckedCreateWithoutTagsInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutTagsInputSchema).optional(),
        upsert: z.lazy(() => ProjectUpsertWithoutTagsInputSchema).optional(),
        connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => ProjectUpdateToOneWithWhereWithoutTagsInputSchema),
                z.lazy(() => ProjectUpdateWithoutTagsInputSchema),
                z.lazy(() => ProjectUncheckedUpdateWithoutTagsInputSchema)
            ])
            .optional()
    })
    .strict()

export default ProjectUpdateOneRequiredWithoutTagsNestedInputSchema
