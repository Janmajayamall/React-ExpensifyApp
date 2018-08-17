import React from 'react'
import {shallow} from 'enzyme';
import {EditExpensePage} from './../../components/EditExpense.js';
import { wrap } from 'module';
import expenses from './../fixtures/expenses'


let editExpense, removeExpense, wrapper, history;

beforeEach(()=>{
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push: jest.fn()}
    wrapper = shallow(<EditExpensePage editExpense = {editExpense} removeExpense = {removeExpense} history = {history} expense = {expenses[0]} />);
});

test('it should render EditExpensePage properly', ()=>{
    expect(wrapper).toMatchSnapshot();
}); 

test('should handle editExpense properly', ()=>{

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('should remove expense properly', ()=>{

    wrapper.find('button').prop('onClick')();
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[0].id);
});


