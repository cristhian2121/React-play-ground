import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'

type CustomType = {
  id: number; title: string;
}

export default function QueryProof() {
  // Access the client
  const queryClient = useQueryClient()

  // Queries
  const query = useQuery('pepe', (): CustomType[] => []);

  // Mutation
  const mutation = useMutation((): Promise<CustomType> => Promise.resolve({ id: 1, title: "4" }), {
    onSuccess: () => {
      console.log("Success")
      // Invalidate and refetch
      queryClient.invalidateQueries('todos')
    },
    onError: () => console.log("Error"),
  })

  return (
    <div>
      <ul>
        {query?.data?.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          mutation.mutate(
            //    {
            //    id: Date.now(),
            //    title: 'Do Laundry',
            //  }
          )
        }}
      >
        Add Todo
      </button>console.log();
    </div>
  )
}
