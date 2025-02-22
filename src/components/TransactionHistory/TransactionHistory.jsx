import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items: { transactions } }) {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr className={css.tr}>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        {transactions.map((tran, index) => (
          <tr className={css.tr} key={tran.id}>
            <td
              className={`${css.td} ${css.tdp} ${index % 2 === 0 && css.trb}`}
            >
              {tran.type}
            </td>
            <td className={`${css.td} ${index % 2 === 0 && css.trb}`}>
              {tran.amount}
            </td>
            <td className={`${css.td} ${index % 2 === 0 && css.trb}`}>
              {tran.currency}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
