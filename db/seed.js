const db = require("./connection");

/// run the queries serially instead of in parallel
db.serialize(() => {
  /// create the database
  db.run(`
		INSERT INTO Pet (
			name, owner_name, dob
		) VALUES 
		('Kitty', 'John', '10/05/2010'), 
		('Doggo', 'James', '07/24/2005');
	`);

  db.run(`
	INSERT INTO Person (
		first_name, height, pet_name
	) VALUES 
	('John', '5 ft 8 in', 'Kitty'), 
	('James', '6 ft 1 in', 'Doggo');
`);
});
