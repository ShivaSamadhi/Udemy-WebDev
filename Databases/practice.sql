# Log in to the MySQL server.

# Create a new user called joe that can log in from localhost. Give joe a memorable password. Do not grant any privileges to joe.

# Use the query we gave you at the beginning of the lesson to make sure joe has been created and has a password.
# Exit mysql and then connect again as joe.
# Try the same SELECT query again and see the results. What results are you getting? Why?
# Log out from mysql and then reconnect again as root
# Create a new user named anne. Give anne her own password.

# Grant all privileges to anne on mysql.user. Do not give her the ability to grant those privileges to others.
# Exit, and then connect as anne.
# Run the query to list all users from this lesson. Why does this work?
# Create a user named sally and try to grant sally all permissions on the mysql.user table. Does this work?
# Exit and reconnect as root.
# Create a new user named jean. Give jean a sensible password.

# Give jean read-only permissions to the entire database server.
# Refer back to the previous exercise, try those same select queries.
# Copy and paste the following query.

# INSERT INTO mysql.user (Host, UserModel) VALUES ('localhost', 'randal');
# What is the result? Why?
# Exit and reconnect as root.
# Drop all our previous users:

# joe
# mark
# anne
# jean
# sally
# Remember that to drop a user you must specify the combination of username and host.

# Create a new database administrator.

# This user should have all permissions on all tables, as well as the ability to grant permissions to other users.
# The username should be the same as the username on your mac. You can run the command whoami (from your shell, not from mysql) to find this out if you are not sure.
# Make sure to choose a password you will remember.
# If you are trying to log in to MySQL as a user that has the same username as the user you are logged in to your computer as, you will not need to specify the -u option.

# If you followed the above steps, you should be able to connect to MySQL with just:

# mysql -p

# 1-2
CREATE USER 'joe'@'localhost' IDENTIFIED BY 'password';
SELECT user, host FROM mysql.user;

# 3
CREATE USER 'anne'@'localhost' IDENTIFIED BY 'password';
GRANT ALL ON mysql.user TO 'anne'@'localhost';

# 4
CREATE USER 'jean'@'localhost' IDENTIFIED BY 'password';
Grant SELECT On *.* To 'jean'@'localhost';

# 5
Drop USER 'jean'@'localhost', 'anne'@'localhost', 'joe'@'localhost'