import { todosApi } from "../config";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export type NewTodo = Pick<Todo, "title">;
export type UpdateTodoInput = Partial<Omit<Todo, "id">> & { id: string };
export type TodoSearchFilters = { query: string };

export const useTodos = () => {
  const query = todosApi.useQuery<Todo[]>({
    url: "/todos",
    method: "GET",
    key: ["todos"],
  });

  return {
    todos: query.data ?? [],
    isTodoLoading: query.isLoading,
    ...query,
  };
};

export const useSearchTodos = (filters: TodoSearchFilters) => {
  const query = todosApi.useQuery<Todo[]>({
    url: "/todos/search",
    method: "GET",
    key: ["todos", "search", filters.query],
    params: { q: filters.query },
  });

  return {
    searchResults: query.data ?? [],
    isSearchLoading: query.isLoading,
    ...query,
  };
};

export const useCreateTodo = () => {
  const { mutate, isPending, ...rest } = todosApi.useMutation<
    Todo,
    unknown,
    NewTodo
  >({
    url: "/todos",
    method: "POST",
    keyToInvalidate: ["todos"],
  });

  return {
    createTodo: mutate,
    isCreatingTodo: isPending,
    ...rest,
  };
};

export const useUpdateTodo = () => {
  const { mutate, isPending, ...rest } = todosApi.useMutation<
    Todo,
    unknown,
    UpdateTodoInput
  >({
    url: (variables) => `/todos/${variables.id}`,
    method: "PATCH",
    keyToInvalidate: ["todos"],
  });

  return {
    updateTodo: mutate,
    isUpdatingTodo: isPending,
    ...rest,
  };
};

export const useDeleteTodo = () => {
  const { mutate, isPending, ...rest } = todosApi.useMutation<
    void,
    unknown,
    { id: string }
  >({
    url: (variables) => `/todos/${variables.id}`,
    method: "DELETE",
    keyToInvalidate: ["todos"],
  });

  return {
    deleteTodo: mutate,
    isDeletingTodo: isPending,
    ...rest,
  };
};