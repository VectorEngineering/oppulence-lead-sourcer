import { z } from 'zod';

export const TeamMemberRoleSchema = z.enum(['owner','manager','member','viewer','custom']);

export type TeamMemberRoleType = `${z.infer<typeof TeamMemberRoleSchema>}`

export default TeamMemberRoleSchema;
