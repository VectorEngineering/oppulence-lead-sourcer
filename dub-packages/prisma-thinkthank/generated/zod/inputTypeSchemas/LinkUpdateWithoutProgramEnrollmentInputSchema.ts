import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneWithoutLinksNestedInputSchema } from './UserUpdateOneWithoutLinksNestedInputSchema';
import { ProjectUpdateOneWithoutLinksNestedInputSchema } from './ProjectUpdateOneWithoutLinksNestedInputSchema';
import { DomainUpdateOneWithoutLinksNestedInputSchema } from './DomainUpdateOneWithoutLinksNestedInputSchema';
import { LinkTagUpdateManyWithoutLinkNestedInputSchema } from './LinkTagUpdateManyWithoutLinkNestedInputSchema';
import { LinkWebhookUpdateManyWithoutLinkNestedInputSchema } from './LinkWebhookUpdateManyWithoutLinkNestedInputSchema';
import { DashboardUpdateOneWithoutLinkNestedInputSchema } from './DashboardUpdateOneWithoutLinkNestedInputSchema';
import { ProgramInviteUpdateOneWithoutLinkNestedInputSchema } from './ProgramInviteUpdateOneWithoutLinkNestedInputSchema';
import { ProgramUpdateOneWithoutLinksNestedInputSchema } from './ProgramUpdateOneWithoutLinksNestedInputSchema';
import { CustomerUpdateManyWithoutLinkNestedInputSchema } from './CustomerUpdateManyWithoutLinkNestedInputSchema';

export const LinkUpdateWithoutProgramEnrollmentInputSchema: z.ZodType<Prisma.LinkUpdateWithoutProgramEnrollmentInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  shortLink: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  archived: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expiredUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  trackConversion: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  proxy: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  video: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  utm_source: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  utm_medium: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  utm_campaign: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  utm_term: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  utm_content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rewrite: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  doIndex: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  ios: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  android: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  geo: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  externalId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tenantId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  publicStats: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  clicks: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  lastClicked: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  leads: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  sales: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  saleAmount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneWithoutLinksNestedInputSchema).optional(),
  project: z.lazy(() => ProjectUpdateOneWithoutLinksNestedInputSchema).optional(),
  projectDomain: z.lazy(() => DomainUpdateOneWithoutLinksNestedInputSchema).optional(),
  tags: z.lazy(() => LinkTagUpdateManyWithoutLinkNestedInputSchema).optional(),
  webhooks: z.lazy(() => LinkWebhookUpdateManyWithoutLinkNestedInputSchema).optional(),
  dashboard: z.lazy(() => DashboardUpdateOneWithoutLinkNestedInputSchema).optional(),
  programInvite: z.lazy(() => ProgramInviteUpdateOneWithoutLinkNestedInputSchema).optional(),
  program: z.lazy(() => ProgramUpdateOneWithoutLinksNestedInputSchema).optional(),
  customers: z.lazy(() => CustomerUpdateManyWithoutLinkNestedInputSchema).optional()
}).strict();

export default LinkUpdateWithoutProgramEnrollmentInputSchema;
