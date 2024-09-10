"use server";

import { redirect } from "next/navigation";

export default async function redirectToLogin() {
  redirect(`/login`);
}
