'use client'

import type { Dispatch, SetStateAction } from "react"

interface BotContentProps {
    setPage: Dispatch<SetStateAction<number>>
}

export default function BotContent({}: BotContentProps) {
    return (
        <div>BotContent</div>
    )
}
