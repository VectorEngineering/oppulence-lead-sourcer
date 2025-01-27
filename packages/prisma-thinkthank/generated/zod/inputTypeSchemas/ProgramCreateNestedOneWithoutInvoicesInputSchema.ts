import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramCreateWithoutInvoicesInputSchema } from './ProgramCreateWithoutInvoicesInputSchema';
import { ProgramUncheckedCreateWithoutInvoicesInputSchema } from './ProgramUncheckedCreateWithoutInvoicesInputSchema';
import { ProgramCreateOrConnectWithoutInvoicesInputSchema } from './ProgramCreateOrConnectWithoutInvoicesInputSchema';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';

export const ProgramCreateNestedOneWithoutInvoicesInputSchema: z.ZodType<Prisma.ProgramCreateNestedOneWithoutInvoicesInput> = z.object({
  create: z.union([ z.lazy(() => ProgramCreateWithoutInvoicesInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutInvoicesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProgramCreateOrConnectWithoutInvoicesInputSchema).optional(),
  connect: z.lazy(() => ProgramWhereUniqueInputSchema).optional()
}).strict();

export default ProgramCreateNestedOneWithoutInvoicesInputSchema;
