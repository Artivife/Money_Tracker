//makefile

CC = gcc
CFLAGS = -Wall -Wextra -Std=c99

TARGET = money_tracker
SRCS = money.c
OBJS = $(SRCS:.c=.0)

all : $(TARGET)

$(TARGET) : $()
    $(CC) $(CFLAGS) -o $(TARGET) $(OBJS)

%.o : %.c money_x_.h
    $(CC) $(CFLAGS) -c $< -o $@

clean:
    rm -f $(OBJS) $(TARGET)

.PHONY: all clean
