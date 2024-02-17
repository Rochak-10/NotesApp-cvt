import React from 'react';

function Group({ group, selected, setSelectedGroup }) {
  return (
    <li className={selected ? 'active' : ''} onClick={() => setSelectedGroup(group.name)}>
      {group.name}
    </li>
  );
}

export default Group;
