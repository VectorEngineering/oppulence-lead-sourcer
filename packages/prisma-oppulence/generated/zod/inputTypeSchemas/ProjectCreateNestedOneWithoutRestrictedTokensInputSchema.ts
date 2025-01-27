import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutRestrictedTokensInputSchema } from './ProjectCreateWithoutRestrictedTokensInputSchema';
import { ProjectUncheckedCreateWithoutRestrictedTokensInputSchema } from './ProjectUncheckedCreateWithoutRestrictedTokensInputSchema';
import { ProjectCreateOrConnectWithoutRestrictedTokensInputSchema } from './ProjectCreateOrConnectWithoutRestrictedTokensInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';

export const ProjectCreateNestedOneWithoutRestrictedTokensInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutRestrictedTokensInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutRestrictedTokensInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutRestrictedTokensInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutRestrictedTokensInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export default ProjectCreateNestedOneWithoutRestrictedTokensInputSchema;
