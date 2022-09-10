export const listTodos = `
query listTodos($userId: ID!) {
    todosByUser(userId: $userId) {
      items {
        id
        description
        name
      }
    }
  }
`;
