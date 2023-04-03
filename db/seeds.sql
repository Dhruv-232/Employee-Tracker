USE employee_info_db;

INSERT INTO department (name)
VALUES ("Accounting"),
       ("Engineering"),
       ("IT"),
       ("Medical"),
       ("Plumbing");

INSERT INTO role (title, salary, department_id)
VALUES ("Boss", 150000, 1),
       ("Head of Engineering", 70000, 2),
       ("Software Engineer", 60000, 3),
       ("IT consultant", 55000, 3),
       ("Head of IT", 90000, 3),
       ("Doctor", 110000, 4),
       ("Nurse", 60000, 4),
       ("Plumber", 73000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dhruv", "Sharma", 1, NULL),
       ("Sam", "Bam", 2, 1),
       ("Software Engineer", 60000, 3),
       ("IT consultant", 55000, 3),
       ("Head of IT", 90000, 3),
       ("Doctor", 110000, 4),
       ("Nurse", 60000, 4),
       ("Plumber", 73000, 5);
       
