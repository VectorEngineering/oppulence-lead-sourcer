"use server";

import { authenticatedAction } from "@/app/actions/safe-action";
import { prismaEdge as prisma } from "@dub/prisma-archon/edge";

interface LeadAndErrorCountResults {
  date: string;
  leads: number;
  errors: number;
}

/**
 * Get lead and error counts in proper format for shadcn/ui charts
 *
 * Protected by authenticatedAction wrapper
 * example row: { date: "2024-08-01", leads: 7, errors: 2 }
 */
export const getLeadAndErrorCounts = authenticatedAction
  .metadata({
    name: "get-lead-and-error-counts",
  })
  .action(async ({ ctx: { userId } }) => {
    // Get the date range
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 1);
    startDate.setHours(0, 0, 0, 0);

    const endDate = new Date();
    endDate.setHours(23, 59, 59, 999);

    // First, get all dates in the range
    const dates = await prisma.$queryRaw<Array<{ date: string }>>`
      WITH RECURSIVE date_series AS (
        SELECT DATE(${startDate}) as date
        UNION ALL
        SELECT DATE_ADD(date, INTERVAL 1 DAY)
        FROM date_series
        WHERE date < DATE(${endDate})
      )
      SELECT DATE_FORMAT(date, '%Y-%m-%d') as date 
      FROM date_series
    `;

    // Get user's endpoints
    const userEndpoints = await prisma.endpoint.findMany({
      where: {
        userId,
      },
      select: {
        id: true,
      },
    });

    const endpointIds = userEndpoints.map((e) => e.id);

    // Get lead counts
    const leadCounts = await prisma.lead.groupBy({
      by: ["createdAt"],
      where: {
        endpointId: {
          in: endpointIds,
        },
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
      _count: {
        id: true,
      },
    });

    // Get error counts
    const errorCounts = await prisma.log.groupBy({
      by: ["createdAt"],
      where: {
        endpointId: {
          in: endpointIds,
        },
        type: "error",
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
      _count: {
        id: true,
      },
    });

    // Create a map for quick lookups
    const leadCountMap = new Map(
      leadCounts.map((lc) => [
        lc.createdAt.toISOString().split("T")[0],
        lc._count.id,
      ]),
    );

    const errorCountMap = new Map(
      errorCounts.map((ec) => [
        ec.createdAt.toISOString().split("T")[0],
        ec._count.id,
      ]),
    );

    // Combine all results
    const results: LeadAndErrorCountResults[] = dates.map(({ date }) => ({
      date,
      leads: leadCountMap.get(date) || 0,
      errors: errorCountMap.get(date) || 0,
    }));

    return results;
  });
