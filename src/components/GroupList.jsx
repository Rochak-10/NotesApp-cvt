import React from 'react';
import Group from './Group';

function GroupList({ groups, selectedGroup, setSelectedGroup }) {
  return (
    <ul>
      {groups.map((group) => (
        <Group
          key={group.name}
          group={group}
          selected={group.name === selectedGroup}
          setSelectedGroup={setSelectedGroup}
        />
      ))}
    </ul>
  );
}

export default GroupList;
