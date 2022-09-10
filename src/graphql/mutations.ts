export const createTodo = `
mutation createTodo($input: {
    name: String
    description: String
}) {
    createTodo(input: $input}) {
      id
      name
      description
    }
  }
`;
