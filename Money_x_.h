//money.h

#ifndef MONEY_x_H
#define MONEY_x_H

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

#define MAX_DESC_LEN 100
#define MAX_CATEGORY_LEM 50
#define MAX_TRANSACTIONS 1000

typedef enum{
    TYPE_EXPENSES = 0,
    TYPE_INCOME = 1,
}TransactionType;

typedef struct {
    int id;
    char date[11]; 
    TransactionType type;
    char category[MAX_CATEGORY_LEM];
    double amount;
    char description [MAX_DESC_LEN];
} Transaction;

typedef struct {
    Transaction transactions[MAX_TRANSACTIONS];
    int count;
} MoneyTracker;

void init_tracker(MoneyTracker * tracker);
int add_transaction(MoneyTracker * tracker , const char * date, TransactionType type, const char * category, double amount,const char * desc);

void list_transaction(const MoneyTracker *tracker);
double calculate_total_balance(const MoneyTracker *tracker );


#endif