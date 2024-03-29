import React, { useContext } from "react";
import { DefaultButton, Stack, Text } from "office-ui-fabric-react";
import { actions } from "../actions";
import { connect } from "react-redux";
import { Store } from "../store";
interface TodoFooterProps {
  todos: Store["todos"];
  clear: () => void;
}
const TodoFooter = (props: TodoFooterProps) => {
  const { todos, clear } = props;
  const itemCount = Object.keys(todos).filter(id => !todos[id].completed).length;

  return (
    <Stack horizontal horizontalAlign="space-between">
      <Text>
        {itemCount} item{itemCount <= 1 ? "" : "s"}
      </Text>
      <DefaultButton onClick={() => clear()}>Clear DefaultButton</DefaultButton>
    </Stack>
  );
};
const ConnectedTodoFooter = connect(
  (state: Store) => ({
    todos: state.todos
  }),
  dispatch => ({
    clear: () => dispatch(actions.clear())
  })
)(TodoFooter);

export { ConnectedTodoFooter as TodoFooter };
