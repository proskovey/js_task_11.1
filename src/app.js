import Team from './Team';
import Person from './Person';

const person1 = new Person();
const person2 = new Person();
const person3 = new Person();

const team = new Team('Reya');
team.add(person1);
team.add(person2);
team.add(person3);

console.log(team);

const iterator = team[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (const unit of team) {
  console.log(unit);
}
