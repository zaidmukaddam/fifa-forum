export type Reply = {
    hash: string,
    text: string,
    created?: string
}

export type RecentThread = {
    id: number,
    created: string,
    modified: string,
    hash: string,
    title: string,
    replies: number
}

export type Thread = {
    created: string,
    modified: string,
    hash: string,
    title: string,
    text: string,
    replies: Reply[]
}

export type Board = {
    name: string,
    description: string,
    expiry: number
}

export type FifaResponse<T extends object> = {
    ok: boolean
    error: string,
} & T;

export type ThreadResponse = FifaResponse<{thread: Thread}>

export type RecentThreadResponse = FifaResponse<{threads: RecentThread[]}>

export type BoardsResponse = FifaResponse<{boards: Board[]}>

export type BoradRecentThreadsResponse = FifaResponse<{board: Board, threads: RecentThread[]}>