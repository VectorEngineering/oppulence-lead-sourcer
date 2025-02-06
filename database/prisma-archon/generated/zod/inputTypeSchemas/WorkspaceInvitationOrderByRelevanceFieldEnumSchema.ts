import { z } from 'zod';

export const WorkspaceInvitationOrderByRelevanceFieldEnumSchema = z.enum(['id','workspaceId','email','token','status']);

export default WorkspaceInvitationOrderByRelevanceFieldEnumSchema;
