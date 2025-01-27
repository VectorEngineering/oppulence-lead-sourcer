import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema'
import { ProgramUpdateWithoutWorkspaceInputSchema } from './ProgramUpdateWithoutWorkspaceInputSchema'
import { ProgramUncheckedUpdateWithoutWorkspaceInputSchema } from './ProgramUncheckedUpdateWithoutWorkspaceInputSchema'
import { ProgramCreateWithoutWorkspaceInputSchema } from './ProgramCreateWithoutWorkspaceInputSchema'
import { ProgramUncheckedCreateWithoutWorkspaceInputSchema } from './ProgramUncheckedCreateWithoutWorkspaceInputSchema'

export const ProgramUpsertWithWhereUniqueWithoutWorkspaceInputSchema: z.ZodType<Prisma.ProgramUpsertWithWhereUniqueWithoutWorkspaceInput> =
    z
        .object({
            where: z.lazy(() => ProgramWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => ProgramUpdateWithoutWorkspaceInputSchema),
                z.lazy(() => ProgramUncheckedUpdateWithoutWorkspaceInputSchema)
            ]),
            create: z.union([
                z.lazy(() => ProgramCreateWithoutWorkspaceInputSchema),
                z.lazy(() => ProgramUncheckedCreateWithoutWorkspaceInputSchema)
            ])
        })
        .strict()

export default ProgramUpsertWithWhereUniqueWithoutWorkspaceInputSchema
