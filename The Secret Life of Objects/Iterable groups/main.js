class Group {
    constructor() {
        this.Group = [];
    }
    add(value) {
        if (!this.Group.includes(value)) {
            this.Group.push(value);
        }
    };
    delete(value) {
        if (this.Group.includes(value)) {
            this.Group = this.Group.filter((member) => member != value);
        }
    };
    has(value) {
        return this.Group.includes(value);
    }
    static from(obj) {
        let a = new Group;
        for (let element of obj) {
            a.add(element);
        }
        return a;
    }
    [Symbol.iterator]() {
        return new GroupIterator(this.Group);
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
    }
    next() {
        if (this.group[0] == undefined) { return { done: true } }
        let value = this.group[0];
        this.group = this.group.slice(1);
        return { value, done: false };
    }
}


for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c