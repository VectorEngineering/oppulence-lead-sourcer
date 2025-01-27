import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceTemplateWhereInputSchema } from './InvoiceTemplateWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumInvoiceDeliveryTypeFilterSchema } from './EnumInvoiceDeliveryTypeFilterSchema';
import { InvoiceDeliveryTypeSchema } from './InvoiceDeliveryTypeSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { EnumInvoiceSizeNullableFilterSchema } from './EnumInvoiceSizeNullableFilterSchema';
import { InvoiceSizeSchema } from './InvoiceSizeSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { InvoiceListRelationFilterSchema } from './InvoiceListRelationFilterSchema';

export const InvoiceTemplateWhereUniqueInputSchema: z.ZodType<Prisma.InvoiceTemplateWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => InvoiceTemplateWhereInputSchema),z.lazy(() => InvoiceTemplateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InvoiceTemplateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InvoiceTemplateWhereInputSchema),z.lazy(() => InvoiceTemplateWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  currency: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  customerLabel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dateFormat: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  deliveryType: z.union([ z.lazy(() => EnumInvoiceDeliveryTypeFilterSchema),z.lazy(() => InvoiceDeliveryTypeSchema) ]).optional(),
  descriptionLabel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  discountLabel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  dueDateLabel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  fromDetails: z.lazy(() => JsonNullableFilterSchema).optional(),
  fromLabel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  includeDecimals: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  includeDiscount: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  includeQr: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  includeTax: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  includeUnits: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  includeVat: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  invoiceNoLabel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  issueDateLabel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  logoUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  noteLabel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  paymentDetails: z.lazy(() => JsonNullableFilterSchema).optional(),
  paymentLabel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  priceLabel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  quantityLabel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  size: z.union([ z.lazy(() => EnumInvoiceSizeNullableFilterSchema),z.lazy(() => InvoiceSizeSchema) ]).optional().nullable(),
  taxLabel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  taxRate: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  totalLabel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  totalSummaryLabel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  vatLabel: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  vatRate: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  version: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  isDefault: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isArchived: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  language: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  tags: z.lazy(() => JsonNullableFilterSchema).optional(),
  metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
  customFields: z.lazy(() => JsonNullableFilterSchema).optional(),
  style: z.lazy(() => JsonNullableFilterSchema).optional(),
  layout: z.lazy(() => JsonNullableFilterSchema).optional(),
  fonts: z.lazy(() => JsonNullableFilterSchema).optional(),
  colors: z.lazy(() => JsonNullableFilterSchema).optional(),
  variables: z.lazy(() => JsonNullableFilterSchema).optional(),
  sections: z.lazy(() => JsonNullableFilterSchema).optional(),
  footerContent: z.lazy(() => JsonNullableFilterSchema).optional(),
  headerContent: z.lazy(() => JsonNullableFilterSchema).optional(),
  useCount: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  lastUsedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  timezone: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
  Invoice: z.lazy(() => InvoiceListRelationFilterSchema).optional()
}).strict());

export default InvoiceTemplateWhereUniqueInputSchema;
