const motivMessage = ['I love you', 'You are amazing', 'You are the best', 'You`re awesome', 'You are the best thing that ever happened to me', 'You are the best'];

const getRandomMessage = (arr) => {
    console.log(arr[Math.floor(Math.random() * arr.length)]);
}

getRandomMessage(motivMessage);