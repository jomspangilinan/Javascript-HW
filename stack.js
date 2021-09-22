class Stack
{
    constructor()
    {
        this.arrayStack = []
    }

    push(item)
    {
        this.arrayStack.push(item)
    }

    pop(item)
    {
        const isArrayEmpty = this.arrayStack.length === 0
        if(isArrayEmpty)
        {
            console.log('Queue is already empty')
        }

        this.arrayStack.pop(item)
    }

    check()
    {
        console.log([this.arrayStack]);
    }
}

const my_queue = new Stack()
my_queue.push('Milk')
my_queue.push('Eggs')
my_queue.push('Pen')
my_queue.check()            // ['Milk', 'Eggs']
my_queue.pop()
my_queue.check()            // ['Eggs']
my_queue.pop()
my_queue.check()            // []
my_queue.pop() 
