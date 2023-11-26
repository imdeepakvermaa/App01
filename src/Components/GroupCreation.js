// CreateGroupPage.js

import React, { useState } from "react";

const MemberInput = ({ value, onChange, onRemove }) => {
  return (
    <div className="member-input">
      <input type="text" value={value} onChange={onChange} />
      <button className="remove-btn-grp" type="button" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
};

const CreateGroupPage = () => {
  const [groupName, setGroupName] = useState("");
  const [members, setMembers] = useState([""]);

  const handleGroupNameChange = (e) => {
    setGroupName(e.target.value);
  };

  const handleMemberChange = (index, value) => {
    const newMembers = [...members];
    newMembers[index] = value;
    setMembers(newMembers);
  };

  const addMember = () => {
    setMembers([...members, ""]);
  };

  const removeMember = (index) => {
    const newMembers = [...members];
    newMembers.splice(index, 1);
    setMembers(newMembers);
  };

  const createGroup = () => {
    console.log("Group Name:", groupName);
    console.log("Group Members:", members);
  };

  return (
    <div className="create-group-container">
      <h2>Create a Group</h2>

      <div className="grpname-group">
        <label>Group Name</label>
        <input type="text" value={groupName} onChange={handleGroupNameChange} />
      </div>
      <br />

      <label>Members</label>
      <div className="members-grp">
        {members.map((member, index) => (
          <MemberInput
            key={index}
            value={member}
            onChange={(e) => handleMemberChange(index, e.target.value)}
            onRemove={() => removeMember(index)}
          />
        ))}
      </div>
      <button type="button" onClick={addMember}>
        Add Member
      </button>

      <button className="create-group-btn" onClick={createGroup}>
        Create Group
      </button>
    </div>
  );
};

export default CreateGroupPage;
