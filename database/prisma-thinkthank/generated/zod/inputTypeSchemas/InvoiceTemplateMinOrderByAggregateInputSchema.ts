import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const InvoiceTemplateMinOrderByAggregateInputSchema: z.ZodType<Prisma.InvoiceTemplateMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  customerLabel: z.lazy(() => SortOrderSchema).optional(),
  dateFormat: z.lazy(() => SortOrderSchema).optional(),
  deliveryType: z.lazy(() => SortOrderSchema).optional(),
  descriptionLabel: z.lazy(() => SortOrderSchema).optional(),
  discountLabel: z.lazy(() => SortOrderSchema).optional(),
  dueDateLabel: z.lazy(() => SortOrderSchema).optional(),
  fromLabel: z.lazy(() => SortOrderSchema).optional(),
  includeDecimals: z.lazy(() => SortOrderSchema).optional(),
  includeDiscount: z.lazy(() => SortOrderSchema).optional(),
  includeQr: z.lazy(() => SortOrderSchema).optional(),
  includeTax: z.lazy(() => SortOrderSchema).optional(),
  includeUnits: z.lazy(() => SortOrderSchema).optional(),
  includeVat: z.lazy(() => SortOrderSchema).optional(),
  invoiceNoLabel: z.lazy(() => SortOrderSchema).optional(),
  issueDateLabel: z.lazy(() => SortOrderSchema).optional(),
  logoUrl: z.lazy(() => SortOrderSchema).optional(),
  noteLabel: z.lazy(() => SortOrderSchema).optional(),
  paymentLabel: z.lazy(() => SortOrderSchema).optional(),
  priceLabel: z.lazy(() => SortOrderSchema).optional(),
  quantityLabel: z.lazy(() => SortOrderSchema).optional(),
  size: z.lazy(() => SortOrderSchema).optional(),
  taxLabel: z.lazy(() => SortOrderSchema).optional(),
  taxRate: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  totalLabel: z.lazy(() => SortOrderSchema).optional(),
  totalSummaryLabel: z.lazy(() => SortOrderSchema).optional(),
  vatLabel: z.lazy(() => SortOrderSchema).optional(),
  vatRate: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional(),
  isDefault: z.lazy(() => SortOrderSchema).optional(),
  isArchived: z.lazy(() => SortOrderSchema).optional(),
  language: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  useCount: z.lazy(() => SortOrderSchema).optional(),
  lastUsedAt: z.lazy(() => SortOrderSchema).optional(),
  timezone: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default InvoiceTemplateMinOrderByAggregateInputSchema;
