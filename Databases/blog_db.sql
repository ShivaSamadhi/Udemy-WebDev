CREATE SCHEMA IF NOT EXISTS blog_db ;

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
    title     varchar(255)                       not null,
    summary   varchar(255)                       not null,
    body      text                               null,
    date      datetime default current_timestamp not null,
    author_id int                                not null,
    constraint posts_pk
        primary key (id)
);

Insert Into authors (name, email)
VALUES ('Ramaj Johnson', 'rjohnson3795@gmail.com');

Insert Into authors (name, email)
VALUES ('Shiva Samadhi', 'thebaronsamadhi@gmail.com');

Select posts.*, a.name From posts
                        Inner Join authors a on posts.author_id = a.id



