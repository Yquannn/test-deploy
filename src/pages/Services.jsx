import Footer from "../shared/components/partials/Footer";
import { useFetch } from "../shared/components/hooks/useFetch";

const ServicesPage = () => {
  const { data, loading } = useFetch({ url: 'https://jsonplaceholder.typicode.com/todos' });

  if (loading) return <p>loading...</p>;

  return (
    <div>
      {data.map(todo => (
        <div key={todo.id}>
          id: {todo.id} | title: {todo.title} | completed: {todo.completed.toString()}
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default ServicesPage;
