import { connectToDatabase } from "@/lib/database";
import Event from "@/lib/database/models/event.model";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);

  try {
    await connectToDatabase();
    const foundEvents = await Event.find();
    if (!foundEvents) {
      return NextResponse.json(
        {
          error: "No Categories Exists",
          message: "Please fill the categories.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(foundEvents);
  } catch (e: any) {
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: "An error occurred while processing the request",
      },
      { status: 500 }
    );
  }
}
