import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { YearInReviewCreateWithoutWorkspaceInputSchema } from './YearInReviewCreateWithoutWorkspaceInputSchema'
import { YearInReviewUncheckedCreateWithoutWorkspaceInputSchema } from './YearInReviewUncheckedCreateWithoutWorkspaceInputSchema'
import { YearInReviewCreateOrConnectWithoutWorkspaceInputSchema } from './YearInReviewCreateOrConnectWithoutWorkspaceInputSchema'
import { YearInReviewCreateManyWorkspaceInputEnvelopeSchema } from './YearInReviewCreateManyWorkspaceInputEnvelopeSchema'
import { YearInReviewWhereUniqueInputSchema } from './YearInReviewWhereUniqueInputSchema'

export const YearInReviewUncheckedCreateNestedManyWithoutWorkspaceInputSchema: z.ZodType<Prisma.YearInReviewUncheckedCreateNestedManyWithoutWorkspaceInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => YearInReviewCreateWithoutWorkspaceInputSchema),
                    z.lazy(() => YearInReviewCreateWithoutWorkspaceInputSchema).array(),
                    z.lazy(() => YearInReviewUncheckedCreateWithoutWorkspaceInputSchema),
                    z.lazy(() => YearInReviewUncheckedCreateWithoutWorkspaceInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => YearInReviewCreateOrConnectWithoutWorkspaceInputSchema),
                    z.lazy(() => YearInReviewCreateOrConnectWithoutWorkspaceInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => YearInReviewCreateManyWorkspaceInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => YearInReviewWhereUniqueInputSchema), z.lazy(() => YearInReviewWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default YearInReviewUncheckedCreateNestedManyWithoutWorkspaceInputSchema
