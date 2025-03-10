import type { V1RatelimitLimitRequest, V1RatelimitLimitResponse } from './v1_ratelimits_limit'

import { IntegrationHarness } from 'src/pkg/testutil/integration-harness'
import { loadTest } from '@/pkg/testutil/load'
import { newId } from '@playbookmedia/id'
import { randomUUID } from 'node:crypto'
import { schema } from '@playbookmedia/db'
import { test } from 'vitest'

/**
 * As a rule of thumb, the test duration (seconds) should be at least 10x the duration of the rate limit window
 */
const testCases: {
    limit: number
    duration: number
    rps: number
    seconds: number
}[] = [
    {
        limit: 200,
        duration: 60_000,
        rps: 100,
        seconds: 60
    },
    {
        limit: 10,
        duration: 60000,
        rps: 15,
        seconds: 120
    },
    {
        limit: 10,
        duration: 60000,
        rps: 50,
        seconds: 60
    },
    {
        limit: 500,
        duration: 10000,
        rps: 20,
        seconds: 20
    },
    {
        limit: 500,
        duration: 10000,
        rps: 100,
        seconds: 30
    },
    {
        limit: 10,
        duration: 10_000,
        rps: 200,
        seconds: 120
    }
]

for (const { limit, duration, rps, seconds } of testCases) {
    const name = `[${limit} / ${duration / 1000}s], attacked with ${rps} rps for ${seconds}s`
    test(name, { skip: !!process.env.TEST_LOCAL, retry: 3, timeout: 600_000 }, async (t) => {
        const h = await IntegrationHarness.init(t)
        const namespace = {
            id: newId('test'),
            workspaceId: h.resources.userWorkspace.id,
            createdAt: new Date(),
            name: 'namespace'
        }
        await h.db.primary.insert(schema.ratelimitNamespaces).values(namespace)

        const identifier = randomUUID()

        const root = await h.createRootKey(['ratelimit.*.limit'])

        const results = await loadTest({
            rps,
            seconds,
            fn: () =>
                h.post<V1RatelimitLimitRequest, V1RatelimitLimitResponse>({
                    url: '/v1/ratelimits.limit',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${root.key}`
                    },
                    body: {
                        identifier,
                        async: false,
                        namespace: namespace.name,
                        limit,
                        duration
                    }
                })
        })
        t.expect(results.length).toBe(rps * seconds)
        const passed = results.reduce((sum, res) => {
            return res.body.success ? sum + 1 : sum
        }, 0)

        const exactLimit = Math.min(results.length, (limit / (duration / 1000)) * seconds)
        const upperLimit = Math.round(exactLimit * 2.5)
        const lowerLimit = Math.round(exactLimit * 0.95)
        console.info({ name, passed, exactLimit, upperLimit, lowerLimit })
        t.expect(passed).toBeGreaterThanOrEqual(lowerLimit)
        t.expect(passed).toBeLessThanOrEqual(upperLimit)
    })
}
