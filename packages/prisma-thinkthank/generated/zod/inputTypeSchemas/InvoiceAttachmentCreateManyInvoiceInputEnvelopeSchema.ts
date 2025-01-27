import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceAttachmentCreateManyInvoiceInputSchema } from './InvoiceAttachmentCreateManyInvoiceInputSchema';

export const InvoiceAttachmentCreateManyInvoiceInputEnvelopeSchema: z.ZodType<Prisma.InvoiceAttachmentCreateManyInvoiceInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => InvoiceAttachmentCreateManyInvoiceInputSchema),z.lazy(() => InvoiceAttachmentCreateManyInvoiceInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default InvoiceAttachmentCreateManyInvoiceInputEnvelopeSchema;
