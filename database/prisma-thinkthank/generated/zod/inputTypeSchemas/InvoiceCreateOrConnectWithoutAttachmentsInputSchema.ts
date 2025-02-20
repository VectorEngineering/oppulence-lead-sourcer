import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';
import { InvoiceCreateWithoutAttachmentsInputSchema } from './InvoiceCreateWithoutAttachmentsInputSchema';
import { InvoiceUncheckedCreateWithoutAttachmentsInputSchema } from './InvoiceUncheckedCreateWithoutAttachmentsInputSchema';

export const InvoiceCreateOrConnectWithoutAttachmentsInputSchema: z.ZodType<Prisma.InvoiceCreateOrConnectWithoutAttachmentsInput> = z.object({
  where: z.lazy(() => InvoiceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InvoiceCreateWithoutAttachmentsInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutAttachmentsInputSchema) ]),
}).strict();

export default InvoiceCreateOrConnectWithoutAttachmentsInputSchema;
