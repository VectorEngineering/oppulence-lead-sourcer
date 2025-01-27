import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceTemplateIncludeSchema } from '../inputTypeSchemas/InvoiceTemplateIncludeSchema'
import { InvoiceTemplateWhereUniqueInputSchema } from '../inputTypeSchemas/InvoiceTemplateWhereUniqueInputSchema'
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InvoiceTemplateSelectSchema: z.ZodType<Prisma.InvoiceTemplateSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  currency: z.boolean().optional(),
  customerLabel: z.boolean().optional(),
  dateFormat: z.boolean().optional(),
  deliveryType: z.boolean().optional(),
  descriptionLabel: z.boolean().optional(),
  discountLabel: z.boolean().optional(),
  dueDateLabel: z.boolean().optional(),
  fromDetails: z.boolean().optional(),
  fromLabel: z.boolean().optional(),
  includeDecimals: z.boolean().optional(),
  includeDiscount: z.boolean().optional(),
  includeQr: z.boolean().optional(),
  includeTax: z.boolean().optional(),
  includeUnits: z.boolean().optional(),
  includeVat: z.boolean().optional(),
  invoiceNoLabel: z.boolean().optional(),
  issueDateLabel: z.boolean().optional(),
  logoUrl: z.boolean().optional(),
  noteLabel: z.boolean().optional(),
  paymentDetails: z.boolean().optional(),
  paymentLabel: z.boolean().optional(),
  priceLabel: z.boolean().optional(),
  quantityLabel: z.boolean().optional(),
  size: z.boolean().optional(),
  taxLabel: z.boolean().optional(),
  taxRate: z.boolean().optional(),
  projectId: z.boolean().optional(),
  title: z.boolean().optional(),
  totalLabel: z.boolean().optional(),
  totalSummaryLabel: z.boolean().optional(),
  vatLabel: z.boolean().optional(),
  vatRate: z.boolean().optional(),
  version: z.boolean().optional(),
  isDefault: z.boolean().optional(),
  isArchived: z.boolean().optional(),
  language: z.boolean().optional(),
  description: z.boolean().optional(),
  tags: z.boolean().optional(),
  metadata: z.boolean().optional(),
  customFields: z.boolean().optional(),
  style: z.boolean().optional(),
  layout: z.boolean().optional(),
  fonts: z.boolean().optional(),
  colors: z.boolean().optional(),
  variables: z.boolean().optional(),
  sections: z.boolean().optional(),
  footerContent: z.boolean().optional(),
  headerContent: z.boolean().optional(),
  useCount: z.boolean().optional(),
  lastUsedAt: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

export const InvoiceTemplateFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InvoiceTemplateFindUniqueOrThrowArgs> = z.object({
  select: InvoiceTemplateSelectSchema.optional(),
  include: InvoiceTemplateIncludeSchema.optional(),
  where: InvoiceTemplateWhereUniqueInputSchema,
}).strict() ;

export default InvoiceTemplateFindUniqueOrThrowArgsSchema;
