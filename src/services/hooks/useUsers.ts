import { useQuery } from "react-query";
import { api } from "../api";

const DURATION_FRESH_TO_STALE = 1000 * 5; // 5 secconds

interface Users {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export async function getUsers(): Promise<Users[]> {
  const { data } = await api.get("users");

  const users = data.users.map((user: any) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return users;
}

export const useUsers = () =>
  useQuery("users", getUsers, { staleTime: DURATION_FRESH_TO_STALE });
