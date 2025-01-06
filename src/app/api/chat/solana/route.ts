import { NextResponse } from "next/server"

const data =  ['1', '2']

export const GET = () => {
    return new NextResponse(JSON.stringify(data))
}