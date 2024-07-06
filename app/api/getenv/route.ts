import { NextResponse } from "next/server"


export async function GET() {
    const env = process.env.GHOST_API_URL || ""
    return NextResponse.json({ env }, {status:201})
}