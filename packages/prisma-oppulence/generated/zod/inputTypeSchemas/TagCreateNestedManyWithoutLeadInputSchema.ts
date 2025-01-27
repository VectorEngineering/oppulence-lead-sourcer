import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutLeadInputSchema } from './TagCreateWithoutLeadInputSchema';
import { TagUncheckedCreateWithoutLeadInputSchema } from './TagUncheckedCreateWithoutLeadInputSchema';
import { TagCreateOrConnectWithoutLeadInputSchema } from './TagCreateOrConnectWithoutLeadInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.TagCreateNestedManyWithoutLeadInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutLeadInputSchema),z.lazy(() => TagCreateWithoutLeadInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutLeadInputSchema),z.lazy(() => TagUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutLeadInputSchema),z.lazy(() => TagCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TagCreateNestedManyWithoutLeadInputSchema;
