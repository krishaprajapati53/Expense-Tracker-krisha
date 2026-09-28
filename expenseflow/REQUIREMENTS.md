# React Assignment Requirements

## Functional Components

All interface parts use functional components: `App`, `Header`, `TransactionForm`, `TransactionList`, `TransactionItem`, `BalanceSummary`, and `FilterBar`.

## Reusable Components

The reusable components are Header, TransactionForm, TransactionList, TransactionItem, BalanceSummary, and FilterBar.

## Props

`App` passes transactions and calculated summary values to child components. Each TransactionItem receives one transaction object through props.

## Callback Props

`App` passes `onAddTransaction` to TransactionForm and the delete callback through TransactionList to TransactionItem.

## useState

`App` stores transactions and filter selections with useState. TransactionForm uses useState for its controlled form fields and error message.

## useEffect

App uses useEffect to save transactions to localStorage whenever the transaction state changes.

## Controlled Form

TransactionForm controls description, amount, type, category, and date through state, value, and onChange.

## List Rendering

TransactionList uses `.map()` to render a TransactionItem for every displayed transaction, using its id as the React key.

## Filtering

App uses `.filter()` for category and type filtering. It also uses `.filter()` to remove a deleted transaction.

## Conditional Rendering

TransactionList displays separate messages for an empty transaction history and for filters that have no matching results.

## Responsive Design

The CSS media query at 768px stacks the summary cards, filters, and transaction content on smaller screens.

## localStorage

Transactions are read from localStorage when the app starts and saved back whenever they change, so they remain after a refresh.
