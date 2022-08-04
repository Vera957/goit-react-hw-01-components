import s from './Style.module.css';

export const Transactions = ({ items }) => {
    return (
        <table className={s.transactionHistory}>
            <thead className={s.trTread}>
                <tr>
                    <th className={s.trTh}>Type</th>
                    <th className={s.trTh}>Amount</th>
                    <th className={s.trTh}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item =>
                (<tr key={item.id} className={s.trTbTr}>
                    <td className={s.trTbTd}>{item.type}</td>
                    <td className={s.trTbTd}>{item.amount}</td>
                    <td className={s.trTbTd}>{item.currency}</td>
                </tr>))}
            </tbody>
        </table>
    )
}