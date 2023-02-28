CREATE SCHEMA blog_db;

create table authors
(
    id    int auto_increment,
    name  varchar(255) not null,
    email varchar(255) not null,
    constraint authors_pk
        primary key (id)
);

