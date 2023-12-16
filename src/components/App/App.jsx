import TodoList from "components/TodoList/TodoList";

import { Container, Header, SearchForm, Section } from "components";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../redux/operations";
import { useEffect } from "react";

export const App = () => {
  // const [todos, setTodos] = useState(() =>
  //   localStorage.getItem("todos")
  //     ? JSON.parse(localStorage.getItem("todos"))
  //     : []
  // );
  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
