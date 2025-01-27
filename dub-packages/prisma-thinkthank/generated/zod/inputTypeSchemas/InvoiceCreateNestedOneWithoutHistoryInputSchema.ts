import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCreateWithoutHistoryInputSchema } from './InvoiceCreateWithoutHistoryInputSchema';
import { InvoiceUncheckedCreateWithoutHistoryInputSchema } from './InvoiceUncheckedCreateWithoutHistoryInputSchema';
import { InvoiceCreateOrConnectWithoutHistoryInputSchema } from './InvoiceCreateOrConnectWithoutHistoryInputSchema';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';

export const InvoiceCreateNestedOneWithoutHistoryInputSchema: z.ZodType<Prisma.InvoiceCreateNestedOneWithoutHistoryInput> = z.object({
  create: z.union([ z.lazy(() => InvoiceCreateWithoutHistoryInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutHistoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InvoiceCreateOrConnectWithoutHistoryInputSchema).optional(),
  connect: z.lazy(() => InvoiceWhereUniqueInputSchema).optional()
}).strict();

export default InvoiceCreateNestedOneWithoutHistoryInputSchema;
