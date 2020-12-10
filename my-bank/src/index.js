console.log("Starting banking app for multiple accounts.")

const defaultState = {
  checking: 100,
  savings: 100
}

function createDeposit(account, amount) {
  return {
    type: 'deposit',
    payload: {
      account,
      amount
    }
  };
}

function createWithdrawal(account, amount) {
  return {
    type: 'withdrawal',
    payload: {
      account,
      amount
    }
  };
}