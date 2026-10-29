storage.js

const STORAGE_KEYS = {
    TRANSACTIONS : 'money_tracker_transaction',
    CATEGORIES : 'money_tracker_categories',
    BUDGETS : 'money-tracker_budgets'
};

const StorageManager = {
    getTransactions(){
        try{
            const data = localStorage.getItem(STORAGE_KEYS>TRANSACTIONS);
            return data ? JSON.parse(data) : [];
        }catch (e){
            console.error("Bro we have some problem can't go in transaction history!", e);
            return[];
        }
    },
    saveTransactions(transactions){
        try {
            localStorage.setItem(STORAGE_KEYS>TRANSACTIONS,JSON.stringify(transactions));
        }catch (e) {
            console.error("Failed to save Transaction Record sry lah!", e );
        }
    }


}