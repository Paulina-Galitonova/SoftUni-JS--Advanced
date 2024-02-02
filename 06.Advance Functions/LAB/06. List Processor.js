// 
function listProcessor(commands){
    let innerCollection = [];

    const executeCommand = (command) => {
        const [action, value] = command.split(' ');

        switch (action) {
            case 'add':
                innerCollection.push(value);
                break;
            case 'remove':
                innerCollection = innerCollection.filter(item => item !== value);
                break;
            case 'print':
                console.log(innerCollection.join(','));
                break;
            default:
                console.log(`Unsupported command: ${action}`);
        }
    };

    commands.forEach(command => executeCommand(command));
}


listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);