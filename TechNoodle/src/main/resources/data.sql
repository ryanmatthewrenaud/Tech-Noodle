insert into contact (first_name, last_name, email, phone_number ) 
values ('George', 'Henry', 'george.henry@email.com', '(000)-000-0000');

insert into contact (first_name, last_name, email, phone_number) 
values ('John', 'Doe', 'john.doe@email.com', '(000)-000-0001');

insert into ticket(device, description, contacted, last_contacted, disposition, archived, ticket_id)
values('HP', 'Very slow needs to be sped up', false, '20231201', 'Not Started', false , 1);

insert into ticket(device, description, contacted, last_contacted, disposition, archived, ticket_id)
values('Xbox', 'It Broke', false, '20231201', 'Not Started',false, 2);

insert into ticket(device, description, contacted, last_contacted, disposition, archived, ticket_id)
values('HP', 'Very slow needs to be sped up test add', false, '20231203', 'Not Started',false, 1);