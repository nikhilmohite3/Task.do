
// Creating an Object
const person = {
    name: 'Nikhil',
    
    // Aggregation, address is also an object injected in person
    address: {
        line1: 'Baker Street',
        city: 'London',
        country: 'UK',
    },
    
    age: 25,

    // Representing an Array
    profiles: ['instagram', 'twitter', 'facebook'], 

    // Adding functions
    printProfile: () => {
        console.log(person.profiles[0])
        return person.profiles[1]
    }
}

export default function LearningJavaScript () {
    return (
        <div>
            <div>{person.name}, {person.age}</div>
            <div>{person.address.line1}, {person.address.country}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile()}</div>
        </div>
    )
}