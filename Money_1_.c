#include "Money_x_.h"

void init_tracker(MoneyTracker *tracker)
{
    if (tracker != NULL)
    {
        tracker->count = 0;
    }
}

int add_transaction(
    MoneyTracker *tracker, const char *date, TransactionType type, const char *category, double amount, const char *desc)
{
    if (tracker == NULL || tracker->count >= MAX_TRANSACTIONS)
    {
        return 0;
    }

    Transaction *t = &tracker->transactions[tracker->count];
    t->date[sizeof(t->date) - 1] = '\0';
    t->type = type;

    strncpy(t->date, date, sizeof(t->date) - 1);
    t->date[sizeof(t->date) - 1] = '\0';
    t->amount = amount;

        if (desc != NULL)
    {
        strncpy(t->description, desc, sizeof(t->description) - 1);
        t->description[sizeof(t->description) - 1] = '\0';
    }
    else
    {
        t->description[0] = '\0';
    }
    tracker->count++;
    return 1;
}

void list_transactions(const MoneyTracker * tracker){
    if (tracker ==NULL || tracker -> count == 0 ){
        printf("Currently Still Don Have Any Transaction Record leh.\n");
        return;
    }
        printf("ID | DATE | CATEGORY | TYPE | MONEY($) | REMARKS \n");
        printf("----------------------------------------------------\n");
            for(int i = 0; i < tracker -> count; i++) {
                const Transaction * t = &tracker -> transactions[i];
                printf("%-2d | %10s | %-10s | %-6s | %9.2f | %s\n",
                    t -> id,
                    t -> date,
                    t -> category,
                    t -> type == TYPE_INCOME ? "INCOME" : "EXPENSES",
                    t -> amount,
                    t -> description);

            }
}   

        double calculate_total_balance(const MoneyTracker * tracker){
            if (tracker == NULL) 
                return 0.0;

            double balance = 0.0;
            for (int i = 0 ; i < tracker -> count; i++){
                if (tracker -> transactions[i].type == TYPE_INCOME) {
                    balance += tracker -> transactions[i].amount;
                } else {
                    balance -= tracker -> transactions[i].amount;
                }
            }
            return balance;
        }