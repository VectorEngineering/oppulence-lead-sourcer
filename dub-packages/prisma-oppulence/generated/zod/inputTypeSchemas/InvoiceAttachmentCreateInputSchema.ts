import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { InvoiceCreateNestedOneWithoutAttachmentsInputSchema } from './InvoiceCreateNestedOneWithoutAttachmentsInputSchema';

export const InvoiceAttachmentCreateInputSchema: z.ZodType<Prisma.InvoiceAttachmentCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  path: z.string(),
  size: z.number().int().optional().nullable(),
  mimeType: z.string().optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  createdBy: z.string().optional().nullable(),
  invoice: z.lazy(() => InvoiceCreateNestedOneWithoutAttachmentsInputSchema)
}).strict();

export default InvoiceAttachmentCreateInputSchema;
