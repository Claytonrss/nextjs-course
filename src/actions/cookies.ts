"use server";

import { cookies } from "next/headers";

interface CookieOptions {
  httpOnly?: boolean;
  secure?: boolean;
  maxAge?: number;
}

export async function setCookie(
  key: string,
  value: string,
  options: CookieOptions = { httpOnly: true }
) {
  cookies().set(key, value, {
    ...options,
  });
  return { definido: true, key, value };
}

export async function getCookie(key: string){
  return cookies().get(key)?.value;
}

export async function deleteCookie(key: string) {
  cookies().delete(key);
}
