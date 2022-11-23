import { createServer, Model } from "miragejs";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    // Quais dados terão no Mirage (BD fictício)
    models: {
      // Partial serve para dizer que não necessariamente precisa ter todos os campos
      user: Model.extend<Partial<User>>({}),
    },

    // Quais rotas terá no Mirage
    routes() {
      // Qual caminho para acessar as rotas do Mirage
      this.namespace = "api";

      // Criar um delay para cada chamada
      this.timing = 750;

      this.get("/users");
      this.post("/users");

      this.namespace = "";

      // Fazer com que todas as chamadas enviadas na API passem pelo Mirage
      // Caso não forem detectadas pela rota do Mirage, elas passam adiante
      this.passthrough();
    },
  });

  return server;
}
