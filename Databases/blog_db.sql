CREATE SCHEMA blog_db;

create table authors
(
    id    int auto_increment,
    name  varchar(255) not null,
    email varchar(255) not null,
    constraint authors_pk
        primary key (id)
);

create table posts
(
    id        int auto_increment,
    title     varchar(255) not null,
    summary   varchar(100) null,
    body      text         not null,
    date      datetime     not null,
    author_id int          not null,
    constraint posts_pk
        primary key (id)
);

