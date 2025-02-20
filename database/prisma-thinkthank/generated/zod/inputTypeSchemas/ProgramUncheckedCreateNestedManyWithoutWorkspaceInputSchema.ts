import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramCreateWithoutWorkspaceInputSchema } from './ProgramCreateWithoutWorkspaceInputSchema'
import { ProgramUncheckedCreateWithoutWorkspaceInputSchema } from './ProgramUncheckedCreateWithoutWorkspaceInputSchema'
import { ProgramCreateOrConnectWithoutWorkspaceInputSchema } from './ProgramCreateOrConnectWithoutWorkspaceInputSchema'
import { ProgramCreateManyWorkspaceInputEnvelopeSchema } from './ProgramCreateManyWorkspaceInputEnvelopeSchema'
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema'

export const ProgramUncheckedCreateNestedManyWithoutWorkspaceInputSchema: z.ZodType<Prisma.ProgramUncheckedCreateNestedManyWithoutWorkspaceInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ProgramCreateWithoutWorkspaceInputSchema),
                    z.lazy(() => ProgramCreateWithoutWorkspaceInputSchema).array(),
                    z.lazy(() => ProgramUncheckedCreateWithoutWorkspaceInputSchema),
                    z.lazy(() => ProgramUncheckedCreateWithoutWorkspaceInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => ProgramCreateOrConnectWithoutWorkspaceInputSchema),
                    z.lazy(() => ProgramCreateOrConnectWithoutWorkspaceInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => ProgramCreateManyWorkspaceInputEnvelopeSchema).optional(),
            connect: z.union([z.lazy(() => ProgramWhereUniqueInputSchema), z.lazy(() => ProgramWhereUniqueInputSchema).array()]).optional()
        })
        .strict()

export default ProgramUncheckedCreateNestedManyWithoutWorkspaceInputSchema
