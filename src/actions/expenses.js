import uuid from 'uuid';

//Actions for Expenses 
export const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type:'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description: description,
        note: note,
        amount: amount,
        createdAt: createdAt
    }
});

export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});

export const editExpense = (id, update)=>({
    type: 'EDIT_EXPENSE',
    id:id,
    update: update
})
