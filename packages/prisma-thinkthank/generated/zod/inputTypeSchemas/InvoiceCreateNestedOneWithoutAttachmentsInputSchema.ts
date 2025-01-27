import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCreateWithoutAttachmentsInputSchema } from './InvoiceCreateWithoutAttachmentsInputSchema';
import { InvoiceUncheckedCreateWithoutAttachmentsInputSchema } from './InvoiceUncheckedCreateWithoutAttachmentsInputSchema';
import { InvoiceCreateOrConnectWithoutAttachmentsInputSchema } from './InvoiceCreateOrConnectWithoutAttachmentsInputSchema';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';

export const InvoiceCreateNestedOneWithoutAttachmentsInputSchema: z.ZodType<Prisma.InvoiceCreateNestedOneWithoutAttachmentsInput> = z.object({
  create: z.union([ z.lazy(() => InvoiceCreateWithoutAttachmentsInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutAttachmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InvoiceCreateOrConnectWithoutAttachmentsInputSchema).optional(),
  connect: z.lazy(() => InvoiceWhereUniqueInputSchema).optional()
}).strict();

export default InvoiceCreateNestedOneWithoutAttachmentsInputSchema;
