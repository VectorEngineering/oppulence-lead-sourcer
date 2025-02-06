import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceAttachmentWhereUniqueInputSchema } from './InvoiceAttachmentWhereUniqueInputSchema';
import { InvoiceAttachmentCreateWithoutInvoiceInputSchema } from './InvoiceAttachmentCreateWithoutInvoiceInputSchema';
import { InvoiceAttachmentUncheckedCreateWithoutInvoiceInputSchema } from './InvoiceAttachmentUncheckedCreateWithoutInvoiceInputSchema';

export const InvoiceAttachmentCreateOrConnectWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoiceAttachmentCreateOrConnectWithoutInvoiceInput> = z.object({
  where: z.lazy(() => InvoiceAttachmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InvoiceAttachmentCreateWithoutInvoiceInputSchema),z.lazy(() => InvoiceAttachmentUncheckedCreateWithoutInvoiceInputSchema) ]),
}).strict();

export default InvoiceAttachmentCreateOrConnectWithoutInvoiceInputSchema;
