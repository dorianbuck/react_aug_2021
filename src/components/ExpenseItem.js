import './ExpenseItem.css';

function ExpenseItem() {
    return (
    <div className="expense-item">
      <div>Date</div>
      <div className="expense-item__description">
        <h2>Title</h2>
      </div>
      <div className="expense-item__price">$294.67</div>
    </div>
  );
}
export default ExpenseItem;
