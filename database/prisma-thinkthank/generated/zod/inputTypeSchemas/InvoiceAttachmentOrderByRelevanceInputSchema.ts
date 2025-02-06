import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceAttachmentOrderByRelevanceFieldEnumSchema } from './InvoiceAttachmentOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const InvoiceAttachmentOrderByRelevanceInputSchema: z.ZodType<Prisma.InvoiceAttachmentOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => InvoiceAttachmentOrderByRelevanceFieldEnumSchema),z.lazy(() => InvoiceAttachmentOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default InvoiceAttachmentOrderByRelevanceInputSchema;
