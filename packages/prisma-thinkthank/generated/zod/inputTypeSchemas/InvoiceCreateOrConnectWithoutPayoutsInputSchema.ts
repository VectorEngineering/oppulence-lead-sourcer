import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';
import { InvoiceCreateWithoutPayoutsInputSchema } from './InvoiceCreateWithoutPayoutsInputSchema';
import { InvoiceUncheckedCreateWithoutPayoutsInputSchema } from './InvoiceUncheckedCreateWithoutPayoutsInputSchema';

export const InvoiceCreateOrConnectWithoutPayoutsInputSchema: z.ZodType<Prisma.InvoiceCreateOrConnectWithoutPayoutsInput> = z.object({
  where: z.lazy(() => InvoiceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InvoiceCreateWithoutPayoutsInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutPayoutsInputSchema) ]),
}).strict();

export default InvoiceCreateOrConnectWithoutPayoutsInputSchema;
