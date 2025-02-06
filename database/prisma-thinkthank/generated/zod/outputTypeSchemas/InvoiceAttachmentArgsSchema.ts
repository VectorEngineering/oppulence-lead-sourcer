import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceAttachmentSelectSchema } from '../inputTypeSchemas/InvoiceAttachmentSelectSchema';
import { InvoiceAttachmentIncludeSchema } from '../inputTypeSchemas/InvoiceAttachmentIncludeSchema';

export const InvoiceAttachmentArgsSchema: z.ZodType<Prisma.InvoiceAttachmentDefaultArgs> = z.object({
  select: z.lazy(() => InvoiceAttachmentSelectSchema).optional(),
  include: z.lazy(() => InvoiceAttachmentIncludeSchema).optional(),
}).strict();

export default InvoiceAttachmentArgsSchema;
