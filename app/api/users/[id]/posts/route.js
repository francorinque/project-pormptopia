import Prompt from "@models/prompt"
import { connectToDB } from "@utils/database"

export const GET = async (req, { params }) => {
  try {
    await connectToDB()
    const posts = await Prompt.find({
      creator: params.id,
    }).populate("creator")

    return new Response(JSON.stringify(posts), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch all posts", { status: 400 })
  }
}
