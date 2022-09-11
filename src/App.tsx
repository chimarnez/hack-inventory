import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import { Outlet } from "react-router-dom";

import awsExports from "./aws-exports";
import { Layout } from "./pages/layout/layout";
import { AppContextProvider } from "./services/context";
Amplify.configure(awsExports);

const App = (props: any) => {
  return <Layout signOut={props.signOut}>{props.children}</Layout>;
};

const AuthApp = ({ signOut, user }: any) => {
  return (
    <AppContextProvider>
      <App signOut={signOut} user={user}>
        <Outlet />
      </App>
    </AppContextProvider>
  );
};

export default withAuthenticator(AuthApp);

// const initialState = { name: "", description: "" };

// const App = () => {
//   const [formState, setFormState] = useState(initialState);
//   const [todos, setTodos] = useState<typeof initialState[]>([]);

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   function setInput(key: string, value: string) {
//     setFormState({ ...formState, [key]: value });
//   }

//   async function fetchTodos() {
//     try {
//       const todoData = (await API.graphql(graphqlOperation(listTodos))) as any;
//       const todos = todoData.data.todosByUser.items;
//       setTodos(todos);
//     } catch (err) {
//       console.log("error fetching todos");
//     }
//   }

//   async function addTodo() {
//     try {
//       if (!formState.name || !formState.description) return;
//       const todo = { ...formState };
//       setTodos([...todos, todo]);
//       setFormState(initialState);
//       await API.graphql(graphqlOperation(createTodo, { input: todo }));
//     } catch (err) {
//       console.log("error creating todo:", err);
//     }
//   }

//   return (
//     <div style={styles.container}>
//       <h2>Amplify Todos</h2>
//       <input
//         onChange={(event) => setInput("name", event.target.value)}
//         style={styles.input}
//         value={formState.name}
//         placeholder="Name"
//       />
//       <input
//         onChange={(event) => setInput("description", event.target.value)}
//         style={styles.input}
//         value={formState.description}
//         placeholder="Description"
//       />
//       <button style={styles.button} onClick={addTodo}>
//         Create Todo
//       </button>
//       {todos.map((todo: any, index) => (
//         <div key={todo.id ? todo.id : index} style={styles.todo}>
//           <p style={styles.todoName}>{todo.name}</p>
//           <p style={styles.todoDescription}>{todo.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };
