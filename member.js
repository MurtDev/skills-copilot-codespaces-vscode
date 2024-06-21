function skillsMembers() {
    const members = [
        { name: 'Tom', skills: ['React', 'Node'] },
        { name: 'Jhon', skills: ['React', 'Node'] },
        { name: 'Paul', skills: ['React', 'Node'] },
    ];

    const skills = members.map(member => member.skills).flat();
    console.log(skills);
}