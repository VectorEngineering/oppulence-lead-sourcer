import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { PipelineArgsSchema } from "../outputTypeSchemas/PipelineArgsSchema"
import { PipelineStageArgsSchema } from "../outputTypeSchemas/PipelineStageArgsSchema"
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
import { DealActivityFindManyArgsSchema } from "../outputTypeSchemas/DealActivityFindManyArgsSchema"
import { DealProductFindManyArgsSchema } from "../outputTypeSchemas/DealProductFindManyArgsSchema"
import { DealCompetitorFindManyArgsSchema } from "../outputTypeSchemas/DealCompetitorFindManyArgsSchema"
import { DocumentFindManyArgsSchema } from "../outputTypeSchemas/DocumentFindManyArgsSchema"
import { DealTaskFindManyArgsSchema } from "../outputTypeSchemas/DealTaskFindManyArgsSchema"
import { DealHistoryFindManyArgsSchema } from "../outputTypeSchemas/DealHistoryFindManyArgsSchema"
import { DealCountOutputTypeArgsSchema } from "../outputTypeSchemas/DealCountOutputTypeArgsSchema"

export const DealIncludeSchema: z.ZodType<Prisma.DealInclude> = z.object({
  assignedTo: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  pipeline: z.union([z.boolean(),z.lazy(() => PipelineArgsSchema)]).optional(),
  stage: z.union([z.boolean(),z.lazy(() => PipelineStageArgsSchema)]).optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
  activities: z.union([z.boolean(),z.lazy(() => DealActivityFindManyArgsSchema)]).optional(),
  products: z.union([z.boolean(),z.lazy(() => DealProductFindManyArgsSchema)]).optional(),
  competitors: z.union([z.boolean(),z.lazy(() => DealCompetitorFindManyArgsSchema)]).optional(),
  attachments: z.union([z.boolean(),z.lazy(() => DocumentFindManyArgsSchema)]).optional(),
  tasks: z.union([z.boolean(),z.lazy(() => DealTaskFindManyArgsSchema)]).optional(),
  history: z.union([z.boolean(),z.lazy(() => DealHistoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DealCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default DealIncludeSchema;
