import React from 'react';

import Person from './Person/Person';

//this is still one line so doesnt need a return
const persons = (props) => props.persons.map((person, index) => {
  return <Person
            click={() => props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => props.changed(event, person.id)}/>
});

export default persons;
