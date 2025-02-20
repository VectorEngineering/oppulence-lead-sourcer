import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';
import { InvoiceCreateWithoutHistoryInputSchema } from './InvoiceCreateWithoutHistoryInputSchema';
import { InvoiceUncheckedCreateWithoutHistoryInputSchema } from './InvoiceUncheckedCreateWithoutHistoryInputSchema';

export const InvoiceCreateOrConnectWithoutHistoryInputSchema: z.ZodType<Prisma.InvoiceCreateOrConnectWithoutHistoryInput> = z.object({
  where: z.lazy(() => InvoiceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InvoiceCreateWithoutHistoryInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutHistoryInputSchema) ]),
}).strict();

export default InvoiceCreateOrConnectWithoutHistoryInputSchema;
