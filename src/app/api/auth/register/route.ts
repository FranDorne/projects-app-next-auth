import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const data = await request.json()
    console.log(data)

    const newUser = await prisma.user.create({data})

    return NextResponse.json(newUser, {
        status: 201,
    });
}