CREATE USER 'user-graphql-trial'@'%' IDENTIFIED BY 'P_ssw0rd';
GRANT ALL PRIVILEGES ON graphql_trial_db.* TO 'user-graphql-trial'@'localhost';
FLUSH PRIVILEGES;
