import { Client } from '@planetscale/database'
import type { DriverAdapter } from '@prisma/client/runtime/library'
import { PrismaClient } from '@prisma/client'
import { PrismaPlanetScale } from '@prisma/adapter-planetscale'
import type { Sql } from '@prisma/client/runtime/library'

type CustomFetch = (url: string, init?: RequestInit) => Promise<Response>

const customFetch: CustomFetch = (url: string, init?: RequestInit) => {
    if (!init) return fetch(url)
    const { cache, ...rest } = init
    return fetch(url, rest)
}

// Ensure database name is included in the URL
const getDatabaseUrl = () => {
    const url = process.env.PLANETSCALE_DATABASE_URL || process.env.DATABASE_URL
    if (!url) throw new Error('Database URL is not defined')

    // For local development with PlanetScale proxy
    if (url.startsWith('http://')) {
        return `${url}/planetscale`
    }

    return url
}

const client = new Client({
    url: getDatabaseUrl(),
    fetch: customFetch
})

const adapter = new PrismaPlanetScale(client)

type PlanetScaleQuery = Parameters<typeof adapter.queryRaw>[0]

// Add required properties to satisfy DriverAdapter interface
const adapterWithTransaction: DriverAdapter = {
    ...adapter,
    startTransaction: () => {
        throw new Error('Transactions are not supported in edge runtime')
    },
    queryRaw: (params: PlanetScaleQuery) => adapter.queryRaw(params),
    executeRaw: (params: PlanetScaleQuery) => adapter.executeRaw(params)
}

export const prismaEdge: PrismaClient = new PrismaClient({
    adapter: adapterWithTransaction
})
