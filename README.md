# StudentAPI

Data Schema

User {
id:ID
username: String!
email: String!
}

Teacher {
id:ID
user: User!
firstName: String
lastName: String!
address: Address
teaches: [Subject]
school: School
}

School {
id:ID
name:
address: Address
mascot: String
}

Address{
id:ID
address1: String!
address2: String
city: String!
state: String!
postalCode: String!
}

Subject{
id:ID
name:String
periods: Period
teacher: Teacher
}

Student{
id:ID
user:User
address: Address
school: School
subject: [Subject]
}



