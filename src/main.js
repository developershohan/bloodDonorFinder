
  
  // Find members by blood group who are ready to donate blood
  function findMembersByBloodGroup(bloodGroup) {
    const matchedMembers = donner.filter(member => member.bloodGroup === bloodGroup && member.donationHistory.length > 0) || member.phoneNumber === phoneNumber;
    return matchedMembers;
  }
  
  // Example usage: Find members with blood group A+ who are ready to donate blood
  const APositiveMembers = findMembersByBloodGroup('B+');
  console.table('Members with blood group A+ who are ready to donate blood:', APositiveMembers);
  
  // Example usage: Search member with phone number '9876543210' and retrieve their donation history
  const phoneNumber = '01968486280';
  const member = findMembersByBloodGroup(phoneNumber);
  if (member) {
    console.table(`Member with phone number ${phoneNumber} found. Donation history:`, member.donationHistory);
  } else {
    console.table(`No member found with phone number ${phoneNumber}`);
  }