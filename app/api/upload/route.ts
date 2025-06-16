import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;

  const form = new FormData();
  form.append("file", new Blob([buffer]));
  form.append("upload_preset", `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`);

  const res = await fetch(cloudinaryUrl, {
    method: "POST",
    body: form,
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
