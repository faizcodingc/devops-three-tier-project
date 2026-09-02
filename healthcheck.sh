#!/bin/bash
if docker ps | grep -q mysql-container;
then
	echo "container is running"
else
	echo "container is down"
fi
