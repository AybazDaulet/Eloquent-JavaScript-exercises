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
}