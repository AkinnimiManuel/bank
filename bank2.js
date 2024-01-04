const DepositInput = document.getElementById('input-deposit');
const WithdrawInput = document.getElementById('input-withdraw');
const WithdrawButton = document.getElementById('withdraw-button');
const DepositButton = document.getElementById('deposit-button');
const balance = document.getElementById('Balance');
const LowBalance = document.getElementById('low-balance');

class bank {
	constructor(balance) {
		this.balance = balance;
	}

	deposit(amount) {
		const newAmount = (this.balance += amount);
		balance.innerHTML = `You deposited: $${DepositInput.value}
     Your new Balance: $${newAmount}`;
		LowBalance.innerHTML = '';
	}

	withdraw(amount) {
		if (this.balance < amount) {
			LowBalance.innerHTML = `Your balance is too low`;
			return;
		}
		const newAmount = (this.balance -= amount);
		balance.innerHTML = `You withdrew: $${WithdrawInput.value}
     Your new Balance: $${newAmount}`;
	}
}

const account = new bank(0);

DepositButton.addEventListener('click', function () {
	account.deposit(Number(DepositInput.value));
});

WithdrawButton.addEventListener('click', function () {
	account.withdraw(Number(WithdrawInput.value));
});
