import { put } from "@vercel/blob";

export async function uploadBlob(folder: string, file: File) {
  return await put(`${folder}/${file.name}`, file, {
    access: "public",
    token: `${process.env.NEXT_PUBLIC_BLOB_READ_WRITE_TOKEN}`,
  });
}
