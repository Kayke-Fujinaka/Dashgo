import faker from "faker";
import { createServer, Factory, Model } from "miragejs";

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

    // Gerar dados em massa
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    // Criar algum dado assim que o servidor do Mirage for inicializado
    seeds(server) {
      server.createList("user", 200);
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
