import {renderTree} from "../index";

let state = {
    balance: 0,

    incomeComponent: {
        income: [
            {time: '2020-09-09 19:41', name: 'salary', value: 2000},
            {time: '2020-09-09 19:41', name: 'passive', value: 20}
        ],
        newIncomeName: '',
        newIncomeValue: ''
    },

    spendComponent: {
        spend: [
            {time: '2020-09-09 19:41', name: 'car', value: 200},
            {time: '2020-09-09 19:41', name: 'food', value: 12},
            {time: '2020-09-09 19:41', name: 'food', value: 45}
        ],
        newSpendName: '',
        newSpendValue: ''
    },

    components: {
        spend: [
            {name: 'car'}, {name: 'home'}, {name: 'food'}, {name: 'drinks'}
            ],
        income: [
            {name: 'salary'}, {name: 'passive'}, {name: 'gift'}, {name: 'other'}
        ]
    }
}

export let updateIncome = (name, value) => {
    state.incomeComponent.newIncomeName = name;
    state.incomeComponent.newIncomeValue = value;

    renderTree()
}

export let updateSpend = (name, value) => {
    state.spendComponent.newSpendName = name;
    state.spendComponent.newSpendValue = value;

    renderTree()
}

export let updateBalance = (value) => {
    state.balance += value;

    renderTree()
}

window.state = state;

export default state;