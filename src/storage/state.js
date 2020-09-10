import {renderTree} from "../index";

let state = {
    balance: 0,

    incomeComponent: {
        income: [],
        newIncomeName: '',
        newIncomeValue: ''
    },

    spendComponent: {
        spend: [],
        newSpendName: '',
        newSpendValue: ''
    },

    components: {
        spend: [
            {name: 'Транспорт'}, {name: 'Дом'}, {name: 'Еда'}, {name: 'Напитки'}
            ],
        income: [
            {name: 'З-П'}, {name: 'Пассив'}, {name: 'Подарок'}, {name: 'Другое'}
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