class Category implements Categories {
    id: number;
    name: string;
    internalReference: string;

    constructor(id: number, name: string, internalReference: string) {
        this.id = id;
        this.name = name;
        this.internalReference = internalReference
    }

    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }

    getInternalReference(): string {
        return this.internalReference;
    }
}