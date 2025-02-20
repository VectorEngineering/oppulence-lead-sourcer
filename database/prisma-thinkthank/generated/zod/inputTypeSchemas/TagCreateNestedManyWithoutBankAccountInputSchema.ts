import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TagCreateWithoutBankAccountInputSchema } from './TagCreateWithoutBankAccountInputSchema'
import { TagUncheckedCreateWithoutBankAccountInputSchema } from './TagUncheckedCreateWithoutBankAccountInputSchema'
import { TagCreateOrConnectWithoutBankAccountInputSchema } from './TagCreateOrConnectWithoutBankAccountInputSchema'
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema'

export const TagCreateNestedManyWithoutBankAccountInputSchema: z.ZodType<Prisma.TagCreateNestedManyWithoutBankAccountInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => TagCreateWithoutBankAccountInputSchema),
                z.lazy(() => TagCreateWithoutBankAccountInputSchema).array(),
                z.lazy(() => TagUncheckedCreateWithoutBankAccountInputSchema),
                z.lazy(() => TagUncheckedCreateWithoutBankAccountInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => TagCreateOrConnectWithoutBankAccountInputSchema),
                z.lazy(() => TagCreateOrConnectWithoutBankAccountInputSchema).array()
            ])
            .optional(),
        connect: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional()
    })
    .strict()

export default TagCreateNestedManyWithoutBankAccountInputSchema
