export default class Team {
  constructor(name) {
    this.name = name;
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) {
      throw new Error('Такой персонаж уже есть');
    }
    this.members.add(member);
  }

  [Symbol.iterator]() {
    const teamArray = Array.from(this.members);
    let current = -1;
    return {
      next() {
        current += 1;
        if (teamArray[current] === undefined) {
          return {
            done: true,
          };
        }
        return {
          value: teamArray[current],
          done: false,
        };
      },
    };
  }
}
