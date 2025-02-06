import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectCreateWithoutRestrictedTokensInputSchema } from './ProjectCreateWithoutRestrictedTokensInputSchema';
import { ProjectUncheckedCreateWithoutRestrictedTokensInputSchema } from './ProjectUncheckedCreateWithoutRestrictedTokensInputSchema';

export const ProjectCreateOrConnectWithoutRestrictedTokensInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutRestrictedTokensInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutRestrictedTokensInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutRestrictedTokensInputSchema) ]),
}).strict();

export default ProjectCreateOrConnectWithoutRestrictedTokensInputSchema;
