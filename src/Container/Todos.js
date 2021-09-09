import { connect } from "react-redux";
import Todos from "../Todos";
import { addTodo } from "../store";

const mapStateToProps = state => {
    return {
        todos: state.todos
    }

};

const mapDispatchToProps = dispatch =>{
    return {
        addTodo: value => dispatch(addTodo(value))
    };
};
const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(Todos);

export default TodosContainer;