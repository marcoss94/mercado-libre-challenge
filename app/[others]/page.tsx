import { Routes } from "@/models";
import { redirect } from "next/navigation";

export default async function NotFound() {
  redirect(Routes.CUSTOM_404.path);
}
