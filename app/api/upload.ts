import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  const formData = await req.formData();
  const file = formData.get("file") as File;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;
  const form = new FormData();
  form.append("file", new Blob([buffer]));
  form.append("upload_preset", `${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`); // Tạo preset ở Cloudinary

  const res = await fetch(cloudinaryUrl, {
    method: "POST",
    body: form,
  });

  const data = await res.json();

  return NextResponse.json({ url: data.secure_url });
}
