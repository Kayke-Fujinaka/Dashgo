import { useQuery } from "react-query";
import { api } from "../api";

const DURATION_FRESH_TO_STALE = 1000 * 5; // 5 secconds

interface Users {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

type GetUsersResponse = {
  users: Users[];
  totalCount: number;
};

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get<{ users: Users[] }>("users", {
    params: { page },
  });

  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map((user) => {
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

  return { users, totalCount };
}

export const useUsers = (page: number) => {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: DURATION_FRESH_TO_STALE,
  });
};
