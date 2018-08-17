import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm.js';
import {editExpense, removeExpense} from './../actions/expenses.js'

export class EditExpensePage extends React.Component {
    onSubmit = (expense)=>{
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    onClick = () =>{
        this.props.removeExpense(this.props.expense.id);
        this.props.history.push('/');
    }
    
    render() {
        return (
            <div>
                <ExpenseForm
                    expense = {this.props.expense}
                    onSubmit = {this.onSubmit}
                />
                <button onClick={this.onClick}>Remove</button>
            </div>  
        );
    
    }
}


const mapStateToProps = (state, props) =>{
    return  {
        expense: state.expenses.find((expense)=>expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props)=>{
    return{
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense : (id) => dispatch(removeExpense(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);