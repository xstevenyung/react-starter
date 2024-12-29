import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome.tsx";
import { db } from "../../database.ts";
import { users } from "~/schema.ts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  const data = await db.select().from(users);
  console.log(data);
  return {};
}

export default function Home() {
  return <Welcome />;
}
