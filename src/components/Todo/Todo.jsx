import { RiDeleteBinLine, RiEdit2Fill } from "react-icons/ri";
import { Text } from "components";
import { DeleteButton, TodoWrapper } from "./Todo.styled";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../redux/todosSlice";
import { useState } from "react";

export const Todo = ({ text, counter, id }) => {
  const [newText, setNewText] = useState(text);
  const [showEditForm, setShowEditForm] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleChangeText = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id, text: newText }));
  };

  const handleChangeInput = (e) => {
    const { value } = e.target;

    setNewText(value);
  };
  const handleShow = () => {
    setShowEditForm((prev) => !prev);
  };

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={handleDelete}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
        {showEditForm && (
          <form onSubmit={handleChangeText}>
            <input type="text" value={newText} onChange={handleChangeInput} />
            <button type="submit">Change text</button>
          </form>
        )}
        <button onClick={handleShow}>
          <RiEdit2Fill size={24} />
        </button>
      </TodoWrapper>
    </>
  );
};
