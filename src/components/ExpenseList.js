import React from 'react';
import ExpenseListItem from './ExpenseListItem';



export const ExpenseList = (props) => (
    <div className='content-container'>
        <div className='list-header'>
            <div className='show-for-mobile'>
                Expenses
            </div>
            <div className='show-for-desktop'>
                Expense
            </div>
            <div className='show-for-desktop'   >
                Amount
            </div>
        </div>
        <div className='list-body'>
        {
            props.expenses.length === 0 ?
                <div className='list-item list-item--message'>
                    <span>No expense to show</span>
                </div>
                : props.expenses.map((expense)=>{
            return(
                <ExpenseListItem key = {expense.id} {...expense}/>
                    );       
            })
        }
        </div>
    </div>
);



export default ExpenseList;